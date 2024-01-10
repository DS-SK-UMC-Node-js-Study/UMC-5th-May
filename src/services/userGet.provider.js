import { previewUserReviewResponseDTO } from "../dtos/userGet.dto.js";
import { getPreviewUserReview } from "../models/userGet.dao.js";

export const getUserReview = async (member_id, query) => {
  const { review_id, size = 3 } = query;
  return previewUserReviewResponseDTO(await getPreviewUserReview(review_id, size, member_id));
};
