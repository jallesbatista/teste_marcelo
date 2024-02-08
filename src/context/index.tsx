"use client";
import { TReadFiscal } from "@/interfaces";
import { fiscals } from "@/mocks";
import { createContext, useContext, useState } from "react";

interface IAppProviderData {
  fiscalList: TReadFiscal[];
  setFiscalList: React.Dispatch<React.SetStateAction<TReadFiscal[]>>;
}

const AppContext = createContext<IAppProviderData>({} as IAppProviderData);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [fiscalList, setFiscalList] = useState<TReadFiscal[]>(fiscals);

  return (
    <>
      <AppContext.Provider value={{ fiscalList, setFiscalList }}>
        {children}
      </AppContext.Provider>
    </>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
