const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');



const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters long"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
        validate: [isEmail, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"]
    }
}, { timestamps: true });

// Middleware to see if password matches confirm password
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword) // getter
    .set(value => this._confirmPassword = value); // setter

// Middleware to see if password matches confirm password

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

// Middleware to hash password before saving to database

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hashedPassword => {
            this.password = hashedPassword;
            next();
        });
});


const User = mongoose.model("User", UserSchema);
module.exports = User;