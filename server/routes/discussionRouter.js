// Initialize Router
const router = require("express").Router();
const discussionController = require("../controllers/discussionController");

// Discussion API
router.post("/addDiscussion", discussionController.createDiscussion);

module.exports = router;