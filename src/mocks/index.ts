import { TInsertFiscal, TReadFiscal } from "@/interfaces";

export const groupsMock = [
  { id: 1, name: "FEIRA LIVRE" },
  { id: 2, name: "MERCADO DA CARNE" },
  { id: 3, name: "MERCADO HORTFRUITGRANJEIRO" },
  { id: 4, name: "TRANSPORTE" },
];

export const fiscals: TReadFiscal[] = [
  {
    id: 1,
    name: "teste",
    email: "teste@gmail.com",
    address: "Rua do teste, 00",
    fone: "(00) 90000-0000",
  },
];

export const sectorsMock = [
  {
    id: 1,
    description: "FRUTAS, VERDURAS E LEGUMES",
    value: 3.56,
    group: 1,
  },
  {
    id: 2,
    description: "CALÇADOS, ROUPAS E TECIDOS",
    value: 3.56,
    group: 1,
  },
  {
    id: 3,
    description: "VARIADOS",
    value: 3.56,
    group: 1,
  },
  {
    id: 4,
    description: "GENEROS ALIMENTíCIOS (CEREAIS, DOCES E BOLOS)",
    value: 3.56,
    group: 1,
  },
  {
    id: 5,
    description: "SUINO E CAPRINO",
    value: 6.23,
    group: 2,
  },
  {
    id: 6,
    description: "AVES",
    value: 4.45,
    group: 2,
  },
  {
    id: 7,
    description: "BOVINO",
    value: 8.01,
    group: 2,
  },
  {
    id: 8,
    description: "VISCERAS",
    value: 4.45,
    group: 2,
  },
  {
    id: 9,
    description: "CHARQUE",
    value: 4.45,
    group: 2,
  },
  {
    id: 10,
    description: "CEREAIS",
    value: 6.23,
    group: 3,
  },
  {
    id: 11,
    description: "GENEROS ALIMENTICIOS (QUEIJO, REQUEIJÃO E BOLOS)",
    value: 6.23,
    group: 3,
  },
  {
    id: 12,
    description: "BANCA DE FRUTAS E VERDURAS (HORTFRUITGRANJEIRO)",
    value: 6.23,
    group: 3,
  },
  {
    id: 13,
    description: "PEDRAS",
    value: 6.23,
    group: 3,
  },
  {
    id: 14,
    description: "TRANSPORTE (A)",
    value: 35.6,
    group: 4,
  },
  {
    id: 15,
    description: "TRANSPORTE (B)",
    value: 26.7,
    group: 4,
  },
  {
    id: 16,
    description: "TRANSPORTE (C)",
    value: 17.8,
    group: 4,
  },
  {
    id: 17,
    description: "TRANSPORTE (D)",
    value: 8.9,
    group: 4,
  },
  {
    id: 18,
    description: "TRAILLER (E)",
    value: 4.45,
    group: 4,
  },
];
