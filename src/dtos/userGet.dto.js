// 내 리뷰 조회
export const previewUserReviewResponseDTO = (data) => {
  const user_reviews = [];

  for (let i = 0; i < data.length; i++) {
    user_reviews.push({
      user_name: data[i].name,
      score: data[i].score,
      review_body: data[i].body,
      create_date: formatDate(data[i].created_at),
    });
  }
  return { user_reviewData: user_reviews, cursorId: data[data.length - 1].review_id };
};

// 내가 진행중인 미션 조회
export const previewUserMissionResponseDTO = (data) => {
  const user_missions = [];

  for (let i = 0; i < data.length; i++) {
    user_missions.push({
      store_name: data[i].name,
      reward: data[i].reward,
      deadline: formatDate(data[i].deadline),
      mission_body: data[i].mission_spec,
    });
  }
  return { user_missionData: user_missions, cursorId: data[data.length - 1].mission_id };
};

const formatDate = (date) => {
  return new Intl.DateTimeFormat("kr").format(new Date(date)).replaceAll(" ", "").slice(0, -1);
};
