const User = require("./models").User;
const Wiki = require("./models").Wiki;
const bcrypt = require("bcryptjs");

module.exports = {
  createUser(newUser, callback){

    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);

    return User.create({
      username: newUser.username,
      email: newUser.email,
      password: hashedPassword
    })
    .then((user) => {
      callback(null, user);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getUser(id, callback) { // error
    let result = {};
    User.findById(id)
        .then((user) => {
            if (!user) {
                callback(404);
            } else {
                result["user"] = user;
                Collaborator.scope({
                        method: ["userCollaborationsFor", id]
                    }).all()
                    .then((collaborations) => {
                        result["collaborations"] = collaborations;
                        callback(null, result);
                    })
                    .catch((err) => {
                        callback(err);
                    })
            }
        })
},

   upgradeUserRole(req, callback){
    return User.findById(req.user.id)

    .then((user) => {
      if(!user){
        return callback("User not found");
      }

      user.update({role: "premium"}, {where: {id: user.id}})

      .then((user) => {
        callback(null, user);
      })
      .catch((err) => {
        callback(err);
      })
    })
  },

     downgradeUserRole(req, callback){
      return User.findById(req.user.id)
  
      .then((user) => {
        if(!user){
          return callback("User not found");
        }
  
        user.update({role: "standard"}, {where: {id: user.id}})
  
        .then((user) => {
          callback(null, user);
        })
        .catch((err) => {
          callback(err);
        })
      })
    }
}
