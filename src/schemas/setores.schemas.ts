import { z } from "zod";

export const registerSectorSchema = z.object({
  setor: z.string().min(1),
  valor: z
    .string()
    .min(1)
    .transform((value) => Number(value.slice(2).replace(/[\.]/g, "").replace(",", "."))),
  grupo: z.string().min(1),
  padrao: z
    .string()
    .nullish()
    .transform((value) => (value ? Number(value) : value)),
});

export const readSectorSchema = registerSectorSchema.extend({
  codigo: z.number(),
});
