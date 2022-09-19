// Initialize Router
const router = require("express").Router();
const imageController = require("../controllers/imageController");

// Forum API
router.post("/imgLink", imageController.imageLink);

module.exports = router;