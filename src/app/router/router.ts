import Router from "express";
import { productsRouter } from "../modules/products/products.route";
import { CartDataRouter } from "../modules/CartData/CartData.route";

const router = Router();

const modulesRoute = [
  {
    path: "/product",
    route: productsRouter,
  },
  {
    path: "/cart",
    route: CartDataRouter,
  },
];

modulesRoute.forEach((route) => router.use(route.path, route.route));
export default router;
