const userQueries = require("../db/queries.users.js");
const passport = require("passport");
const User = require("../db/models").User;
const sgMail = require('@sendgrid/mail');
const stripe = require("stripe")(process.env.STRIPE_TEST_API_KEY);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
                  to: newUser.email,
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
                    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                    sgMail.send(msg);
                   res.redirect("/");
                 })
               }
             });
           },

    signUp(req, res, next){
      res.render("users/signup");
    },

    signInForm(req, res, next){
      res.render("users/signin");
    },

    signIn(req, res, next){
        passport.authenticate("local")(req, res, function () {
        if(!req.user){
            req.flash("notice", "Sign in failed. Please try again.")
            res.redirect("/users/signin");
        } else {
            req.flash("notice", "You've successfully signed in!");
            res.redirect("/");
        }
        })
    },

    signOut(req, res, next){
        req.logout();
        req.flash("notice", "You've successfully signed out!");
        res.redirect("/");
      },

    show(req, res, next){
         userQueries.getUser(req.params.id, (err, user) => {
           if(err || user === undefined){
             req.flash("notice", "No user found with that ID.");
             res.redirect("/");
           } else {
             res.render("users/show", {user});
           }
         });
       },

    /*upgrade(req, res, next){
      const token = request.body.stripeToken; // Using Express

      const charge = stripe.charges.create({
        amount: 17,
        currency: 'usd',
        description: 'Premium',
        source: token,
      })

      userQueries.getUpgrade(req.params.id, (err, result) => {
        if(err || result.user === undefined){
          req.flash("notice", "No user found with that ID.");
          res.redirect("/");
        } else {
          res.render("users/show", {...result});
        }
      })
    },*/

    downgradeForm(req, res, next){
      userQueries.getUser(req.params.id, (err, user) => {
        if(err || user === undefined){
            req.flash("notice", "No user found with that ID.");
            res.redirect("/");
        } else {
            res.render("users/downgrade", {user});
       }
    });
 },
 // error
    downgrade(req, res, next){
      userQueries.updateUserRole(req, (err, result) => {
        if(err || result.id === undefined){
            req.flash("notice", "No user found with that ID.");
            res.redirect("users/show");
        } else {
            req.flash("notice", "Downgraded to standard membership");
            res.render("users/show", {...result});
        }

      })
    },
    
  }

  