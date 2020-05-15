const argon2 = require('argon2');
const UserModel = require('../Model/User');

const SignUpService = async (email,name,password) => {
        
        const passwordHashed = await argon2.hash(password);

        const userRecord = await UserModel.create({
            password: passwordHashed,
            email,
            name
        });

        return {
                email: userRecord.email,
                name: userRecord.name
            }
 }   


    module.exports = SignUpService;