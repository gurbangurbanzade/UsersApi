const User = require("../models/userModel");

const postUser = async (req, res) => {
  let findUser = await User.findOne({ id: req.body.id });
  if (findUser) {
    res.send("bu idli element var");
  } else {
    // console.log(req.body);
    const newUser = new User(req.body);
    // console.log(newUser);
    newUser.save();
  }
};

const getAllUser = async (req, res) => {
  let allUser = await User.find({});
  res.send(allUser);
};

const getUserById = async (req, res) => {
  // console.log(req.params);
  let id = req.params.id;
  let findUser = await User.findOne({ id: id });
  // console.log(findUser);
  res.send(findUser);
};

const getDeleteUser = async (req, res) => {
  // console.log(req.params);
  let id = req.params.id;
  let findUser = await User.findOne({ id: id });
  // console.log("fatma", findUser);
  let _id = findUser._id;
  let deletedUser = await User.findByIdAndDelete(_id);
  // console.log("delete", deletedUser);
};

const getUpdateUser = async (req, res) => {
  // console.log(req.params);
  let id = req.params.id;
  let updateUser = await User.findOneAndUpdate(
    { id: id },
    // { name: req.body.name }
    req.body
  );
};

const getPutUser = async (req, res) => {
  let id = req.params.id;
  let updateUser = await User.replaceOne({ id: id }, req.body);
};

module.exports = {
  postUser,
  getAllUser,
  getUserById,
  getDeleteUser,
  getUpdateUser,
  getPutUser,
};
