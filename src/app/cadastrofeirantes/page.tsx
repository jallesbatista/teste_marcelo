"use client";

import { CPFMask, OnlyNumbersMask, PhoneMask } from "@/functions/masks";
import { groupsMock, sectorsMock } from "@/mocks";
import { useState } from "react";

export default function Cadastro_feirantes() {
  const [sectorValue, setSectorValue] = useState<string | number>("");

  return (
    <div className="wrapper">
      <div className="modal">
        <div className="flex bg-white justify-between">
          <h2 className="px-2 py-1">Cadastro Feirantes</h2>
          <button className="button-close px-1 py-1">X</button>
        </div>
        <form className="flex flex-col font-normal px-[40px] pt-[50px] pb-[24px]">
          <div className="flex gap-[12px] justify-between">
            <div className="flex flex-col gap-[25px]  w-[80%]">
              <div className="flex gap-[12px] w-[80%]">
                <div className="flex flex-col w-1/3 gap-[25px]">
                  <label className="flex flex-col">
                    C.P.F.
                    <input
                      type="text"
                      onChange={(e) => {
                        CPFMask(e);
                      }}
                      placeholder="___.___.___-__"
                    />
                  </label>
                  <label className="flex flex-col">
                    R.G.
                    <input
                      type="text"
                      onChange={(e) => {
                        OnlyNumbersMask(e);
                      }}
                    />
                  </label>
                </div>

                <div className="flex flex-col w-2/3 gap-[25px]">
                  <label className="flex flex-col">
                    Nome (feirante)
                    <input type="text" />
                  </label>

                  <label className="flex flex-col">
                    ENDEREÇO
                    <input
                      type="text"
                      placeholder="(Logradouro, numero, CEP, cidade, estado)"
                      className="input-default"
                    />
                  </label>
                </div>
              </div>

              <div className="flex gap-[12px] w-full">
                <label className="flex flex-col w-1/4">
                  QTD BANCA(S)
                  <input type="number" className="w-full input-default" />
                </label>

                <label className="flex flex-col w-[40%]">
                  SETOR
                  <select
                    onChange={(e) => {
                      const value = sectorsMock.find(
                        (sector) => sector.id == Number(e.target.value)
                      );
                      setSectorValue(value?.value!);
                    }}
                    className="input-default"
                  >
                    {sectorsMock.map((sector) => (
                      <option key={sector.id} value={sector.id}>
                        {sector.description}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col w-[10%]">
                  VL. M2
                  <input
                    type="number"
                    readOnly
                    step={0.01}
                    value={sectorValue || sectorsMock[0].value}
                  />
                </label>

                <label className="flex flex-col w-auto">
                  Valor R$
                  <span> VALOR A SE COLOCAR + TIPO</span>
                </label>
              </div>

              <div className="flex gap-[12px] w-[80%]">
                <label className="flex flex-col w-[30%]">
                  FONE
                  <input
                    type="tel"
                    maxLength={15}
                    onChange={(e) => {
                      PhoneMask(e);
                    }}
                    className="w-full input-default"
                  />
                </label>

                <label className="flex flex-col  w-[30%]">
                  FISCAL
                  <select className="input-default">
                    <option value={"Fiscal"}> Fiscal</option>
                    <option value={"Fiscal"}> Fiscal</option>
                    <option value={"Fiscal"}> Fiscal</option>
                  </select>
                </label>

                <label className="flex flex-col  w-[40%]">
                  Natureza
                  <select className="input-default">
                    {groupsMock.map((group) => (
                      <option key={group.id} value={group.name}>
                        {group.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-[12px] w-[25%]">
              <fieldset className="field h-full">
                <legend>FOTO</legend>
              </fieldset>

              <button className="button-default self-center p-2">
                Inserir Foto
              </button>
            </div>
          </div>

          <div className="mt-[24px]">
            <p>Dia(s) de Venda</p>
            <div className="flex gap-[25px] mt-2">
              <div className="flex flex-col">
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  SEGUNDA
                </label>
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  TERÇA
                </label>
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  QUARTA
                </label>
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  QUINTA
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  SEXTA
                </label>
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  SÁBADO
                </label>
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  DOMINGO
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <button className="button-default-l">GRAVAR</button>
            <button className="button-default-l">RETORNAR</button>
          </div>
        </form>
      </div>
    </div>
  );
}
