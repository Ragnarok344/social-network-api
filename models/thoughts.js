const  {
    Schema,
    model
} = require('mongoose');
const ReactionSchema = require('./reactions');
const ThoughtSchema = new Schema({

    thoughtText: {
        type: String,
        required: 'You need to provide a thought!',
        minlength: 10,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        //required: 'You need to provide a username!'
    },
    reactions: [ReactionSchema]
}, {
    toJSON: {
        virtuals: true
    },
    id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
