const collaboratorQueries = require("../db/queries.collaborators.js");
const Authorizer = require('../policies/application');
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

    show(req, res, next) {
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
    },

    showCollabs(req, res, next) {
        wikiQueries.getWiki(req.params.id, (err, user) => {
          if (err || wiki == null) {
            res.redirect(404, '/');
          } else {
            res.render("collabs/show", { wiki, user });
          }
        });
    }
}