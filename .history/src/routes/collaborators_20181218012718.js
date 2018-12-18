const express = require("express");
const router = express.Router();

const collaboratorController = require("../controllers/collaboratorController")

router.get("/wikis/:wikiId/collaborations/show", collaboratorController.show);
router.post("/wikis/:wikiId/collaborations/create", collaboratorController.create);
router.post("/wikis/:wikiId/collaborations/delete", collaboratorController.delete);
module.exports = router;