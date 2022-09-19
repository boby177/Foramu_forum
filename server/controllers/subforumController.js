const { Subforum } = require("../models");

// Create subforum controller
const createSubforum = async (req, res) => {
  const { name_subforum, desc_subforum } = req.body;

  try {
    const subforum = await Subforum.create({
      name_subforum,
      desc_subforum,
    });

    return res.json(subforum);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
    createSubforum,
};
