const { Discussion } = require("../models");

// Create forum controller
const createDiscussion = async (req, res) => {
  const { title_post, desc_post } = req.body;

  try {
    const discussion = await Discussion.create({
      title_post,
      desc_post,
    });

    return res.json(discussion);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// List discussions controller
const getAllDiscussion = async (req, res) => {
  let discussions = await Discussion.findAll({});
  res.status(200).send(discussions);
};

// Get single discussion controller
const getOneDiscussion = async (req, res) => {
  let id_post = req.params.id;
  let discussion = await Discussion.findOne({ where: { id_post: id_post } });
  res.status(200).send(discussion);
};

// Update forum controller
const updateDiscussion = async (req, res) => {
  let id_post = req.params.id;
  await Discussion.update(req.body, { where: { id_post: id_post } });
  res.status(200).send("Discussion updated successfully");
};

// Delete forum controller
const deleteDiscussion = async (req, res) => {
  let id_post = req.params.id;
  await Discussion.destroy({ where: { id_post: id_post } });
  res.status(200).send("Discussion deleted successfully");
};

module.exports = {
    createDiscussion,
    getAllDiscussion,
    getOneDiscussion,
    updateDiscussion,
    deleteDiscussion
};
