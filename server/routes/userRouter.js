// Initialize Router
const router = require("express").Router();
const userController = require("../controllers/userController");

// Users API
router.post("/addUser", userController.createUser);

module.exports = router;
