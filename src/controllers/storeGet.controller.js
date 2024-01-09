import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { getStoreReview } from "../services/storeGet.provider.js";

export const reviewPreview = async (req, res, next) => {
  console.log("가게 리뷰 조회를 요청하였습니다!");

  return res.send(response(status.SUCCESS, await getStoreReview(req.params.store_id, req.query)));
};
