const db = require("../models");
const genId = require("../utils/randomIdGenerator");

module.exports = {
    /**
     * @typedef TokenCallResult
     * @type {object}
     * @property {boolean} success - Specifying whether the call was successful
     * @property {string} reason - Providing a reason if it wasn't successful
     * @property {string} token - Token of the user. Only included if the call was successful
     * @property {object} tokenInstance - Token Sequelize Instance.
     * Utilize to associate with a particular user.
     * Only included if the call was successful
     */

    /** Creates a token for provided userId
     *
     * Function is ASYNC! AWAIT it!
     * @param {string} userId - The userId of account to create a token for
     * @returns {TokenCallResult} Object with information about the result of the call
     */
    createAndAssignTokenToUser: async userId => {
        /** Generates a unique token
         *
         * Function is ASYNC! AWAIT it!
         * @returns {TokenCallResult} Object with information about the result of the call
         */
        const generateUniqueToken = async () => {
            try {
                let queryResult;
                let currentToken;
                do {
                    currentToken = genId.generateId(35);
                    queryResult = await db.Token.findOne({
                        where: { token: currentToken }
                    });
                } while (queryResult !== null);
                return currentToken;
            } catch (error) {
                console.log(error);
            }
        };
        try {
            if (!userId) return { success: false, reason: "No userId provided." };
            const uniqueToken = await generateUniqueToken();
            const TokenInstance = await db.Token.create({
                token: uniqueToken,
                active: true
            });
            const UserInstance = await db.User.findOne({
                where: {
                    userId: userId
                }
            });
            const associationResult = await TokenInstance.setUser(UserInstance);
            console.log("associationResult:\n\n\n");
            console.log(associationResult);
            console.log("\n\n\n");
            return {
                success: true,
                token: (await TokenInstance.toJSON()).token,
                tokenInstance: associationResult
            };
        } catch (error) {
            console.log(error);
        }
    },
    /** Deactivates a specific token
     *
     * Function is ASYNC! AWAIT it!
     * @param {string} token - The token to be deactivated
     * @returns {TokenCallResult} Object with information about the result of the call
     */
    deactivateTokenOfUser: async token => {
        try {
            if (!token) return { success: false, reason: "No token provided." };
            const TokenInstance = await db.Token.findOne({
                where: {
                    token: token
                }
            });
            if (TokenInstance === null) {
                return {
                    success: false,
                    reason: "Provided token not found."
                };
            }
            TokenInstance.active = false;
            const updatingResult = await TokenInstance.save();
            console.log("updatingResult:\n\n\n");
            console.log(updatingResult);
            console.log("\n\n\n");
            return {
                success: true,
                token: (await TokenInstance.toJSON()).token,
                tokenInstance: TokenInstance
            };
        } catch (error) {
            console.log(error);
        }
    },
    /** Deactivates all tokens for a specific user
     *
     * Function is ASYNC! AWAIT it!
     * @param {string} userId - The userId of the account to deactivate all tokens for
     * @param {string} activeToken - The token of the account to remain active
     * @returns {TokenCallResult} Object with information about the result of the call
     */
    deactivateAllTokensOfUserBesidesActive: async (userId, activeToken) => {
        try {
            if (!userId) return { success: false, reason: "No usedId provided." };
            if (!activeToken)
                return { success: false, reason: "No active token provided." };
            const ActiveTokenInstance = await db.Token.findOne({
                where: {
                    token: activeToken
                }
            });
            if (ActiveTokenInstance === null) {
                return {
                    success: false,
                    reason: "Provided token not found."
                };
            }
            const UserInstance = await db.User.findOne({
                where: {
                    userId: userId
                }
            });
            if (UserInstance === null) {
                return {
                    success: false,
                    reason: "Provided userId not found."
                };
            }
            const associatedTokens = await UserInstance.getTokens();
            for (token of associatedTokens) {
                const CurrentTokenInstance = token;
                if ((await CurrentTokenInstance.toJSON().token) !== activeToken) {
                    CurrentTokenInstance.active = false;
                    await CurrentTokenInstance.save();
                }
            }

            return {
                success: true,
                token: (await ActiveTokenInstance.toJSON()).token,
                tokenInstance: ActiveTokenInstance
            };
        } catch (error) {
            console.log(error);
        }
    }
};
