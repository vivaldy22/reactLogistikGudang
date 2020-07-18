import axios from "axios";

export const getGoods = async () => {
  const res = await axios.get("/goods");
  return await res.data.result;
};

export const createGoods = async (good) => {
  const res = await axios.post("/good", { good });
  const result = await res.data;
  console.log(result);
};
