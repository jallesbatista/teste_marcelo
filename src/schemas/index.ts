import { number, z } from "zod";

export const registerSectorSchema = z.object({
  description: z.string().min(1),
  value: z.string().min(1),
  group: z
    .string()
    .min(1)
    .transform((group) => Number(group)),
});

export const registerFiscalSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  address: z.string().min(1),
  fone: z.string().min(1),
});

export const readFiscalsSchema = registerFiscalSchema.extend({
  id: z.number(),
});
