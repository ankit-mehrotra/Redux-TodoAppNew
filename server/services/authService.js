const argon2 = require('argon2');
const UserModel = require('../Model/User');
const generateJWT = require('./jwtService');

const AuthService = async (email,password) => {
    const userRecord = await UserModel.findOne({email});
    if(!userRecord) {
        throw new Error('User not found');
    } else {
        const correctPassword = await argon2.verify(userRecord.password,password);
        if(!correctPassword){
            throw new Error('Incorrect Password');
        }
    }
    return {
        user: {
            email: userRecord.email,
            name: userRecord.name
        },
        token: generateJWT(userRecord)
    }
}

module.exports = AuthService;