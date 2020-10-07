const db = require("../models");
const idGen = require("../utils/randomIdGenerator");

module.exports = {
    /**
     * @typedef UserCallResult
     * @type {object}
     * @property {boolean} success - Specifying whether the call was successful
     * @property {string} reason - Providing a reason if it wasn't successful
     * @property {string} userId - userId of the user. Only included if the call was successful
     */

    /** Creates a user with provided credentials
     *
     * Function is ASYNC! AWAIT it!
     * @param {string} email - The email of account to be created
     * @param {string} password - The password of account to be created
     * @returns {UserCallResult} Object with information about the result of creation
     */
    createUserWithCredentials: async (email, password) => {
        /** Generates a unique ID
         *
         * Function is ASYNC! AWAIT it!
         * @returns {string} Unique ID
         */
        const generateUniqueId = async () => {
            try {
                let queryResult;
                let currentId;
                do {
                    currentId = idGen.generateId(10);
                    queryResult = await db.User.findOne({
                        where: { userId: currentId }
                    });
                } while (queryResult !== null);
                return currentId;
            } catch (error) {
                console.log(error);
            }
        };
        try {
            if (!email) return { success: false, reason: "No email provided." };
            if (!password) return { success: false, reason: "No password provided." };
            const queryEmail = await db.User.findOne({
                where: { email: email }
            });
            if (queryEmail !== null) {
                return { success: false, reason: "Email already exists." };
            }

            const uniqueId = await generateUniqueId();
            const creationResult = await db.User.create({
                userId: uniqueId,
                email: email,
                password: password
            });
            return {
                success: true,
                userId: await creationResult.toJSON().userId
            };
        } catch (error) {
            console.log(error);
        }
    },
    /**
     * Validates provided user credentials
     *
     * Function is ASYNC! AWAIT it!
     * @param {string} email - The email of account to be validated
     * @param {string} password - The password of account to be validated
     * @returns {UserCallResult} Object with information about the result of validation
     */
    validateUserCredentials: async (email, password) => {
        try {
            if (!email) return { success: false, reason: "No email provided." };
            if (!password) return { success: false, reason: "No password provided." };
            // Looking for such email
            const queryEmailResult = await db.User.findOne({ where: { email: email } });
            if (queryEmailResult === null) {
                // Email doesn't match -> no account with such email
                return { success: false, reason: "Requested email is not found." };
            } else {
                // Email matched -> need to check password
                const queryEmailPasswordResult = await db.User.findOne({
                    // TODO ADD ENCRYPTION HERE (bcrypt or alternatives)
                    where: { email: email, password: password }
                });
                if (queryEmailPasswordResult === null) {
                    // Password doesn't match -> wrong password
                    return { success: false, reason: "Password is incorrect." };
                } else {
                    // Password matches -> user validated
                    return {
                        success: true,
                        userId: await queryEmailPasswordResult.toJSON().userId
                    };
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
};
