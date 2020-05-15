const jwt = require('jsonwebtoken');

module.exports = (user) => {
    const data = {
        _id: user._id,
        name: user.name,
        email: user.email
    };
return jwt.sign({data},process.env.SIGNATURE_STRING, {expiresIn: process.env.EXPIRATION});
} 

