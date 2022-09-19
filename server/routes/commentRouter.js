// Initialize Router
const router = require("express").Router();
const commentController = require("../controllers/commentController");

// Forum API
router.post("/addComment", commentController.createComment);

module.exports = router;