import { TCartData } from "./CartData.interface";
import { CartData } from "./CartData.model";

const createCartDataIntoDB = async (payload: TCartData) => {
  const result = await CartData.create(payload);
  return result;
};

const getCartDataFromDB = async () => {
  const result = await CartData.find();
  return result;
};
const getSingleCartDataFromDB = async (id: any) => {
  const result = await CartData.findOne({ cartid: id }).populate("cartid");

  return result;
};

const deleteCartFromDB = async (id: string) => {
  console.log(id);
  const result = await CartData.deleteOne({ _id: id });
  return result;
};

export const cartDataServies = {
  createCartDataIntoDB,
  getCartDataFromDB,
  getSingleCartDataFromDB,
  deleteCartFromDB,
};
