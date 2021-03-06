const Wiki = require("./models").Wiki;
const Authorizer = require("../policies/application");

module.exports = {

    getAllWikis(callback){
        return Wiki.all()
        .then((wikis) => {
            callback(null, wikis);
        })
        .catch((err) => {
            callback(err);
        })
    },
    addWiki(newWiki, callback){
        return Wiki.create(newWiki)
        .then((wiki) => {
          callback(null, wiki);
        })
        .catch((err) => {
          callback(err);
        })
    },

    getWiki(id, callback){
        return Wiki.findById(id, {
                  include: [{
                    model: Collaborator,
                    as: "collaborators"
                  }]
                })
        .then((wiki) => {
            callback(null, wiki);
        })
        .catch((err) => {
            callback(err);
        })
    },

    deleteWiki(id, callback){
        return Wiki.destroy({
            where: { id }
          })
        .then((wiki) => {
            callback(null, wiki);
        })
        .catch((err) => {
            callback(err);
        })
    },
    
///

    updateWiki(req, updatedWiki, callback) {
        return Wiki.findById(req.params.id)
        .then((wiki) => {

            if(!wiki){
                return callback("Wiki not found");
            }

            const authorized = new Authorizer(req.user, wiki).update();

            if(authorized){

                wiki.update(updatedWiki, {
                    fields: Object.keys(updatedWiki)
                })
                .then(() => {
                    callback(null, wiki);
                })
                .catch((err) => {
                    callback(err);
                });
            } else {
                req.flash("notice", "You are not authorized to do that.");
                callback("Forbidden");
            }
        });
    },

    changeWikiToPrivate(id) {
        return Wiki.all()
            .then((wikis) => {
                wikis.forEach((wiki) => {
                    if (wiki.userId == id && wiki.private == true) {
                        wiki.update({
                            private: true
                        })
                    }
                })
            })
            .catch((err) => {
                console.log(err);
            })
        },

        changeWikiToPublic(id) {
            return Wiki.all()
            .then((wikis) => {
                wikis.forEach((wiki) => {
                    if(wiki.userId == id && wiki.private == true) {
                        wiki.update({
                            private: false
                        })
                    }
                })
            })
            .catch((err) => {
                console.log(err);
            })
        },
}
//