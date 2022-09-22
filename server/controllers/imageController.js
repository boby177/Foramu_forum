const { Image } = require("../models");
const { User } = require("../models");
const { Discussion } = require("../models");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./server/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Upload image controller
const uploadImage = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
    res.status(200).send("Image Uploaded");
  },
}).single("image");

// Upload image user controller
const uploadImageUser = async (req, res) => {
  let user_name = req.params.user;
  let finalImageURL = await User.update(extname, { where: { user_name: user_name } });
    // req.protocol + "://" + req.get("host") + "/upload/" + req.file.filename;

  console.log(finalImageURL);
  res.status(200).send("Image has been uploaded successfully.");
};

// Upload image discussion controller
const uploadImageDiscussion = async (req, res) => {
  const id = req.params.id;
  let finalImageURL =
    req.protocol + "://" + req.get("host") + "/upload/" + req.file.filename;
  const image = await pool.query(
    `UPDATE discussion SET img_post = '${finalImageURL}' WHERE id_post = ${id}`
  );
  res.redirect("/discussion");
  res.json(image);
};

module.exports = {
  uploadImage,
  uploadImageUser,
  uploadImageDiscussion,
};
