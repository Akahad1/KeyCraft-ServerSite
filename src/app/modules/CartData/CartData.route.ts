import express from "express";
import { CartDataController } from "./CartData.contoller";

const router = express.Router();

router.post("/create-cartData", CartDataController.createCartData);
router.get("/", CartDataController.getAllCartData);
router.get("/:id", CartDataController.getSingleAllCartData);
router.delete("/:id", CartDataController.deleteCartData);

export const CartDataRouter = router;
