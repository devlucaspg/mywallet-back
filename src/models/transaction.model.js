import joi from "joi";

export const transactionModel = joi.object({
  value: joi.number().min(1).required(),
  description: joi.string().min(3).required(),
  type: joi.string().valid("input", "output").required(),
  user: joi.required()
});