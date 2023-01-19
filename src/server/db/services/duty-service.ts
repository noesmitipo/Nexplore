import * as dutyDal from "../dal/duty-dal";
import { DutyInput, DutyOutput } from "../models/duty-model";

export const getAll = async (): Promise<DutyOutput[]> => {
  return dutyDal.getAll();
};

export const getById = async (id: string): Promise<DutyOutput> => {
  return dutyDal.getById(id);
};

export const create = async (payload: DutyInput): Promise<DutyOutput> => {
  return dutyDal.create(payload);
};

export const update = async (id: string, payload: Partial<DutyInput>) => {
  return dutyDal.update(id, payload);
};

export const deleteById = async (id: string): Promise<boolean> => {
  return dutyDal.deleteById(id);
};
