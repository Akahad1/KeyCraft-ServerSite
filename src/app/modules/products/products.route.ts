import express from "express";
import { productsController } from "./products.contoller";
import validateRequest from "../../middleware/validationRequest";
import { productsValidation } from "./products.validatinon";

const router = express.Router();

router.post(
  "/create-products",
  validateRequest(productsValidation.productValidationSchema),
  productsController.createProducts
);
router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getSingleAllProducts);

export const productsRouter = router;
