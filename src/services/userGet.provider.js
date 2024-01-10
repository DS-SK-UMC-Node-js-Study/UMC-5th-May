import { previewUserReviewResponseDTO, previewUserMissionResponseDTO } from "../dtos/userGet.dto.js";
import { getPreviewUserReview, getPreviewUserMission } from "../models/userGet.dao.js";

export const getUserReview = async (member_id, query) => {
  const { review_id, size = 3 } = query;
  return previewUserReviewResponseDTO(await getPreviewUserReview(review_id, size, member_id));
};

export const getUserMission = async (member_id, query) => {
  const { mission_id, size = 3 } = query;
  return previewUserMissionResponseDTO(await getPreviewUserMission(mission_id, size, member_id));
};
