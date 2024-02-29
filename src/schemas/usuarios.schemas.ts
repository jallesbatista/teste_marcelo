import { z } from "zod";

export const registerUserSchema = z.object({
  email: z.string().email(),
  senha: z.string(),
});

export const readUserSchema = registerUserSchema.extend({
  id: z.number(),
});
