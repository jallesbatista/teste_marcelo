import { z } from "zod";

export const registerFeiranteSchema = z.object({
  name: z.string().min(1),
  CPF: z.string().min(14),
  RG: z.string().min(7),
  address: z.string().min(1),
  qtd_bancas: z
    .string()
    .min(1)
    .transform((bancas) => Number(bancas)),
  sectorId: z
    .string()
    .min(1)
    .transform((sector) => Number(sector)),
  fone: z.string().min(1),
  days: z.object({
    monday: z.boolean(),
    sunday: z.boolean(),
    tuesday: z.boolean(),
    wednesday: z.boolean(),
    thrusday: z.boolean(),
    friday: z.boolean(),
    saturday: z.boolean(),
  }),
  fiscalId: z
    .string()
    .min(1)
    .transform((bancas) => Number(bancas)),
  file: z.custom<FileList>().optional(),
  natureza: z.string().min(1),
});

export const readFeiranteSchema = registerFeiranteSchema.extend({
  id: z.number(),
});
