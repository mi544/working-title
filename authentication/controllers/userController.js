const db = require("../models");
const { v4: uuidv4 } = require("uuid");

module.exports = {
    /** Creates a user with provided credentials
     *
     * Function is ASYNC! AWAIT it!
     * @param {string} email - The email of account to be created
     * @param {string} password - The password of account to be created
     * @returns {string} Created user's userId
     */
    createUserWithCredentials: async (email, password) => {
        /** Generates a unique UUID
         *
         * Function is ASYNC! AWAIT it!
         * @returns {string} Unique UUID
         */
        const generateUUID = async () => {
            let queryResult;
            let currentUUID;
            try {
                do {
                    currentUUID = uuidv4();
                    queryResult = await db.User.findAll({
                        where: { userId: currentUUID }
                    });
                } while (queryResult.length);
            } catch (error) {
                console.log(error);
            }
            return currentUUID;
        };
        try {
            const UUID = await generateUUID();
            const creationResult = await db.User.create({
                userId: UUID,
                email: email,
                password: password
            });
            return await creationResult.toJSON().userId;
        } catch (error) {
            console.log(error);
        }
    },
    /**
     * @typedef ValidationResults
     * @type {object}
     * @property {boolean} success - Specifying whether the validation was successful
     * @property {string} reason - Providing a reason if it wasn't successful
     * @property {string} userId - userId of the validated user. Only included if validation was successful
     */

    /**
     * Validates provided user credentials
     *
     * Function is ASYNC! AWAIT it!
     * @param {string} email - The email of account to be validated
     * @param {string} password - The password of account to be validated
     * @returns {ValidationResults} Object with information about the result of validation
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
