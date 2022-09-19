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

module.exports = {
    createDiscussion,
};
