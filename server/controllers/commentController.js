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

module.exports = {
  createComment,
};
