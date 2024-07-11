import Router from "express";
import { productsRouter } from "../modules/products/products.route";

const router = Router();

const modulesRoute = [
  {
    path: "/product",
    route: productsRouter,
  },
];

modulesRoute.forEach((route) => router.use(route.path, route.route));
export default router;
