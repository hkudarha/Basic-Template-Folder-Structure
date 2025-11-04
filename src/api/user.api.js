import { Axios } from "../constants/maincontant";

export const userLogin = async (data) => {
  try {
    const response = await Axios.post("/auth/login", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
