"use client";
import {
  TInsertFeiras,
  TInsertSector,
  TReadFeirantes,
  TReadFeiras,
  TReadFiscals,
  TReadSectors,
  TReadUser,
} from "@/interfaces";
import { feirantesMock, sectorsMock } from "@/mocks";
import api from "@/services";
import dynamic from "next/dynamic";
import { createContext, useContext, useEffect, useState } from "react";

interface IAppProviderData {
  fiscalList: TReadFiscals[];
  setFiscalList: React.Dispatch<React.SetStateAction<TReadFiscals[]>>;
  feirantesList: TReadFeirantes[];
  setFeirantesList: React.Dispatch<React.SetStateAction<TReadFeirantes[]>>;
  sectorsList: TReadSectors[];
  setSectorsList: React.Dispatch<React.SetStateAction<TReadSectors[]>>;
  switchToTranslateDays: (expr: string[]) => string;
  user: TReadUser | null;
  setUser: React.Dispatch<React.SetStateAction<TReadUser | null>>;
  feirasList: TReadFeiras[];
  setFeirasList: React.Dispatch<React.SetStateAction<TReadFeiras[]>>;
  createFeirasRequest: (feiraData: TInsertFeiras) => Promise<false | TReadFeiras>;
  createSetoresRequest: (sectorData: TInsertSector) => Promise<false | TReadSectors>;
}

const AppContext = createContext<IAppProviderData>({} as IAppProviderData);

function getInitialState() {
  const feirantes = window.localStorage.getItem("@feirantes");
  return feirantes ? JSON.parse(feirantes) : feirantesMock;
}

function AppWrapper({ children }: { children: React.ReactNode }) {
  const [feirasList, setFeirasList] = useState<TReadFeiras[]>([]);
  const [fiscalList, setFiscalList] = useState<TReadFiscals[]>([]);
  const [feirantesList, setFeirantesList] = useState<TReadFeirantes[]>(getInitialState);
  const [sectorsList, setSectorsList] = useState<TReadSectors[]>([]);
  const [user, setUser] = useState<TReadUser | null>(null);

  const createFeirasRequest = async (feiraData: TInsertFeiras) => {
    try {
      const { data }: { data: TReadFeiras } = await api.post("/feiras", feiraData);
      return data;
    } catch (error: any) {
      console.log(error?.response?.data || error?.message);
      return false;
    }
  };

  const getFeirasRequest = async () => {
    try {
      const { data }: { data: TReadFeiras[] } = await api.get("/feiras");
      setFeirasList(data);
    } catch (error: any) {
      console.log(error?.response?.data || error?.message);
    }
  };

  const getFiscaisRequest = async () => {
    try {
      const { data }: { data: TReadFiscals[] } = await api.get("/fiscais");
      setFiscalList(data);
    } catch (error: any) {
      console.log(error?.response?.data || error?.message);
    }
  };

  const getSetoresRequest = async () => {
    try {
      const { data }: { data: TReadSectors[] } = await api.get("/setores");
      setSectorsList(data);
    } catch (error: any) {
      console.log(error?.response?.data || error?.message);
    }
  };

  const createSetoresRequest = async (sectorData: TInsertSector) => {
    try {
      const { data }: { data: TReadSectors } = await api.post("/setores", sectorData);
      return data;
    } catch (error: any) {
      console.log(error?.response?.data || error?.message);
      return false;
    }
  };

  useEffect(() => {
    getFeirasRequest();
    getFiscaisRequest();
    getSetoresRequest();
  }, []);

  useEffect(() => {
    localStorage.setItem("@feirantes", JSON.stringify(feirantesList));
  }, [feirantesList]);

  const switchToTranslateDays = (expr: string[]) => {
    let daysString = "";

    expr.forEach((dayString) => {
      dayString == dayString.toLowerCase().trim();
      switch (dayString) {
        case "sunday":
          daysString += "Domingo ";
          break;
        case "monday":
          daysString += "Segunda ";
          break;
        case "tuesday":
          daysString += "Terça ";
          break;
        case "wednesday":
          daysString += "Quarta ";
          break;
        case "thrusday":
          daysString += "Quinta ";
          break;
        case "friday":
          daysString += "Sexta ";
          break;
        case "saturday":
          daysString += "Sábado ";
          break;
        default:
          "";
          break;
      }
    });

    return daysString.trim();
  };

  return (
    <>
      <AppContext.Provider
        value={{
          fiscalList,
          setFiscalList,
          feirantesList,
          setFeirantesList,
          sectorsList,
          setSectorsList,
          switchToTranslateDays,
          user,
          setUser,
          feirasList,
          setFeirasList,
          createFeirasRequest,
          createSetoresRequest,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
}

export default dynamic(() => Promise.resolve(AppWrapper), {
  ssr: false,
});

export function useAppContext() {
  return useContext(AppContext);
}
