import { Types } from "mongoose";

export type TCartData = {
  cartid: Types.ObjectId;
  image: string;
  title: string;
  description: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
};
