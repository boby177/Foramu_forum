// Initialize Middlewares
const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
const { sequelize } = require("./models");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "image")));

// Create table from models
// async function main() {
//   await sequelize.sync({ alter: true });
// }

// main();

// // Initializes Routes
const userRouter = require("./routes/userRouter");
const forumRouter = require("./routes/forumRouter");
const subforumRouter = require("./routes/subforumRouter");
const discussionRouter = require("./routes/discussionRouter");
const commentRouter = require("./routes/commentRouter");
const imageRouter = require("./routes/imageRouter");

// // API routes
app.use("/api/user", userRouter);
app.use("/api/forum", forumRouter);
app.use("/api/subforum", subforumRouter);
app.use("/api/discussion", discussionRouter);
app.use("/api/comment", commentRouter);
app.use("/api/image", imageRouter);

// Testing API
app.get("/", (res) => {
  res.send("Hello World!");
});

// port
const PORT = process.env.PORT || 3001;

// server
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await sequelize.sync({ force: true });
  console.log("Database Synced Successfully!");
});
