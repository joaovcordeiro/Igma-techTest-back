import { AppError } from "./../errors/AppError.js";
import { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";
import ResponseModel from "../config/ReponseModel.js";

export function validateSchemaMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      throw new AppError(validation.error.message, 422);
    }

    next();
  };
}
