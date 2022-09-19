// Initialize Router
const router = require("express").Router();
const forumController = require("../controllers/forumController");

// Forum API
router.post("/addForum", forumController.createForum);

module.exports = router;