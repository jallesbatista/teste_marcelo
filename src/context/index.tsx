"use client";
import { TReadFeirantes, TReadFiscals, TReadSectors, TReadUser, TUser } from "@/interfaces";
import { feirantesMock, fiscalsMock, sectorsMock } from "@/mocks";
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
}

const AppContext = createContext<IAppProviderData>({} as IAppProviderData);

function getInitialState() {
  const feirantes = window.localStorage.getItem("@feirantes");
  return feirantes ? JSON.parse(feirantes) : feirantesMock;
}

function AppWrapper({ children }: { children: React.ReactNode }) {
  const [fiscalList, setFiscalList] = useState<TReadFiscals[]>(fiscalsMock);
  const [feirantesList, setFeirantesList] = useState<TReadFeirantes[]>(getInitialState);
  const [sectorsList, setSectorsList] = useState<TReadSectors[]>(sectorsMock);
  const [user, setUser] = useState<TReadUser | null>(null);

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
