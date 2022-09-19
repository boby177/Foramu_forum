const { User } = require("../models");

// Create user controller
const createUser = async (req, res) => {
  const { user_name, user_email, user_password, user_img } = req.body;

  try {
    const user = await User.create({
      user_name,
      user_email,
      user_password,
      user_img,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  createUser,
};
