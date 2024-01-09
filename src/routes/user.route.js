import express from "express";
import asyncHandler from "express-async-handler";

import { userSignin, userDoMission } from "../controllers/user.controller.js";

export const userRouter = express.Router();

userRouter.post("/signin", asyncHandler(userSignin));
userRouter.post("/doMission", asyncHandler(userDoMission));
