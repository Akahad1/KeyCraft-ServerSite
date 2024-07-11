import express, { Application, Request, Response, Router } from "express";
import { productsRouter } from "./app/modules/products/products.route";
import router from "./app/router/router";
import cors from "cors";

const app: Application = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/l2/a4", router);
export default app;
