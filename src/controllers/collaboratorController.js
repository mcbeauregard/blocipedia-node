const collaboratorQueries = require("../db/queries.collaborators.js");
const Authorizer = require("../policies/application");
const wikiQueries = require("../db/queries.wikis.js");

module.exports = {

    create(req, res, next) {
        collaboratorQueries.createCollaborator(req, (err, collaborator) => {
            if (err) {
                req.flash("error", err);
            }
            res.redirect(req.headers.referer);
        });
    },

    delete(req, res, next) {
        if (req.user) {
            collaboratorQueries.deleteCollaborator(req, (err, collaborator) => {
                if (err) {
                    req.flash("error", err);
                }
                res.redirect(req.headers.referer);
            });
        } else {
            req.flash("notice", "You must be signed in to do that");
            res.redirect(req.headers.referer);
        }
    },

    /*show(req, res, next) {
        wikiQueries.getWiki(req.params.id, (err, user) => {
          wiki = result['wiki'];
          collaborators = result["collaborators"];
    
          if (err || wiki == null) {
            res.redirect(404, '/');
          } else {
            wiki.body = markdown.toHTML(wiki.body);
            res.render("collaborators/show", { wiki, user });
          }
        });
    },*/

    show(req, res, next) { // works
	    wikiQueries.getWiki(req.params.wikiId, (err, result) => {
	      wiki = result["wiki"];
	      collaborations = result["collaborations"];
            
          if (err || wiki == null) {
	          res.redirect(404, "/");
	        } else {
	          const authorized = new Authorizer(req.user, wiki, collaborations).edit();
	            if (authorized) {
	              res.render("collaborators/show", { wiki, collaborations });
	            } else {
	              req.flash("notice", "You are not authorized to do that.");
	              res.redirect(`/wikis/${req.params.wikiId}`)
	            }
	        }
	      });
      },
      

    /*show(req, res, next){
        collaboratorQueries.getWiki(req.params.id, (err, collaborator) => {
          if(err || post == null){
            res.redirect(404, "/");
          } else {
            res.render("collaborators/show", {collaborator});
          }
        });
      },*/
    
      /*show(req, res, next){
        wikiQueries.getWiki (req.params.id, (err, wiki) => { // we use re.params because the information we need is in the URL, i.e. the value 5 is stored in ID. We must use ID to define this route.
          if(err || wiki == null){  // check error or wiki with no record
            res.redirect(404, "/"); //  if err or null is found, return a not found status code, and then redirect to root page.
          } else {
           console.log(wiki);
           wiki.body = markdown.toHTML(wiki.body);
            res.render("wikis/show", {wiki}); // otherwise, return the SHOW partial view and pass the wiki record and render it.
          }
        });
      },*/
}