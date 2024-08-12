const mongoose = require("mongoose");
const { number } = require("zod");

mongoose.connect("mongodb+srv://psejal0109:bVqg35khWOmPtjCJ@cluster0.mownqsi.mongodb.net/");

const UserSchema= mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 3
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    }
});

const accountSchema= new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance:{
        type: Number,
        required: true
    } 
});

const User = mongoose.model("User", UserSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {
    User,
    Account,
};
