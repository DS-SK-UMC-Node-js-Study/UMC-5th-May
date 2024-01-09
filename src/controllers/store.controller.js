import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinStore, joinReview } from "../services/store.service.js";

export const storeAddStore = async (req, res, next) => {
  console.log("가게 추가를 요청하였습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(response(status.SUCCESS, await joinStore(req.body)));
};

export const storeAddReview = async (req, res, next) => {
  console.log("리뷰 추가를 요청하였습니다!");
  console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

  res.send(response(status.SUCCESS, await joinReview(req.body)));
};
