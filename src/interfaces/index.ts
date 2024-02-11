import {
  feiraDaysSchema,
  readFeiranteSchema,
  readFeirasSchema,
  readFiscalsSchema,
  readSectorSchema,
  readUserSchema,
  registerFeiranteSchema,
  registerFeirasSchema,
  registerFiscalSchema,
  registerSectorSchema,
  registerUserSchema,
} from "@/schemas";
import { z } from "zod";

export type TInsertSector = z.infer<typeof registerSectorSchema>;
export type TReadSectors = z.infer<typeof readSectorSchema>;
export type TInsertFiscal = z.infer<typeof registerFiscalSchema>;
export type TReadFiscals = z.infer<typeof readFiscalsSchema>;
export type TInsertFeirante = z.infer<typeof registerFeiranteSchema>;
export type TReadFeirantes = z.infer<typeof readFeiranteSchema>;
export type TRegisterFeiras = z.infer<typeof registerFeirasSchema>;
export type TReadFeiras = z.infer<typeof readFeirasSchema>;
export type TFeiraDays = z.infer<typeof feiraDaysSchema>;
export type TReadUser = z.infer<typeof readUserSchema>;
export type TUser = z.infer<typeof registerUserSchema>;
