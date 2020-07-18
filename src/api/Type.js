import axios from "axios";

export const getTypes = async () => {
  const res = await axios.get("/types");
  return await res.data.result;
};
