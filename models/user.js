const {
    Schema,
    model
}

= require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'You need to provide a username!',
        trim:true
    },
    email: {
        type:String,
        required: 'You need to provide an email address!',
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]

}, {
    toJSON: {
        virtuals: true
    },
    
});

UserSchema.virtual('friendCount').get(function() {
    const length = this.friends.length
    const friendsList = this.friends.map(friend => friend.username);
    return {
        length,
        friendsList
    }
})

const User = model('User', UserSchema);

model.exports = User;