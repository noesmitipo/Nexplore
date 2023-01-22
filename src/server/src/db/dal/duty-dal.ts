import { Result } from "../../api/Result";
import DutyModel, { DutyInput, DutyOutput } from "../models/duty-model";

export const getAll = async (): Promise<Result<DutyOutput[]>> => {
  return Result.ok<DutyOutput[]>(await DutyModel.findAll());
};

export const getById = async (id: string): Promise<Result<DutyOutput>> => {
  const duty = await DutyModel.findByPk(id);

  if (!duty) {
    return Result.fail<DutyOutput>("Duty not found");
  }

  return Result.ok<DutyOutput>(duty);
};

export const create = async (
  payload: DutyInput
): Promise<Result<DutyOutput>> => {
  const duty = await DutyModel.create(payload);
  return Result.ok<DutyOutput>(duty);
};

export const update = async (
  id: string,
  payload: Partial<DutyInput>
): Promise<Result<DutyOutput>> => {
  const duty = await DutyModel.findByPk(id);

  if (!duty) {
    return Result.fail<DutyOutput>("Duty not found");
  }

  const updatedDuty = await duty.update(payload);
  return Result.ok<DutyOutput>(updatedDuty);
};

export const deleteById = async (id: string): Promise<Result<void>> => {
  const duty = await DutyModel.findByPk(id);

  if (!duty) {
    return Result.fail<void>("Duty not found");
  }

  await duty.destroy();
  return Result.ok<void>();
};
