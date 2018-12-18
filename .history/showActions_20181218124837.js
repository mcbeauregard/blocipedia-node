SHOW ACTION
query method, controller action, route, and view.
BLOCCIT

Wiki

x WIKI QUERIES
getWiki(id, callback){
        return Wiki.findById(id,{ include: [ {model: Collaborator, as: "collaborators", include: [ {model: User} ]}, ]})
        .then((wiki) => {
            callback(null, wiki);
        })
        .catch((err) => {
            callback(err);
        })
    },

ORRR

getWiki(id, callback){ 
  return Wiki.findById(id,{ include: [ {model: Collaborator, as: "collaborators", include: [ {model: User} ]}, ]}) 
  .then((wiki) => {
    Collaborator.scope({method: ["collaboratorsFor", wiki.id]}).all()
      .then((collaborators) => {
        wiki.collaborators = collaborators;
        callback(null, wiki);
      }).catch((err) => {
        console.log("Error finding collaborators for wiki");
        console.log(err);
        callback(err);
      });
  }) 
  .catch((err) => { 
    console.log("Error finding wiki");
    callback(err); 
  }) 
}, 

WIKI CONTROLLER

SHOW
show(req, res, next){
	        wikiQueries.getWiki(req.params.id, (err, result) => {
		    wiki = result["wiki"];
		    collaborators = result["collaborators"];


	            if(err || wiki == null){
	                res.redirect(404, "/");
	            } else {
			const authorized = new Authorizer(req.user, wiki, collaborators).showCollaborators();
	                if(authorized){
	                    wiki.body = markdown.toHTML(wiki.body);
	                    res.render("wikis/show", {wiki});
	                } else {
	                    req.flash("notice", "You are not authorized to do that.");
	                    res.redirect(`/wikis`);
	                }
	            }
	        });
	    },

ORRR

show(req, res, next){
    wikiQueries.getWiki (req.params.id, (err, result) => { // we use re.params because the information we need is in the URL, i.e. the value 5 is stored in ID. We must use ID to define this route.
      wiki = result['wiki'];
      wiki.collaborators = result["collaborators"]

      if(err || wiki == null){  // check error or wiki with no record
        res.redirect(404, "/"); //  if err or null is found, return a not found status code, and then redirect to root page.
      } else {
       console.log(wiki);
       wiki.body = markdown.toHTML(wiki.body);
        res.render("wikis/show", {wiki}); // otherwise, return the SHOW partial view and pass the wiki record and render it.
      }
    });
  },

EDIT
	    edit(req, res, next){
	        wikiQueries.getWiki(req.params.id, (err, result) => {
		    wiki = result["wiki"];
		    collaborators = result["collaborators"];
	            if(err || wiki == null){
	                res.redirect(404, "/");
	            } else {
			const authorized = new Authorizer(req.user, wiki, collaborators).edit();
			if(authorized){
	                  res.render("wikis/edit", {wiki, collaborators});
			} else {
			  req.flash("notice", "You are not authorized to do that.");
	                  res.redirect(`/wikis/${req.params.id}`);
			}
	            }
	        });
	    },



————
Collaborators


x QUERY
src/db/queries.users.js
 getUser(id, callback){
	    let result = {};
	    User.findById(id)
	    .then((user) => {
	      if(!user){
	        callback(404);
	      } else {
	        result["user"] = user;
	        Collaborator.scope({method: ["collaborationsFor", id]}).all()
	        .then((collaborations) => {
	          result["collaborations"] = collaborations;
	          callback(null, result);
	        })
	        .catch((err) => {
	          callback(err);
	        })
	      }
	    })
	  }

x CONTROLLER
Implement the show action in collaboratorController.js:
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


X ROUTE
bloccit/src/routes/collaborators.js
router.get(“/wikis/:wikiId/collaborators/:id", collaboratorController.show);
or
router.get(“/wikis/:wikiId/collaborators", collaboratorController.show);

VIEW
bloccit/src/views/collaborators/show.ejs
<!DOCTYPE html>
<html>
  <head>
    <% include ../static/partials/head.ejs %>
  </head>
  <body>
    <% include ../static/partials/navbar.ejs %>

    <main class="container">
      <h1>Collaborator</h1>

      //<p><%= collaborator.userId %></p>
    </main>

    <% include ../static/partials/baseScripts.ejs %>

  </body>
</html>



————
Users


x QUERY
src/db/queries.users.js
 getUser(id, callback){
	    let result = {};
	    User.findById(id)
	    .then((user) => {
	      if(!user){
	        callback(404);
	      } else {
	        result["user"] = user;
	        Collaborator.scope({method: ["collaborationsFor", id]}).all()
	        .then((collaborations) => {
	          result["collaborations"] = collaborations;
	          callback(null, result);
	        })
	        .catch((err) => {
	          callback(err);
	        })
	      }
	    })
	  }

x CONTROLLER
Implement the show action in userController.js:

 showCollaborations(req, res, next){
	     userQueries.getUser(req.user.id, (err, result) => {
	       user = result["user"];
	       collaborations = result["collaborations"];
	       if(err || user == null){
	         res.redirect(404, "/");
	       } else {
	         res.render("users/collaborations", {user, collaborations});
	       }
	     });
	   }
	 }

x ROUTE
bloccit/src/routes/users.js
router.get("/users/collaborations", userController.showCollaborations);


x VIEW
bloccit/src/views/users/collaborations.ejs
<!DOCTYPE html>
	<html>
	  <head>
	    <% include ../static/partials/head.ejs %>
	  </head>
	  <body>
	    <% include ../static/partials/navbar.ejs %>


	    <main class="container">


	      <% include ../static/partials/messages.ejs %>


	        <h1> Collaborations</h1>


	        <% if(collaborations.length !== 0) { %>
	          <p>
	          <ul class ="list-group">
	            <% collaborations.forEach((collaboration) => {  %>
	                <li class="list-group-item">
	                      <a href="/wikis/<%= collaboration.Wiki.id %>"><%= collaboration.Wiki.title %></a>
	               </li>
	            <% }) %>
	          </ul>
	        </p>
	        <% } else { %>
	            <p class="lead">You are not a collaborator on any wikis!</p>
	        <% } %>


	    </main>


	  </body>
	</html> 

