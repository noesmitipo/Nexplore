import { CreateDutyDto, UpdateDutyDto } from "../../dto/duty.dto";
import * as dutyService from "../../../db/services/duty-service";
import { Duty } from "../../interfaces/duty.interface";
import * as dutyMapper from "./duty-mapper";

export const getAll = async (): Promise<Duty[]> => {
  return (await dutyService.getAll()).map(dutyMapper.toDuty);
};

export const getById = async (id: string): Promise<Duty> => {
  return dutyMapper.toDuty(await dutyService.getById(id));
};

export const create = async (payload: CreateDutyDto): Promise<Duty> => {
  return dutyMapper.toDuty(await dutyService.create(payload));
};

export const update = async (
  id: string,
  payload: UpdateDutyDto
): Promise<Duty> => {
  return dutyMapper.toDuty(await dutyService.update(id, payload));
};

export const deleteById = async (id: string): Promise<Boolean> => {
  const isDeleted = await dutyService.deleteById(id);

  return isDeleted;
};
