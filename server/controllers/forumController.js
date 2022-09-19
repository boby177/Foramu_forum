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

module.exports = {
  createForum,
};
