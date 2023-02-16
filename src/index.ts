import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import router from "./routes/index.js";
import errorHandlingMiddleware from "./middlewares/errorMiddleware.js";

dotenv.config();

const app = express();
app.use(json());
app.use(router);
app.use(errorHandlingMiddleware);

export default app;
