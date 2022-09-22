const { Comment } = require("../models");

// Create comment controller
const createComment = async (req, res) => {
  const { user_comment } = req.body;

  try {
    const comment = await Comment.create({
        user_comment,
    });

    return res.json(comment);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// List Comments controller
const getAllComments = async (req, res) => {
  let comments = await Comment.findAll({});
  res.status(200).send(comments);
};

// Get single comment controller
const getOnecomment = async (req, res) => {
  let id_comment = req.params.id;
  let comment = await Comment.findOne({ where: { id_comment: id_comment } });
  res.status(200).send(comment);
};

// Update comment controller
const updateComment = async (req, res) => {
  let id_comment = req.params.id;
  await Comment.update(req.body, { where: { id_comment: id_comment } });
  res.status(200).send("Comment updated successfully");
};

// Delete forum controller
const deleteComment = async (req, res) => {
  let id_comment = req.params.id;
  await Comment.destroy({ where: { id_comment: id_comment } });
  res.status(200).send("Comment deleted successfully");
};

module.exports = {
  createComment,
  getAllComments,
  getOnecomment,
  updateComment,
  deleteComment
};
