const User = require("./models").User;
const bcrypt = require("bcryptjs");
//const sgMail = require('@sendgrid/mail');

//sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
        //const msg = {
        //to: newUser.email,
        //from: 'testUser@example.com',
        //subject: 'User Confirmation',
        //text: 'Welcome to Blocipedia!',
       // html: '<strong>Please login to your account to confirm membership!</strong>',
     // };
     // sgMail.send(msg);
      callback(null, user);
    })
    .catch((err) => {
      callback(err);
    })
  },
  getUser(id, callback){
    let result = {};  // result will hold user
     User.findById(id)
     .then((user) => {
      if(!user) {
         callback(404);
       } else {
         result["user"] = user; // stores user
       }
     });
   }
}