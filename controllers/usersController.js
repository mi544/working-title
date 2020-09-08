const db = require("../models");

module.exports = {
    findAllUsersWithDetails: (req, res) => {
        db.UsersDetails.findAll()
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    findAllDetailsOfAUserById: (req, res) => {
        db.UsersDetails.findOne({ where: { UserId: Number(req.params.id) } })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
};