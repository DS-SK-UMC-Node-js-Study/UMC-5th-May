import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addstoreResponseDTO } from "../dtos/store.dto.js";
import { addStore, getStore } from "../models/store.dao.js";

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
