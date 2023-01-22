import axios from "axios";
import { Duty } from "../intefaces/duty";

const SERVER_URL = "http://localhost:3003";

const useApi = () => {
  const getDuties = async () => {
    const response = await axios.get(SERVER_URL + "/duty");
    if (response.status === 200) {
      return response.data;
    }
    return [];
  };

  const addDuty = async (duty: Duty) => {
    const response = await axios.post(SERVER_URL + "/duty", duty);
    return response.status === 201;
  };

  const deleteDutyById = async (id: string) => {
    const response = await axios.delete(`${SERVER_URL}/duty/${id}`);
    return response.status === 200;
  };

  const updateDuty = async (duty: Duty) => {
    const response = await axios.put(`${SERVER_URL}/duty/${duty.id}`, {
      name: duty.name,
    });
    return response.status === 200;
  };

  return {
    getDuties,
    addDuty,
    deleteDutyById,
    updateDuty,
  };
};

export default useApi;
