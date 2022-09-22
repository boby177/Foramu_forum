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

// List subforum controller
const getAllSubforum = async (req, res) => {
  let subForums = await Subforum.findAll({});
  res.status(200).send(subForums);
};

// Get single subforum controller
const getOneSubforum = async (req, res) => {
  let id_subforum = req.params.id;
  let subForum = await Subforum.findOne({ where: { id_subforum: id_subforum } });
  res.status(200).send(subForum);
};

// Update subforum controller
const updateSubforum = async (req, res) => {
  let id_subforum = req.params.id;
  await Subforum.update(req.body, { where: { id_subforum: id_subforum } });
  res.status(200).send("Subforum updated successfully");
};

// Delete subforum controller
const deleteSubforum = async (req, res) => {
  let id_subforum = req.params.id;
  await Subforum.destroy({ where: { id_subforum: id_subforum } });
  res.status(200).send("Subforum deleted successfully");
};

module.exports = {
    createSubforum,
    getAllSubforum,
    getOneSubforum,
    updateSubforum,
    deleteSubforum
};
