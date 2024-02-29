"use client";

import { BrlCurrencyMask } from "@/functions/masks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TInsertSector } from "@/interfaces";
import { useAppContext } from "@/context";
import { registerSectorSchema } from "@/schemas/setores.schemas";
import { gruposMock } from "@/mocks";

export default function Setores() {
  const { sectorsList, setSectorsList, createSetoresRequest } = useAppContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInsertSector>({
    resolver: zodResolver(registerSectorSchema),
  });

  const onSubmit = async (data: TInsertSector) => {
    const newSector = await createSetoresRequest(data);

    if (newSector) {
      setSectorsList([...sectorsList, newSector]);
    }

    reset();
  };

  return (
    <div className="wrapper">
      <div className="modal">
        <div className="flex bg-white justify-between">
          <h2 className="px-2 py-1">Setores</h2>
          <button className="button-close px-1 py-1">X</button>
        </div>
        <div className="flex flex-col px-[20px] pt-[40px] pb-[80px] gap-4">
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 justify-between">
            <label className="flex flex-col w-[20%]">
              Código
              <input type="text" placeholder="Automático" readOnly />
            </label>

            <div className="flex w-[70%] gap-1">
              <label className="flex flex-col w-[50%]">
                Descrição
                <input type="text" {...register("setor")} />
              </label>
              <label className="flex flex-col w-[20%]">
                Valor
                <input
                  type="text"
                  {...register("valor", {
                    onChange(e: React.ChangeEvent<HTMLInputElement>) {
                      BrlCurrencyMask(e);
                    },
                  })}
                />
              </label>
              <label className="flex flex-col w-[30%]">
                Grupo
                <select {...register("grupo")}>
                  <option value={""}></option>
                  {gruposMock.map((group) => (
                    <option key={group.id} value={group.name}>
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

          <div className="overflow-auto">
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
                {sectorsList.map((sector) => (
                  <tr key={sector.codigo}>
                    <td>{sector.codigo}</td>
                    <td className="text-nowrap text-ellipsis">{sector.setor}</td>
                    <td>{sector.padrao}</td>
                    <td>
                      {sector.valor.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                    <td className="text-nowrap text-ellipsis truncate">{sector.grupo}</td>
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
