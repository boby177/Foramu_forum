// Initialize Router
const router = require("express").Router();
const forumController = require("../controllers/forumController");

// Create forum API
router.post("/addForum", forumController.createForum);

// Get all forum API
router.get("/allForum", forumController.getAllForum);

// Get one forum API
router.get("/:id", forumController.getOneForum);

// Update forum API
router.put("/:id", forumController.updateForum);

// Delete forum API
router.delete("/:id", forumController.deleteForum);

module.exports = router;