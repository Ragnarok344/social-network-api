const {Thought, User} = require('../models');

const thoughtController = {
    async getAllThoughts(req, res) {
        try {
            const dbThoughtData = await Thought.find().sort({createdAt: -1})
            res.json(dbThoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async getSingleThought(req, res) {
        try {
            const dbThoughtData = await Thought.findOne({_id: req.params.thoughtId})
            if (!dbThoughtData) {
                return res.status(404).json({message: "No thought found with this id!"})
            }
            res.json(dbThoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async createThought(req, res) {
        try {
            const dbThoughtData = await Thought.create(req.body)
            const dbUserData = await User.findOneAndUpdate(
                {_id: req.body.userId},
                {$push: {thoughts: dbThoughtData._id} },
                {new: true}
            );
            if (!dbUserData) {
                return res.status(404).json({message: "No user found with this id!"})
            }
            res.json({message: "Thought created successfully!"});
          
        }catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
        
    },
    async updateThought(req, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$set: req.body},
                {runValidators: true, new: true}
            );
            if (!dbThoughtData) {
                return res.status(404).json({message: "No thought found with this id!"})
            }
            res.json(dbThoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async deleteThought(req, res) {
        try {
            const dbThoughtData = await Thought.findOneAndDelete({_id: req.params.thoughtId})
            if (!dbThoughtData) {
                return res.status(404).json({message: "No thought found with this id!"})
            }
            const dbUserData = await User.findOneAndUpdate(
                {thoughts: req.params.thoughtId},
                {$pull: {thoughts: req.params.thoughtId}},
                {new: true}
            );
            if (!dbUserData) {
                return res.status(404).json({message: "Thought removed, but no user found with this id!"})
            }
            res.json({message: "Thought deleted successfully!"});
            
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async addReaction(req, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
               {$addToSet: {reactions: req.body} },
                {runValidators: true, new: true}
            );
            if (!dbThoughtData) {
                return res.status(404).json({message: "No thought found with this id!"})
            }
            res.json(dbThoughtData)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
    async removeReaction(req, res) {
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$pull: {reactions: {reactionId: req.params.reactionId}}},
                {runValidators: true, new: true}
            );
            if (!dbThoughtData) {
                return res.status(404).json({message: "No thought found with this id!"})
            }
            res.json({message: "Reaction deleted successfully!"});
            
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },
};

module.exports = thoughtController;
        
                
           