import { z } from "zod";

export const registerSectorSchema = z.object({
  description: z.string().min(1),
  value: z
    .string()
    .min(1)
    .transform((value) =>
      Number(value.slice(2).replace(/[\.]/g, "").replace(",", "."))
    ),
  group: z
    .string()
    .min(1)
    .transform((group) => Number(group)),
});

export const readSectorSchema = registerSectorSchema.extend({
  id: z.number(),
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

export const registerFeiranteSchema = z.object({
  name: z.string().min(1),
  CPF: z.string().min(14),
  RG: z.string().min(7),
  address: z.string().min(1),
  qtd_bancas: z
    .string()
    .min(1)
    .transform((bancas) => Number(bancas)),
  sector: z
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
});

export const readFeiranteSchema = registerFeiranteSchema.extend({
  id: z.number(),
});

export const feiraDaysSchema = z.object({
  sunday: z.number(),
  monday: z.number(),
  tuesday: z.number(),
  wednesday: z.number(),
  thrusday: z.number(),
  fryday: z.number(),
  saturday: z.number(),
});

export const registerFeirasSchema = z.object({
  feiraDays: feiraDaysSchema,
  date: z.string().min(1),
  exercise: z.string(),
});

export const readFeirasSchema = registerFeirasSchema.extend({
  id: z.number(),
});
