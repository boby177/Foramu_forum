// Initialize Router
const router = require("express").Router();
const userController = require("../controllers/userController");
const validInfo = require("../controllers/userConfig/validInfo");
const authorize = require("../controllers/userConfig/authorization");

// Register user API
router.post("/register", validInfo, userController.createUser)

// Login user API
router.post("/login", validInfo, userController.loginUser);

// Verify user registration
router.post('/verify', authorize, userController.verifyUser)

// Get all users API
router.get('/all_users', userController.getAllUsers)

module.exports = router;
