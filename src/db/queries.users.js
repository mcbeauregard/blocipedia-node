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

    /*updateUserRole(user){
      User.findOne({where: {email: user.email}}) // error

      .then((user) => {
       if(user.role =="standard") {
          user.update({role: "premium"})
        } else if (user.role =="premium") {
            user.update({role: "standard"})
        }
       })
     } */

     updateUserRole(req, callback){
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
