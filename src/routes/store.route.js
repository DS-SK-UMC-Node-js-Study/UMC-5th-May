import express from "express";
import asyncHandler from "express-async-handler";

import { storeAddStore, storeAddReview, storeAddMission } from "../controllers/store.controller.js";

export const storeRouter = express.Router();

storeRouter.post("/addStore", asyncHandler(storeAddStore));
storeRouter.post("/addReview", asyncHandler(storeAddReview));
storeRouter.post("/addMission", asyncHandler(storeAddMission));
