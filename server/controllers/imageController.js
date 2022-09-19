const { Img_Discussion } = require("../models");

// Create image forum controller
const imageLink = async (req, res) => {
  const { img_link } = req.body;

  try {
    const img_discussion = await Img_Discussion.create({
      img_link,
    });

    return res.json(img_discussion);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  imageLink,
};
