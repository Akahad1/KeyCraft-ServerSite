import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { cartDataServies } from "./CartData.services";

const createCartData = catchAsync(async (req, res) => {
  console.log("body", req.body);
  const result = await cartDataServies.createCartDataIntoDB(req.body);

  sendResponse(res, {
    satatusCode: httpStatus.OK,
    success: true,
    mesages: "CartData is created succesfully",
    data: result,
  });
});

const getAllCartData = catchAsync(async (req, res) => {
  const result = await cartDataServies.getCartDataFromDB();

  sendResponse(res, {
    satatusCode: httpStatus.OK,
    success: true,
    mesages: " Get  CartData  succesfully",
    data: result,
  });
});
const getSingleAllCartData = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = await cartDataServies.getSingleCartDataFromDB(id);

  sendResponse(res, {
    satatusCode: httpStatus.OK,
    success: true,
    mesages: " Get  Products  succesfully",
    data: result,
  });
});
const deleteCartData = catchAsync(async (req, res) => {
  const { id } = req.params;
  // const { product } = ;
  const result = await cartDataServies.deleteCartFromDB(id);

  sendResponse(res, {
    satatusCode: httpStatus.OK,
    success: true,
    mesages: "Delete  succesfully",
    data: result,
  });
});
export const CartDataController = {
  createCartData,
  getAllCartData,
  getSingleAllCartData,
  deleteCartData,
};
