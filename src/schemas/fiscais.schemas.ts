import { z } from "zod";

export const registerFiscalSchema = z.object({
  nome: z.string().min(1),
  email: z.string().min(1).email(),
  codigo: z
    .string()
    .nullable()
    .transform((value) => (value ? Number(value) : null)),
  endereco: z.string().nullable(),
  fone: z.string().nullable(),
});

export const readFiscalsSchema = registerFiscalSchema.extend({
  id: z.number(),
});
