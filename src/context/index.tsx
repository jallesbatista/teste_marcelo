"use client";
import { TReadFeirantes, TReadFiscals } from "@/interfaces";
import { feirantesMock, fiscalsMock } from "@/mocks";
import { createContext, useContext, useState } from "react";

interface IAppProviderData {
  fiscalList: TReadFiscals[];
  setFiscalList: React.Dispatch<React.SetStateAction<TReadFiscals[]>>;
  feirantesList: TReadFeirantes[];
  setFeirantesList: React.Dispatch<React.SetStateAction<TReadFeirantes[]>>;
}

const AppContext = createContext<IAppProviderData>({} as IAppProviderData);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [fiscalList, setFiscalList] = useState<TReadFiscals[]>(fiscalsMock);
  const [feirantesList, setFeirantesList] =
    useState<TReadFeirantes[]>(feirantesMock);

  return (
    <>
      <AppContext.Provider
        value={{ fiscalList, setFiscalList, feirantesList, setFeirantesList }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
