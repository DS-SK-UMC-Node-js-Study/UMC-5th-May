import { previewReviewResponseDTO, previewMissionResponseDTO } from "../dtos/storeGet.dto.js";
import { getPreviewReview, getPreviewMission } from "../models/storeGet.dao.js";

export const getStoreReview = async (store_id, query) => {
  const { review_id, size = 3 } = query;
  return previewReviewResponseDTO(await getPreviewReview(review_id, size, store_id));
};

export const getStoreMission = async (store_id, query) => {
  const { mission_id, size = 3 } = query;
  return previewMissionResponseDTO(await getPreviewMission(mission_id, size, store_id));
};
