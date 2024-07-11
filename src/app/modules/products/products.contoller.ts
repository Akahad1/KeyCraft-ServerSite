import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { productsServies } from "./products.services";

const createProducts = catchAsync(async (req, res) => {
  console.log("body", req.body);
  const result = await productsServies.createProductIntoDB(req.body);

  sendResponse(res, {
    satatusCode: httpStatus.OK,
    success: true,
    mesages: "products is created succesfully",
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await productsServies.getProductFromDB(req.query);

  sendResponse(res, {
    satatusCode: httpStatus.OK,
    success: true,
    mesages: " Get  Products  succesfully",
    data: result,
  });
});
const getSingleAllProducts = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = await productsServies.getSingleProductFromDB(id);

  sendResponse(res, {
    satatusCode: httpStatus.OK,
    success: true,
    mesages: " Get  Products  succesfully",
    data: result,
  });
});

export const productsController = {
  createProducts,
  getAllProducts,
  getSingleAllProducts,
};
