const { Forum } = require("../models");

// Create forum controller
const createForum = async (req, res) => {
  const { name_forum, desc_forum } = req.body;

  try {
    const forum = await Forum.create({
      name_forum,
      desc_forum,
    });

    return res.json(forum);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// List forums controller
const getAllForum = async (req, res) => {
  let forums = await Forum.findAll({});
  res.status(200).send(forums);
};

// Get single forum controller
const getOneForum = async (req, res) => {
  let id_forum = req.params.id;
  let forum = await Forum.findOne({ where: { id_forum: id_forum } });
  res.status(200).send(forum);
};

// Update forum controller
const updateForum = async (req, res) => {
  let id_forum = req.params.id;
  await Forum.update(req.body, { where: { id_forum: id_forum } });
  res.status(200).send("Forum updated successfully");
};

// Delete forum controller
const deleteForum = async (req, res) => {
  let id_forum = req.params.id;
  await Forum.destroy({ where: { id_forum: id_forum } });
  res.status(200).send("Forum deleted successfully");
};

module.exports = {
  createForum,
  getAllForum,
  getOneForum,
  updateForum,
  deleteForum,
};
