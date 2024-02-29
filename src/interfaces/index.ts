import { registerFeiranteSchema, readFeiranteSchema } from "@/schemas/feirantes.schemas";
import { registerFeirasSchema, readFeirasSchema, feiraDaysSchema } from "@/schemas/feiras.schemas";
import { registerFiscalSchema, readFiscalsSchema } from "@/schemas/fiscais.schemas";
import { registerSectorSchema, readSectorSchema } from "@/schemas/setores.schemas";
import { readUserSchema, registerUserSchema } from "@/schemas/usuarios.schemas";
import { z } from "zod";

export type TInsertSector = z.infer<typeof registerSectorSchema>;
export type TReadSectors = z.infer<typeof readSectorSchema>;
export type TInsertFiscal = z.infer<typeof registerFiscalSchema>;
export type TReadFiscals = z.infer<typeof readFiscalsSchema>;
export type TInsertFeirante = z.infer<typeof registerFeiranteSchema>;
export type TReadFeirantes = z.infer<typeof readFeiranteSchema>;
export type TInsertFeiras = z.infer<typeof registerFeirasSchema>;
export type TReadFeiras = z.infer<typeof readFeirasSchema>;
export type TFeiraDays = z.infer<typeof feiraDaysSchema>;
export type TReadUser = z.infer<typeof readUserSchema>;
export type TInsertUser = z.infer<typeof registerUserSchema>;
