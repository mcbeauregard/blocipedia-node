const userQueries = require("../db/queries.users.js");
const wikiQueries = require("../db/queries.wikis.js");
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

    /*show(req, res, next){
         userQueries.getUser(req.params.id, (err, user) => { // error
           if(err || user === undefined){
             req.flash("notice", "No user found with that ID.");
             res.redirect("/");
           } else {
             res.render("users/show", {user});
           }
         });
       },*/

    
       upgrade(req, res, next){
        const token = req.body.stripeToken;
        
        const charge = stripe.charges.create({
            amount: 1699,
            currency: 'usd',
            description: 'Premium plan',
            source: token,
        })

        userQueries.upgradeUserRole(req, (err, result) => {
            if(err || result.id === undefined){
                req.flash("notice", "Payment not successful.");
                res.redirect("users/paymentFail");
            } else {
                req.flash("notice", "Thank you for upgrading to the premium plan!");
                res.render("users/payment", {result});
            }
        })

    },

    downgrade(req, res, next){
      userQueries.downgradeUserRole(req, (err, result) => {
        if(err || result.id === undefined){
            req.flash("notice", "Unable to process your request");
            res.redirect("users/show");
        } else {
            wikiQueries.changeWikiToPublic(req.user.dataValues.id);
            req.flash("notice", "Success, you've switched to the basic plan.");
            res.render("users/downgradeShow", {result});
        }

      })
    },

    downgradeShow(req, res, next){
      res.render("users/downgradeShow"); 
    },

    payment(req, res, next){
      res.render("users/payment"); 
    },
    
    paymentFail(req, res, next){
      res.render("users/paymentFail"); 
    },

    showCollaborations(req, res, next) {
      userQueries.getUser(req.user.id, (err, result) => {
        user = result["user"];
        collaborations = result["collaborations"];
          if (err || user == null) {
            res.redirect(404, "/");
          } else {
            res.render("users/collaborations", { user, collaborations });
          }
      });
    }
  }

  