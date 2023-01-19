import DutyModel from "./models/duty-model";

const dbInit = () => {
  DutyModel.sync();
};

export default dbInit;
