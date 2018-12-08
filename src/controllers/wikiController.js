const wikiQueries = require("../db/queries.wikis.js");

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
    res.render("wikis/new");
  },

  create(req, res, next){
          let newWiki = {
            title: req.body.title,
            body: req.body.body,
          };
          wikiQueries.addWiki(newWiki, (err, wiki) => {
            if(err){
              res.redirect(500, "wikis/new");
            } else {
              res.redirect(303, `/wikis/${wiki.id}`);
            }
          });
      },

show(req, res, next){
     wikiQueries.getWiki (req.params.id, (err, wiki) => { // we use re.params because the information we need is in the URL, i.e. the value 5 is stored in ID. We must use ID to define this route.
       if(err || wiki == null){  // check error or wiki with no record
         console.log(err);
         res.redirect(404, "/"); //  if err or null is found, return a not found status code, and then redirect to root page.
       } else {
         res.render("wikis/show", {wiki}); // otherwise, return the SHOW partial view and pass the wiki record and render it.
       }
     });
   },

destroy(req, res, next){
 wikiQueries.deleteWiki(req, (err, wiki) => {
   if(err){
     res.redirect(err, `/wikis/${req.params.id}`)
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
         res.render("wikis/edit", {wiki});
      }
     });
 },

update(req, res, next){
 wikiQueries.updateWiki(req, req.body, (err, wiki) => {
   if(err || wiki == null){
     res.redirect(401, `/wikis/${req.params.id}/edit`);
   } else {
     res.redirect(`/wiki/${req.params.id}`);
   }
 });
}
}
//