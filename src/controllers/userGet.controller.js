import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { getUserReview, getUserMission } from "../services/userGet.provider.js";

export const reviewUserPreview = async (req, res, next) => {
  console.log("내 리뷰 조회를 요청하였습니다!");
  //   console.log(req.params.member_id);

  return res.send(response(status.SUCCESS, await getUserReview(req.params.member_id, req.query)));
};

export const missionUserPreview = async (req, res, next) => {
  console.log("내가 진행중인 미션 조회를 요청하였습니다!");
  // console.log(req.params.member_id);

  return res.send(response(status.SUCCESS, await getUserMission(req.params.member_id, req.query)));
};
