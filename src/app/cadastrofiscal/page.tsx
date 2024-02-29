"use client";
import { useAppContext } from "@/context";
import { PhoneMask } from "@/functions/masks";
import { TInsertFiscal } from "@/interfaces";
import { registerFiscalSchema } from "@/schemas/fiscais.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function CadastroFiscal() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInsertFiscal>({ resolver: zodResolver(registerFiscalSchema) });

  const { fiscalList, setFiscalList } = useAppContext();
  const [fiscalFilter, setFiscalFilter] = useState<string>("");

  const fiscalsFiltreds = fiscalList.filter((fiscal) =>
    fiscal.nome.toLowerCase().includes(fiscalFilter.toLowerCase().trim())
  );

  const onSubmit = (data: TInsertFiscal) => {
    setFiscalList([
      ...fiscalList,
      {
        id: fiscalList.length ? Math.max(...fiscalList.map((fiscal) => fiscal.id)) + 1 : 1,
        ...data,
      },
    ]);
    reset();
  };

  return (
    <div className="wrapper">
      <div className="modal flex flex-col">
        <div className="flex bg-white justify-between">
          <h2 className="px-2 py-1">Fiscal Cadastro/Alteração</h2>
          <button className="button-close px-1 py-1">X</button>
        </div>
        <div className="flex flex-col gap-3 px-[20px] pt-[12px] pb-[50px]">
          <fieldset className="field">
            <legend className="ml-2"> Dados do Fiscal</legend>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col pt-[12px] pl-[20px] pr-[30px] pb-[80px]"
            >
              <div className="flex w-full gap-2 justify-between">
                <label className="flex flex-col w-full">
                  Nome
                  <input type="text" {...register("nome")} />
                </label>
                <label className="flex flex-col w-full">
                  Endereço
                  <input type="text" {...register("endereco")} />
                </label>
              </div>

              <div className="flex w-full gap-2 justify-start">
                <label className="flex flex-col w-[50%]">
                  Email
                  <input type="email" {...register("email")} />
                </label>
                <label className="flex flex-col w-[20%]">
                  Celular
                  <input
                    type="tel"
                    maxLength={15}
                    placeholder="(_) _____-____"
                    className="w-full"
                    {...register("fone", {
                      onChange(e: React.ChangeEvent<HTMLInputElement>) {
                        PhoneMask(e);
                      },
                    })}
                  />
                </label>

                <div className="flex gap-4 items-end justify-end w-[30%]">
                  <button type="submit" className="button-default px-[20px] py-2">
                    Inserir
                  </button>
                  <button
                    type="button"
                    className="button-default px-[20px] py-2"
                    onClick={() => reset()}
                  >
                    Sair
                  </button>
                </div>
              </div>
            </form>
          </fieldset>
          <div className="max-w-full">
            <fieldset className="field w-full">
              <legend className="ml-2">Fiscais Cadastrados</legend>

              <div className="flex flex-col gap-6 pt-2 pr-[16px] pb-[40px] pl-[10px]">
                <label className="w-[60%] flex flex-col">
                  Fiscal
                  <input
                    type="text"
                    value={fiscalFilter}
                    onChange={(e) => {
                      setFiscalFilter(e.target.value);
                    }}
                  />
                </label>
                <div className="max-h-[200px] overflow-auto">
                  <table className="table-default ">
                    <thead>
                      <tr>
                        <th className="text-start w-fit">Código</th>
                        <th className="text-start  w-[40%]">Email</th>
                        <th className="text-start  w-[40%]">Nome</th>
                        <th className="text-start  w-[20%]">Fone</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fiscalsFiltreds?.map((fiscal) => (
                        <tr key={fiscal.id}>
                          <td>{fiscal.codigo ? fiscal.codigo : "---"}</td>
                          <td className="text-nowrap text-ellipsis">
                            {fiscal.email ? fiscal.email : "---"}
                          </td>
                          <td className="text-nowrap  text-ellipsis">{fiscal.nome}</td>
                          <td className="text-nowrap text-ellipsis ">{fiscal.fone}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
