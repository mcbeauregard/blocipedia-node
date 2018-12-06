const userQueries = require("../db/queries.users.js");
const passport = require("passport");
const sgMail = require('@sendgrid/mail');

module.exports = {
    create(req, res, next){
             let newUser = {
               username: req.body.username,
               email: req.body.email,
               password: req.body.password,
               passwordConfirmation: req.body.passwordConfirmation
             };

             userQueries.createUser(newUser, (err, user) => {
              const msg = {
                  to: req.body.email,
                  from: 'testing@example.com',        
                  subject: 'User Confirmation',
                  text: 'Please confirm your Blocipedia account.',
                  html: '<strong>Please login to your account to confirm membership!</strong>',
                };
                
               if(err){
                 req.flash("error", err);
                 res.redirect("/users/signup");
               } else {
    
                 passport.authenticate("local")(req, res, () => {
                   req.flash("notice", "You've successfully signed in!");
                   sgMail.setApiKey('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');
                   sgMail.send(msg);
                   res.redirect("/");
                 })
               }
             });
           },

    signUp(req, res, next){
      res.render("users/signup");
    },
    
  }

  