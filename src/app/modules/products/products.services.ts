import QureyBuilder from "../../builder/qureyBuilder";
import { ProductsSearchableFields } from "./products.coninst";
import { TProduct } from "./products.interface";
import { Products } from "./products.model";

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Products.create(payload);
  return result;
};

const getProductFromDB = async (query: Record<string, unknown>) => {
  const couresQurey = new QureyBuilder(Products.find(), query)
    .search(ProductsSearchableFields)
    .filter()
    .sort();
  const result = await couresQurey.modelQurey;
  return result;
};
const getSingleProductFromDB = async (id: any) => {
  const result = await Products.findById(id);
  return result;
};

export const productsServies = {
  createProductIntoDB,
  getProductFromDB,
  getSingleProductFromDB,
};