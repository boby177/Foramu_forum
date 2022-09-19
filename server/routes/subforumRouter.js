// Initialize Router
const router = require("express").Router();
const subforumController = require("../controllers/subforumController");

// Subforum API
router.post("/addSubforum", subforumController.createSubforum);

module.exports = router;