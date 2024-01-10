import express from "express";
import asyncHandler from "express-async-handler";

import { reviewUserPreview, missionUserPreview } from "../controllers/userGet.controller.js";

export const userGetRouter = express.Router({ mergeParams: true });

userGetRouter.get("/myreviews", asyncHandler(reviewUserPreview));
userGetRouter.get("/mymissions", asyncHandler(missionUserPreview));
