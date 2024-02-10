"use client";

import { BrlCurrencyMask, OnlyNumbersMask } from "@/functions/masks";
import { groupsMock, sectorsMock } from "@/mocks";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSectorSchema } from "@/schemas";
import { TInsertSector } from "@/interfaces";

export default function Setores() {
  const [sectors, setSectors] = useState(sectorsMock);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInsertSector>({
    resolver: zodResolver(registerSectorSchema),
  });

  const onSubmit = (data: TInsertSector) => {
    setSectors([
      ...sectors,
      {
        ...data,
        id: Math.max(...sectors.map((sector) => sector.id)) + 1,
        value: data.value,
      },
    ]);
    reset();
  };

  //  FAZER POP-UP DE INVALIDEZ CASO ADICIONE O MESMO SETOR

  return (
    <div className="wrapper">
      <div className="modal">
        <div className="flex bg-white justify-between">
          <h2 className="px-2 py-1">Setores</h2>
          <button className="button-close px-1 py-1">X</button>
        </div>
        <div className="flex flex-col px-[20px] pt-[40px] pb-[80px] gap-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-2 justify-between"
          >
            <label className="flex flex-col w-[20%]">
              Código
              <input type="text" placeholder="Automático" readOnly />
            </label>

            <div className="flex w-[70%] gap-1">
              <label className="flex flex-col w-[50%]">
                Descrição
                <input type="text" {...register("description")} />
              </label>
              <label className="flex flex-col w-[20%]">
                Valor
                <input
                  type="text"
                  {...register("value", {
                    onChange(e: React.ChangeEvent<HTMLInputElement>) {
                      BrlCurrencyMask(e);
                    },
                  })}
                />
              </label>
              <label className="flex flex-col w-[30%]">
                Grupo
                <select {...register("group")}>
                  <option value={""}></option>
                  {groupsMock.map((group) => (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex items-end">
              <button type="submit" className="button-default p-2">
                Inserir
              </button>
            </div>
          </form>

          <div className="overflow-scroll">
            <table className="table-default">
              <thead>
                <tr>
                  <th className="text-start">Código</th>
                  <th className="text-start">Descrição</th>
                  <th className="text-start">Padrão</th>
                  <th className="text-start">Valor</th>
                  <th className="text-start">Grupo</th>
                </tr>
              </thead>
              <tbody>
                {sectors.map((sector) => (
                  <tr key={sector.id}>
                    <td>{sector.id}</td>
                    <td className="text-nowrap text-ellipsis">
                      {sector.description}
                    </td>
                    <td>{sector.value > 8.5 ? 2 : 1}</td>
                    <td>
                      {sector.value.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td className="text-nowrap text-ellipsis truncate">
                      {
                        groupsMock.find((group) => group.id === sector.group)
                          ?.name
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
