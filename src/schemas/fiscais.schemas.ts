import { z } from "zod";

export const registerFiscalSchema = z.object({
  nome: z.string().min(1),
  email: z.string().min(1).email(),
  codigo: z
    .string()
    .nullish()
    .transform((value) => (value ? Number(value) : null)),
  endereco: z
    .string()
    .nullish()
    .transform((value) => {
      return value ? value : null;
    }),
  fone: z
    .string()
    .nullish()
    .refine(
      (value) => {
        console.log(value);
        if (value) {
          return value.length == 15 ? true : false;
        } else {
          return true;
        }
      },
      {
        message: "Deve conter 11 dígitos",
      }
    )
    .refine(
      (phone) => {
        return phone ? phone.replace(/\D/g, "").split("")[2] == "9" : true;
      },
      { message: "Deve seguir o formato (DDD) 9****-****" }
    )
    .transform((value) => (value ? value : "(  )     -    ")),
});

export const readFiscalsSchema = registerFiscalSchema.extend({
  id: z.number(),
});
