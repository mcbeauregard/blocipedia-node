const wikiQueries = require("../db/queries.wikis.js");
const Authorizer = require("../policies/application");
const markdown = require( "markdown" ).markdown;
const userQueries = require('../db/queries.users');


module.exports = {
  
  index(req, res, next) {
    wikiQueries.getAllWikis((err, wikis) => {
        if(err){                
            res.redirect(500, "static/index");
        } else {
            res.render("wikis/index", {wikis});
        }
    })
},

  new(req, res, next){
    const authorized = new Authorizer(req.user).new();
   
        if(authorized) {
          res.render("wikis/new");
        } else {
          req.flash("notice", "You are not authorized to do that.");
          res.redirect("/wikis");
        }
      },

  create(req, res, next) {
    const authorized = new Authorizer(req.user).create();
    
    if(authorized) {
    let newWiki = {
      title: req.body.title,
      body: req.body.body,
      userId: req.user.id,
      private: req.body.private,
      userId: req.user.id
    };
    wikiQueries.addWiki(newWiki, (err, wiki) => {
      if (err) {
        res.redirect(500, "/wikis/new");
      } else {
        res.redirect(303, `/wikis/${wiki.id}`);
      }
    });
  } else {
          req.flash("notice", "You are not authorized to do that.");
          res.redirect("/wikis");
        }
      },

show(req, res, next){
     wikiQueries.getWiki (req.params.id, (err, wiki) => { // we use re.params because the information we need is in the URL, i.e. the value 5 is stored in ID. We must use ID to define this route.
       if(err || wiki == null){  // check error or wiki with no record
         res.redirect(404, "/"); //  if err or null is found, return a not found status code, and then redirect to root page.
       } else {
        wiki.body = markdown.toHTML(wiki.body);
         res.render("wikis/show", {wiki}); // otherwise, return the SHOW partial view and pass the wiki record and render it.
       }
     });
   },

destroy(req, res, next){
 wikiQueries.deleteWiki(req.params.id, (err, wiki) => {
   if(err){
     res.redirect(err, `/wikis/${wiki.id}`)
   } else {
     res.redirect(303, "/wikis")
   }
 });
},

 edit(req, res, next){
    wikiQueries.getWiki(req.params.id, (err, wiki) => {
      if(err || wiki == null){
        res.redirect(404, "/");
      } else {

        const authorized = new Authorizer(req.user, wiki).edit();

      if(authorized){
         res.render("wikis/edit", {wiki});
        } else {
          req.flash("You are not authorized to do that.")
          res.redirect(`/wikis/${req.params.id}`)
        }
      }
     });
 },

 update(req, res, next) {
  wikiQueries.updateWiki(req, req.body, (err, wiki) => {

      if (err || wiki == null) {
          res.redirect(401, `/wikis/${req.params.id}/edit`);
      } else {
          res.redirect(`/wikis/${req.params.id}`);
      }
  });
},

private(req, res, next) {
  wikiQueries.getAllWikis((err, wikis) => {
      if(err){                
          res.redirect(500, "static/index");
      } else {
          res.render("wikis/private", {wikis});
      }
  })
},

}
