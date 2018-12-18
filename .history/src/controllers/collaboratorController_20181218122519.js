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

    /*show(req, res, next){
        collaboratorQueries.getWiki(req.params.id, (err, collaborator) => {
          if(err || post == null){
            res.redirect(404, "/");
          } else {
            res.render("collaborators/show", {collaborator});
          }
        });
      },*/
    
      show(req, res, next) {
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
}