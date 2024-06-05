const {User, Thought} = require('../models');

const userController = {
    async getAllUsers(req, res) {
        try {
            const dbUsersData = await User.find().populate("thoughts").populate("friends")
            res.json(dbUsersData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async getSingleUser(req, res) {
        try {
            const dbUserData =await User.findOne({_id: req.params.userId}).populate("thoughts").populate("friends")
            if (!dbUserData) {
                return res.status(404).json({message: "No user found with this id!"})
            } 
            res.json(dbUserData)
        } 
        catch (err) {
                console.log(err)
                res.status(500).json(err)
        }
    },
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body)
            res.json(dbUserData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async updateUser(req, res) {
        try {
            const dbUserData = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$set: req.body},

                 {new: true})
                    res.json(dbUserData)
            } catch (err) {
                console.log(err)
                res.status(500).json(err)
            }
    },
    async deleteUser(req, res) {
        try {
            const dbUserData = await User.findOneAndDelete({_id: req.params.userId})
            if (!dbUserData) {
                return res.status(404).json({message: "No user found with this id!"})
            }
            res.json(dbUserData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    async addFriend(req, res) {
        try {
            const dbUserData = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$addToSet: {friends: req.params.friendId}},
                {new: true}
            )
            if (!dbUserData) {
                return res.status(404).json({message: "No user found with this id!"})
            }
            res.json(dbUserData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async deleteFriend(req, res) {
        try {
            const dbUserData = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$pull: {friends: req.params.friendId}},
                {new: true}
            )
            if (!dbUserData) {
                return res.status(404).json({message: "No user found with this id!"})
            }
            res.json(dbUserData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
            


}

module.exports = userController;