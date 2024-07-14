import { model, Schema } from "mongoose";
import { TCartData } from "./CartData.interface";

const CartDataSchema = new Schema<TCartData>(
  {
    cartid: {
      type: Schema.Types.ObjectId,
      ref: "products",
      unique: true,
    },

    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const CartData = model<TCartData>("CartData", CartDataSchema);
