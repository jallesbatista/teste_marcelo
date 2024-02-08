import {
  readFiscalsSchema,
  registerFiscalSchema,
  registerSectorSchema,
} from "@/schemas";
import { z } from "zod";

export type TInsertSector = z.infer<typeof registerSectorSchema>;
export type TInsertFiscal = z.infer<typeof registerFiscalSchema>;
export type TReadFiscal = z.infer<typeof readFiscalsSchema>;
