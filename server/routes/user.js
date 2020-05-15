const AuthSignIn = require('../services/index');
const jwt = require('jsonwebtoken');

const Routes = (app) => {
    const posts = [
    {
        title: 'Post1',
        id:1
    },
    {
        title: 'Post2',
        id:2
    },
    {
        title: 'Post3',
        id:3
    }];
 function isAuth(req,res,next) {
       if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
           const token = req.headers.authorization.split(' ')[1];
           jwt.verify(token,process.env.SIGNATURE_STRING, (err,user) => {
               if(err) res.send(401);
               req.data = user.data;
               next();
           });   
       } else {
           res.redirect('/signIn');
       }
    }

    function currentUser(req,res,next) {
        req.currentUser = req.data._id;
        next();
    }

    app.post('/signUp', async (req,res) => {
        const email = req.body.email;
        const name = req.body.name;
        const password = req.body.password;
        const data =  await AuthSignIn.signUp(email,name,password);
        res.send(data).status(200);
    });

    app.post('/signIn', async (req,res) => { 
        const { email,password } = req.body;
        const data =  await AuthSignIn.authSignIn(email,password);
        res.send(data).status(200);
    });
    
    app.get('/posts',isAuth,currentUser, (req,res) => {
        res.json(posts);
    })
}

module.exports = Routes;