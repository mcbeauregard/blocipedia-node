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

   getUser(id, callback){
     return User.findById(id)
     .then((user) => {
      callback(null, user);
      })
         .catch((err) => {
          callback(err);
       })
   },

   getUpgrade(id, callback){
     User.findById(id)
     .then((user) => {

      if(!user) {
         callback(404);
       } else {

        return user.updateAttributes({
          role: "premium"
        });
       }
      })
           .catch((err) => {
             callback(err);
           })
    },

    getDowngrade(id, callback){
      User.findById(id)
      .then((user) => {
 
       if(!user) {
          callback(404);
        } else {
 
         return user.updateAttributes({
           role: "standard"
         });
        }
       })
            .catch((err) => {
              callback(err);
            })
     },
       
}
