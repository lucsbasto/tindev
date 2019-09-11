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
        loggedDev.dislikes.push(likedDev._id)
        await loggedDev.save()
        return res.json({ user: loggedDev })
    }
}