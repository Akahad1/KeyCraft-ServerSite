import { z } from "zod";

const productValidationSchema = z.object({
  body: z.object({
    image: z.string(),
    title: z.string(),
    description: z.string(),
    brand: z.string(),
    quantity: z.number().int().positive(),
    price: z.number().positive(),
    rating: z.number().min(0).max(5),
  }),
});
const updateProductValidationSchema = productValidationSchema.partial();
export const productsValidation = {
  productValidationSchema,
  updateProductValidationSchema,
};
