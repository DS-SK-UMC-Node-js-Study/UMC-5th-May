import { previewReviewResponseDTO } from "../dtos/storeGet.dto.js";
import { getPreviewReview } from "../models/storeGet.dao.js";

export const getStoreReview = async (store_id, query) => {
  const { review_id, size = 3 } = query;
  return previewReviewResponseDTO(await getPreviewReview(review_id, size, store_id));
};
