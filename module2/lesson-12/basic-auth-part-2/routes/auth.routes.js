const bcrypt = require('bcrypt');
const saltRounds = 10;

const express = require('express');
const router = express.Router();

const User = require('../models/User.model');

/* GET Signup page */
router.get("/signup", (req, res, next) => {
  console.log('req.session', req.session)
    res.render('auth/signup')
});

router.post("/signup", (req, res, next) => {
    console.log('req.body', req.body)
    const { username, email, password } = req.body;

    bcrypt
    .genSalt(saltRounds)
    .then(salt => bcrypt.hash(password, salt))
    .then(hashedPassword => {
      return User.create({
        // username: username
        username,
        email,
        // passwordHash => this is the key from the User model
        //     ^
        //     |            |--> this is placeholder (how we named returning value from the previous method (.hash()))
        passwordHash: hashedPassword
      });
    })
    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
      res.redirect(`/auth/profile/${userFromDB.username}`)
    })
    .catch(error => next(error));

});

router.get('/login', (req, res) =>{
  console.log('req.session', req.session)
  res.render('auth/login')
})

router.post('/login', (req, res) => {
  console.log('req.body', req.body)
  const {username, password} = req.body;

  if(!username || !password){
  // if (username === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter both, username and password to login.'
    });
    return;
  }

  User.findOne({ username })
    .then(user => {
      console.log('user', user)
      if (!user) { // if user not found in the Db
        res.render('auth/login', { errorMessage: 'Username is not registered. Try with other username.' });
        return;
      } else if (bcrypt.compareSync(password, user.passwordHash)) { // if entered password matches user password
        const { username, email } = user;
        req.session.currentUser = { username, email }; // add property currentUser to my session
        res.render('auth/profile', user );
      } else { // if entered password doesnt match user.password
        res.render('auth/login', { errorMessage: 'Incorrect password.' });
      }
    })
    .catch(error => next(error));
})

router.get("/profile/:username", (req, res, next) => {
  // Session is configured ---> req.session
  // Use session to persist user loggedIn state ---> req.session.currentUser
   
    if(req.session.currentUser){
       User.findOne({ username: req.params.username })
        .then(foundUser => {
            console.log('foundUser', foundUser)
            res.render('auth/profile', foundUser)
        })
        .catch(err => console.log(err))
    }
    else{
      res.render('auth/profile')
    }
    
    
});

module.exports = router;