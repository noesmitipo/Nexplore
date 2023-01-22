import { DutyOutput } from "../../db/models/duty-model";
import * as dutyService from "../../db/services/duty-service";
import { CreateDutyDto, UpdateDutyDto } from "../dto/duty.dto";
import { Result } from "../Result";

export const getAll = async (): Promise<Result<DutyOutput[]>> => {
  return await dutyService.getAll();
};

export const getById = async (id: string): Promise<Result<DutyOutput>> => {
  return await dutyService.getById(id);
};

export const create = async (
  payload: CreateDutyDto
): Promise<Result<DutyOutput>> => {
  return await dutyService.create(payload);
};

export const update = async (
  id: string,
  payload: UpdateDutyDto
): Promise<Result<DutyOutput>> => {
  return await dutyService.update(id, payload);
};

export const deleteById = async (id: string): Promise<Result<void>> => {
  return await dutyService.deleteById(id);
};
