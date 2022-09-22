// Initialize Router
const router = require("express").Router();
const imageController = require("../controllers/imageController");

// Upload image API
router.post("/imgUpload", imageController.uploadImage);

// Upload image user API
router.put("/:user", imageController.uploadImageUser);

// Upload image user API
router.put("/:id", imageController.uploadImageDiscussion);

module.exports = router;