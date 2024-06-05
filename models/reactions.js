const  {
    Schema,Types
} = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: 'You need to provide a reaction!',
        minlength: 5,
        maxlength: 280
    },
    username: {
        type: String,
        required: 'You need to provide a username!'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    toJSON: {
        virtuals: true
    },
    id: false
});
module.exports = ReactionSchema;