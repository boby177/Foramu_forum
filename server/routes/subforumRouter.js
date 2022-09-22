// Initialize Router
const router = require("express").Router();
const subforumController = require("../controllers/subforumController");

// Subforum API
router.post("/addSubforum", subforumController.createSubforum);

// Get all subforum API
router.get("/allSubforum", subforumController.getAllSubforum);

// Get one subforum API
router.get("/:id", subforumController.getOneSubforum);

// Update subforum API
router.put("/:id", subforumController.updateSubforum);

// Delete subforum API
router.delete("/:id", subforumController.deleteSubforum);

module.exports = router;