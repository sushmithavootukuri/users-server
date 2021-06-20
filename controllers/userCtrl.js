const User = require('../models/userModel')

const userCtrl = {
    createUsers: async (req, res) => {
        try {

            let allUsers = JSON.parse(req.body.data);

            for (let i = 0; i < allUsers.length; i++) {
                const { id, name, email, gender, status } = allUsers[i];
                const newUser = new User({ id, name, email, gender, status });
                try {
                    await newUser.save();
                } catch (error) {
                    console.log(error)
                }

            }

            res.json({ msg: "Users are saved" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },


    getUsers: async (req, res) => {
        try {
            const users = await User.find()
            res.json(users)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateUser: async (req, res) => {
        try {
            const { name, email, gender, status } = req.body;

            await User.findOneAndUpdate({ id: req.params.id }, {
                name, email, gender, status
            })
            res.json({ "msg": "Updated User successfully" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}


module.exports = userCtrl;