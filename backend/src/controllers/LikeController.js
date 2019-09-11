const Dev = require("../models/Dev")
module.exports = {
    async store(req, res) {
        const targetId = req.params.id
        const loggedId = req.headers.user

        const likedDev = await Dev.findOne({ _id: targetId }).exec()
        const loggedDev = await Dev.findOne({ _id: loggedId }).exec()

        if (!likedDev) {
            return res.status(400).json({ error: "Dev not exists" })
        }
        if (likedDev.likes.includes(loggedDev._id)) {
            console.log("DEU MATCH")
        }
        loggedDev.likes.push(likedDev._id)
        await loggedDev.save()
        return res.json({ user: loggedDev })
    }
}