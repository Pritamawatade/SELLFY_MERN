const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    const existedUser = await User.findOne({
      email: email,
    });

    if (existedUser) {
      return res.status(200).json({ message: "user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JSON_WEB_TOKEN_SECRET_KEY
    );  

    res.status(200).json({ user: result, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "something went wrong" });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existedUser = await User.findOne({ email: email });

    if (!existedUser) {
      return res.status(200).json({ message: "user not found" });
    }

    
    const mattchedPassword = await bcrypt.compare(
      password,
      existedUser.password  
    );

    if (!mattchedPassword) {
      return res.status(200).json({ message: "Invalid Creadintials" });
    }

    const token = jwt.sign(
      { email: existedUser.email, id: existedUser._id },
      process.env.JSON_WEB_TOKEN_SECRET_KEY
    );

    return res.status(200).json({
      user: existedUser,
      token,
      message: "User authenticated",
    });
  } catch (error) {
    return res.status(500).json({ message: "something went wrong" });
  }
});

router.get("/", async (req, res) => {
  const userList = await User.find();

  if (!userList) {
    return res.status(200).json({ message: "No user found" });
  }

  return res.status(200).json({
    userList,
    message: "All user fetched",
  });
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ message: "No user found" });
  }

  return res.status(200).json({
    user,
    message: "user fetched successfully",
    
  });
});

router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (user) {
        return res.status(200).json({
          success: true,
          message: "user is deleted",
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "user not found",
        });
      }
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ message: "something went wrong while deleting the user" });
    });
});

router.get("/get/count", async (req, res) => {
  const userCount = await User.countDocuments();

  if(userCount){
    return res.status(200).json({userCount});

  }
  else{
    return res.status(404).json({message: "No user found"});
  }
});

router.put("/:id", async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!req.body) {
    return res.status(400).json({ message: "Data to update can not be empty" });
  }

  const existedUser = await User.findById(req.params.id);
  let newPassword;
  if (req.body.password) {
    newPassword = bcrypt.hashSync(req.body.password, 10);
  } else {
    newPassword = existedUser.passwordHash;
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name,
      email,
      phone,
      password: newPassword,
    },
    {
      new: true,
    }
  );

    if (!user) {
        return res.status(404).json({ message: "No user found" });
    }

    return res.status(200).json({user, message: "User updated successfully"});
});

module.exports = router;
