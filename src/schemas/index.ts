import { z } from "zod";

export const registerSectorSchema = z.object({
  description: z.string().min(1),
  value: z
    .string()
    .min(1)
    .transform((value) => Number(value.slice(2).replace(/[\.]/g, "").replace(",", "."))),
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

export const feiraDaysSchema = z.object({
  sunday: z.string().transform((value) => Number(value)),
  monday: z.string().transform((value) => Number(value)),
  tuesday: z.string().transform((value) => Number(value)),
  wednesday: z.string().transform((value) => Number(value)),
  thrusday: z.string().transform((value) => Number(value)),
  fryday: z.string().transform((value) => Number(value)),
  saturday: z.string().transform((value) => Number(value)),
});

export const registerFeirasSchema = z.object({
  feiraDays: feiraDaysSchema,
  date: z.string().min(1),
  exercise: z.string(),
});

export const readFeirasSchema = registerFeirasSchema.extend({
  id: z.number(),
});

export const registerUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const readUserSchema = registerUserSchema.extend({
  id: z.number(),
});
