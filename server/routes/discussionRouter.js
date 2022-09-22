// Initialize Router
const router = require("express").Router();
const discussionController = require("../controllers/discussionController");

// Discussion API
router.post("/addDiscussion", discussionController.createDiscussion);

// Get all discussion API
router.get("/allDiscussion", discussionController.getAllDiscussion);

// Get one discussion API
router.get("/:id", discussionController.getOneDiscussion);

// Update discussion API
router.put("/:id", discussionController.updateDiscussion);

// Delete discussion API
router.delete("/:id", discussionController.deleteDiscussion);

module.exports = router;