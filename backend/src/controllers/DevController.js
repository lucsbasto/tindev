const axios = require("axios")
const Dev = require("../models/Dev")
module.exports = {
    async store(req, res) {
        console.log(req.body)
        const { username } = req.body;
        const userExists = await Dev.findOne({ user: username }).exec()
        if (userExists) {
            return res.json(userExists)
        }
        const response = await axios.get(`https://api.github.com/users/${username}`)
        const { name, bio, avatar_url: avatar } = response.data
        const dev = await Dev.create({
            user: username,
            name,
            bio,
            avatar
        })
        return res.json(dev)
    },

    async index(req, res) {
        const { user } = req.headers;
        const loggedUser = await Dev.findOne({ _id: user })
        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedUser.likes } },
                { _id: { $nin: loggedUser.dislikes } }
            ]
        })
        return res.json(users)
    }
}