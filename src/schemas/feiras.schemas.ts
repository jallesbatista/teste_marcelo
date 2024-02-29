import { z } from "zod";

export const feiraDaysSchema = z.object({
  domingo: z.string().transform((value) => Number(value)),
  segunda: z.string().transform((value) => Number(value)),
  terca: z.string().transform((value) => Number(value)),
  quarta: z.string().transform((value) => Number(value)),
  quinta: z.string().transform((value) => Number(value)),
  sexta: z.string().transform((value) => Number(value)),
  sabado: z.string().transform((value) => Number(value)),
});

export const registerFeirasSchema = feiraDaysSchema.extend({
  date: z.string().min(1),
  Mes: z.string(),
  exercicio: z.string(),
});

export const readFeirasSchema = registerFeirasSchema.extend({
  id: z.number(),
  vencimento: z.string(),
  Mes_n: z.number().nullable(),
});
