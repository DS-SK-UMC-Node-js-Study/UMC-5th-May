// 리뷰 조회
export const previewReviewResponseDTO = (data) => {
  const reviews = [];

  for (let i = 0; i < data.length; i++) {
    reviews.push({
      user_name: data[i].name,
      score: data[i].score,
      review_body: data[i].body,
      create_date: formatDate(data[i].created_at),
    });
  }
  return { reviewData: reviews, cursorId: data[data.length - 1].review_id };
};

const formatDate = (date) => {
  return new Intl.DateTimeFormat("kr").format(new Date(date)).replaceAll(" ", "").slice(0, -1);
};
