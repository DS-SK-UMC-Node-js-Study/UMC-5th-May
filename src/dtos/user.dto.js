// sign in response DTO
export const signinResponseDTO = (user, prefer) => {
  const preferFood = [];
  for (let i = 0; i < prefer[0].length; i++) {
    preferFood.push(prefer[0][i].name);
  }
  return { email: user[0].email, name: user[0].name, preferCategory: preferFood };
};

// add do mission response DTO
export const adddomissionResponseDTO = (domission) => {
  return { member_id: domission[0].member_id, mission_id: domission[0].mission_id, status: domission[0].status };
};
