const User = require("../models/User");

const createService = (body) => User.create(body);
const findAllService = () => User.find();
const GetByIdService = (id) => User.findById(id);
const updateService = (
  id,
  name,
  userName,
  email,
  password,
  avatar,
  background
) =>
  User.findByIdAndUpdate(
    { _id: id },
    { name, userName, email, password, avatar, background }
  );
  
const deleteService = (id) => User.findByIdAndDelete(id);

module.exports = {
  createService,
  findAllService,
  GetByIdService,
  updateService,
  deleteService,
};
