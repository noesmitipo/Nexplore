import { DutyOutput } from "../../../db/models/duty-model";
import { Duty } from "../../interfaces/duty.interface";

export const toDuty = (duty: DutyOutput): Duty => {
  return {
    id: duty.id,
    name: duty.name,
    createdAt: duty.createdAt,
    updatedAt: duty.updatedAt,
  };
};
