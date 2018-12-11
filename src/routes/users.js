const express = require("express");
const router = express.Router();
const validation = require("./validation");
const userController = require("../controllers/userController")
const passport = require("passport");
const flash = require("express-flash");

router.get("/users/signup", userController.signUp);
router.get("/users/signin", userController.signInForm);
router.post("/users/signin", validation.validateUsers, userController.signIn);
router.post("/users/signup", validation.validateUsers, userController.create);
//router.post("/users/signup", userController.create);
router.get("/users/signout", userController.signOut);

router.get("/users/:id", userController.show);
router.post("/users/:id/downgrade", userController.downgrade);
router.get("/users/:id/downgrade", userController.downgradeForm);

module.exports = router;
//