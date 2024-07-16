import { TProduct } from "./products.interface";
import { Products } from "./products.model";

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Products.create(payload);
  return result;
};

const getProductFromDB = async (query: Record<string, unknown>) => {
  const qureyObj = { ...query };
  const searchItem = ["title", "brand"];
  let searchTerm = "";
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const searchQurey = Products.find({
    $or: searchItem.map((field) => ({
      [field]: { $regex: searchTerm, $options: "i" },
    })),
  });
  // filter
  const queryField = ["searchTerm", "sort"];
  queryField.forEach((el) => delete qureyObj[el]);
  const FilterQuery = searchQurey.find(qureyObj);
  // sort
  let sort = 1;
  if (query?.sort) {
    sort = query.sort as number;
  }
  let sortOrder = 1; // Default to ascending order (low to high)

  if (query?.sort === "Sort by price: hight to low") {
    sortOrder = -1; // Set to descending order (high to low)
  } else if (query?.sort === "Sort by price: low to hight") {
    sortOrder = 1;
  }

  const sortQurey = await FilterQuery.sort({ price: sortOrder } as any);

  // Search by name or brand

  return sortQurey;
};
const getSingleProductFromDB = async (id: any) => {
  const result = await Products.findById(id);
  return result;
};
const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  console.log(id);
  const result = await Products.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteProductFromDB = async (id: string) => {
  console.log(id);
  const result = await Products.deleteOne({ _id: id });
  return result;
};
export const productsServies = {
  createProductIntoDB,
  getProductFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
