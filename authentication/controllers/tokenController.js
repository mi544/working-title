const db = require("../models");
const genId = require("../utils/randomIdGenerator");

module.exports = {
    /**
     * @typedef TokenCallResult
     * @type {object}
     * @property {boolean} success - Specifying whether the call was successful
     * @property {string} reason - Providing a reason if it wasn't successful
     * @property {string} userId - A userId associated with the token
     * @property {string} token - Token of the user. Only included if the call was successful
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
            return {
                success: true,
                token: TokenInstance.token,
                userId: UserInstance.userId
            };
        } catch (error) {
            console.log(error);
        }
    },
    /** Provides a userId for a specified token
     *
     * Function is ASYNC! AWAIT it!
     * @param {string} token - The token to get a userId for
     * @returns {TokenCallResult} Object with information about the result of the call
     */
    getUserIdAssociatedWithToken: async token => {
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
            const UserInstance = await TokenInstance.getUser();
            if (UserInstance === null) {
                return {
                    success: false,
                    reason: "No user is associated with that token."
                };
            }
            return {
                success: true,
                token: TokenInstance.token,
                userId: UserInstance.userId
            };
        } catch (error) {
            console.log(error);
        }
    },
    /** Provides all tokens for a specified userId
     *
     * Function is ASYNC! AWAIT it!
     * @param {string} token - An active token of the user
     * @param {string} userId - The userId to get tokens for
     * @returns {TokenCallResult} Object with information about the result of the call
     */
    getAllTokensAssociatedWithUserId: async (token, userId) => {
        try {
            if (!token) return { success: false, reason: "No token provided." };
            if (!userId) return { success: false, reason: "No userId provided." };
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
            if (!TokenInstance.active) {
                return {
                    success: false,
                    reason: "Provided token is not active."
                };
            }
            const ReceivedUserInstance = await db.User.findOne({
                where: {
                    userId: userId
                }
            });
            if (ReceivedUserInstance === null) {
                return {
                    success: false,
                    reason: "Provided user not found."
                };
            }
            const AssociatedUserInstance = await TokenInstance.getUser();
            if (AssociatedUserInstance.userId !== ReceivedUserInstance.userId) {
                return {
                    success: false,
                    reason: "Access denied - provided token belongs to a different user."
                };
            }
            const AssociatedTokenInstancesArray = await AssociatedUserInstance.getTokens({
                where: { active: true }
            });
            const AssociatedTokensArray = AssociatedTokenInstancesArray.map(
                async item => item.token
            );
            const ResolvedTokensArray = await Promise.all(AssociatedTokensArray);
            return {
                success: true,
                token: ResolvedTokensArray,
                userId: AssociatedUserInstance.userId
            };
        } catch (error) {
            console.log(error);
        }
    },
    /** Deactivates a specific token
     *
     * Function is ASYNC! AWAIT it!
     * @param {string} token - The token to be deactivated
     * @param {string} userId - The userId associated with this token
     * @returns {TokenCallResult} Object with information about the result of the call
     */
    deactivateTokenOfUser: async (token, userId) => {
        try {
            if (!token) return { success: false, reason: "No token provided." };
            if (!userId) return { success: false, reason: "No userId provided." };
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
            const AssociatedUserInstance = await TokenInstance.getUser();
            if (AssociatedUserInstance === null) {
                return {
                    success: false,
                    reason: "No user is associated with the provided token."
                };
            }
            const ReceivedUserInstance = await db.User.findOne({
                where: { userId: userId }
            });
            if (ReceivedUserInstance === null) {
                return {
                    success: false,
                    reason: "No user found with provided userId."
                };
            }
            if (AssociatedUserInstance.userId !== ReceivedUserInstance.userId) {
                return {
                    success: false,
                    reason: "Access denied - provided token belongs to a different user."
                };
            }
            if (TokenInstance.active === false) {
                return {
                    success: false,
                    reason: "Provided token is already deactivated."
                };
            }
            TokenInstance.active = false;
            const updatingResult = await TokenInstance.save();
            return {
                success: true,
                token: TokenInstance.token,
                userId: AssociatedUserInstance.userId
            };
        } catch (error) {
            console.log(error);
        }
    },
    /** Deactivates all tokens for a specific user
     *
     * Function is ASYNC! AWAIT it!
     * @param {string} activeToken - The token of the account to remain active
     * @param {string} userId - The userId of the account to deactivate all tokens for
     * @returns {TokenCallResult} Object with information about the result of the call
     */
    deactivateAllTokensOfUserBesidesActive: async (activeToken, userId) => {
        try {
            if (!activeToken)
                return { success: false, reason: "No active token provided." };
            if (!userId) return { success: false, reason: "No usedId provided." };
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
            const AssociatedUserInstance = await ActiveTokenInstance.getUser();
            if (AssociatedUserInstance === null) {
                return {
                    success: false,
                    reason: "No user is associated with the provided token."
                };
            }
            const ReceivedUserInstance = await db.User.findOne({
                where: {
                    userId: userId
                }
            });
            if (ReceivedUserInstance === null) {
                return {
                    success: false,
                    reason: "Provided userId not found."
                };
            }
            if (AssociatedUserInstance.userId !== ReceivedUserInstance.userId) {
                return {
                    success: false,
                    reason: "Access denied - provided token belongs to a different user."
                };
            }
            const associatedTokens = await ReceivedUserInstance.getTokens();
            for (token of associatedTokens) {
                const CurrentTokenInstance = token;
                if (CurrentTokenInstance.token !== activeToken) {
                    CurrentTokenInstance.active = false;
                    await CurrentTokenInstance.save();
                }
            }

            return {
                success: true,
                token: ActiveTokenInstance.token,
                userId: ReceivedUserInstance.userId
            };
        } catch (error) {
            console.log(error);
        }
    }
};
