import express from "express";
import asyncHandler from "express-async-handler";

import { reviewUserPreview } from "../controllers/userGet.controller.js";

export const userGetRouter = express.Router({ mergeParams: true });

userGetRouter.get("/myreviews", asyncHandler(reviewUserPreview));
