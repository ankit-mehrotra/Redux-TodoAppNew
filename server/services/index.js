const signUpService = require('./signUpService');
const AuthService = require('./authService');
const JwtService = require('./jwtService');

module.exports  = {
 signUp: signUpService,
 authSignIn: AuthService,
 jwtService: JwtService

};