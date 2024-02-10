import {
  TReadFeirantes,
  TReadFiscals,
  TReadSectors,
  TReadFeiras,
} from "@/interfaces";

export const groupsMock = [
  { id: 1, name: "FEIRA LIVRE" },
  { id: 2, name: "MERCADO DA CARNE" },
  { id: 3, name: "MERCADO HORTFRUITGRANJEIRO" },
  { id: 4, name: "TRANSPORTE" },
];

export const feirantesMock: TReadFeirantes[] = [
  {
    id: 1,
    name: "teste feirante",
    RG: "49.433.379-0",
    CPF: "000.000.000.00",
    address: "Rua do teste feirante, 00",
    qtd_bancas: 2,
    sector: 7,
    fone: "(00) 90000-0000",
    days: {
      monday: false,
      sunday: true,
      tuesday: true,
      wednesday: false,
      thrusday: false,
      friday: false,
      saturday: true,
    },
    fiscalId: 1,
  },
];

export const feirasMock: TReadFeiras[] = [
  {
    id: 1,
    date: "2022-01",
    exercise: "2022",
    feiraDays: {
      fryday: 4,
      monday: 5,
      saturday: 5,
      sunday: 5,
      thrusday: 4,
      tuesday: 4,
      wednesday: 4,
    },
  },
  {
    id: 2,
    date: "2022-02",
    exercise: "2022",
    feiraDays: {
      fryday: 4,
      monday: 4,
      saturday: 4,
      sunday: 4,
      thrusday: 4,
      tuesday: 4,
      wednesday: 4,
    },
  },
  {
    id: 3,
    date: "2022-03",
    exercise: "2022",
    feiraDays: {
      fryday: 4,
      monday: 4,
      saturday: 4,
      sunday: 4,
      thrusday: 5,
      tuesday: 5,
      wednesday: 5,
    },
  },
];

export const fiscalsMock: TReadFiscals[] = [
  {
    id: 1,
    name: "teste fiscal",
    email: "testefiscal@gmail.com",
    address: "Rua do teste fiscal, 00",
    fone: "(00) 90000-0000",
  },
];

export const sectorsMock: TReadSectors[] = [
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
