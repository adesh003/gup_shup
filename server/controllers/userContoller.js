import { response } from "express";
import User from "../models/userModel.js";
import { asyncHandler } from "../utilities/asyncHandler.utilty.js";
import { errorHandler } from "../utilities/errorHandler.utility.js";
import bcrypt from "bcryptjs";



export const register = asyncHandler(async (req, res, next) => {
  const { fullName, username, password, gender } = req.body;
  if (!fullName || !username || !password || !gender) {
    return next(new errorHandler("All feild are required", 400));
  }
  const user = await User.findOne({ username });
  if (user) {
    return next(new errorHandler(`${user} already exist.`, 400));
  }

  const hashedPassword = await bcrypt.hash(password,10);
  const avatar =
  gender === "male"
    ? `https://api.dicebear.com/9.x/adventurer/svg?seed=${username}`
    : `https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${username}`;


    const newUser = await User.create({
        username,
        fullName,   
        password: hashedPassword,
        gender,
        avatar
      });
      

  res.status(200).json({
    success:true,
    responseData:{
        newUser,
    }
  })
//   res.send("hello regsited");
});

export const login = (req, res, next) => {
  res.send("hello from  login routes");
};
