import express from "express";
import asyncHandler from "express-async-handler";

import { reviewPreview } from "../controllers/storeGet.controller.js";

export const storeGetRouter = express.Router({ mergeParams: true });

storeGetRouter.get("/reviews", asyncHandler(reviewPreview));
