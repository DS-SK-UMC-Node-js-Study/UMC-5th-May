import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { signinResponseDTO, adddomissionResponseDTO } from "../dtos/user.dto.js";
import { addUser, getUser, getUserPreferToUserID, setPrefer, addDoMission, getDoMission } from "../models/user.dao.js";

export const joinUser = async (body) => {
  // const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
  const prefer = body.prefer;

  const joinUserData = await addUser({
    // email: body.email,
    // name: body.name,
    // gender: body.gender,
    // birth: birth,
    // addr: body.addr,
    // specAddr: body.specAddr,
    // phone: body.phone,
    name: body.name,
    nickname: body.nickname,
    gender: body.gender,
    age: body.age,
    address: body.address,
    spec_address: body.spec_address,
    email: body.email,
    phone_number: body.phone_number,
  });

  if (joinUserData == -1) {
    throw new BaseError(status.EMAIL_ALREADY_EXIST);
  } else {
    for (let i = 0; i < prefer.length; i++) {
      await setPrefer(joinUserData, prefer[i]);
    }
    return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
  }
};

export const joinDoMission = async (body) => {
  const joinDoMissionData = await addDoMission({
    member_id: body.member_id,
    mission_id: body.mission_id,
    status: body.status,
  });

  if (joinDoMissionData == -1) {
    throw new BaseError(status.MISSION_ALREADY_DOING_EXIST);
  } else {
    return adddomissionResponseDTO(await getDoMission(joinDoMissionData));
  }
};
