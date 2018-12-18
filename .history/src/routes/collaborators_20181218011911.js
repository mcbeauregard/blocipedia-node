const express = require("express");
const router = express.Router();

const collaboratorController = require("../controllers/collaboratorController")

router.get("/wikis/:wikiId/collaborations/show", collaboratorController.show);

module.exports = router;