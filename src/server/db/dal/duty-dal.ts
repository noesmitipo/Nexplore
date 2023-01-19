import DutyModel, { DutyInput, DutyOutput } from "../models/duty-model";

export const getAll = async (): Promise<DutyOutput[]> => {
  return DutyModel.findAll();
};

export const getById = async (id: string): Promise<DutyOutput> => {
  const duty = await DutyModel.findByPk(id);

  if (!duty) {
    throw new Error("Not found");
  }

  return duty;
};

export const create = async (payload: DutyInput): Promise<DutyOutput> => {
  const duty = await DutyModel.create(payload);
  return duty;
};

export const update = async (
  id: string,
  payload: Partial<DutyInput>
): Promise<DutyOutput> => {
  const duty = await DutyModel.findByPk(id);

  if (!duty) {
    throw new Error("Not found");
  }

  const updatedDuty = await duty.update(payload);
  return updatedDuty;
};

export const deleteById = async (id: string): Promise<boolean> => {
  const deletedDutyCount = await DutyModel.destroy({ where: { id } });
  return deletedDutyCount > 0;
};
