const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../config/jwtGenerator");

// Create user controller
const createUser = async (req, res) => {
  const { user_name, user_email, user_password } = req.body;

  try {
    // let findUser = await User.findOne({ where: { user_email} });
    // console.log(findUser);

    // if (findUser.rows[0].length > 0) {
    //   return res.status(401).json("User already exist!");
    // }

    let user = await User.create({
      user_name,
      user_email,
      user_password,
      // user_img,
    });

    // const jwtToken = jwtGenerator(user.rows[0].user_id);
    return res.json(user);
    // return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// Login user controller
const loginUser = async (req, res) => {
  const { user_email, user_password } = req.body;

  try {
    const findUser = await User.findOne({ user_email });
    // if (findUser.rows.length === 0) {
    //   return res.status(401).json("Email address not found!");
    // }

    const validPassword = await bcrypt.compare(
      user_password,
      findUser.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Password is not valid!");
    }
    const jwtToken = jwtGenerator(findUser.rows[0].user_id);
    return res.json({ jwtToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// Verify user controller
const verifyUser = (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// List users controller
const getAllUsers = async (req, res) => {
  let users = await User.findAll({});
  res.status(200).send(users);
}

module.exports = {
  createUser,
  loginUser,
  verifyUser,
  getAllUsers
};
