import { Request, Response, NextFunction } from "express";
import ResponseModel from "../config/ReponseModel.js";
import { AppError } from "../errors/AppError.js";

export default function errorHandlingMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);

  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json(new ResponseModel(error.message, error.statusCode, error.data));
  }

  res.status(500).json(new ResponseModel("Internal server error", 500));
}
