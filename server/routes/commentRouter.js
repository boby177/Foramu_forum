// Initialize Router
const router = require("express").Router();
const commentController = require("../controllers/commentController");

// Create Comment API
router.post("/addComment", commentController.createComment);

// Get all discussion API
router.get("/allComment", commentController.getAllComments);

// Get one discussion API
router.get("/:id", commentController.getOnecomment);

// Update discussion API
router.put("/:id", commentController.updateComment);

// Delete discussion API
router.delete("/:id", commentController.deleteComment);

module.exports = router;