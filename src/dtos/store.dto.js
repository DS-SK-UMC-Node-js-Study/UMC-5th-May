// add store response DTO
export const addstoreResponseDTO = (store) => {
  return { region_id: store[0].region_id, name: store[0].name, address: store[0].address };
};

// add review response DTO
export const addreviewResponseDTO = (review) => {
  return { body: review[0].body, score: review[0].score };
};
