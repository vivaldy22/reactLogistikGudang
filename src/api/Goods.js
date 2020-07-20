import axios from "axios";

export const getGoods = async () => {
  const res = await axios.get("/goods");
  return await res.data.result;
};

export const createGoods = async (good) => {
  const res = await axios.post("/good", good);
  const result = await res;
  console.log(result);

  return await result;

  // using fetch function
  // const goods = await fetch("/good", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(good),
  // });
  //
  // return await goods.json();
};
