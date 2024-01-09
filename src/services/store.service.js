import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addstoreResponseDTO, addreviewResponseDTO } from "../dtos/store.dto.js";
import { addStore, getStore, addReview, getReview } from "../models/store.dao.js";

export const joinStore = async (body) => {
  const joinStoreData = await addStore({
    region_id: body.region_id,
    name: body.name,
    address: body.address,
  });

  if (joinStoreData == -1) {
    throw new BaseError(status.STORE_ALREADY_EXIST);
  } else {
    return addstoreResponseDTO(await getStore(joinStoreData));
  }
};

export const joinReview = async (body) => {
  const joinReviewData = await addReview({
    member_id: body.member_id,
    store_id: body.store_id,
    body: body.body,
    score: body.score,
  });

  if (joinReviewData == -1) {
    throw new BaseError(status.STORE_NOT_EXIST);
  } else {
    return addreviewResponseDTO(await getReview(joinReviewData));
  }
};
