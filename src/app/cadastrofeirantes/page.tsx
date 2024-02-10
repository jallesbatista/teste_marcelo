"use client";

import { useAppContext } from "@/context";
import { CPFMask, OnlyNumbersMask, PhoneMask } from "@/functions/masks";
import { TInsertFeirante, TReadSectors } from "@/interfaces";
import { groupsMock, sectorsMock } from "@/mocks";
import { registerFeiranteSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function Cadastro_feirantes() {
  const [sector, setSector] = useState<TReadSectors>();
  const [qtdBancas, setQtdBancas] = useState<number>(1);
  const [totalValue, setTotalValue] = useState<number>(0);
  const { fiscalList, feirantesList, setFeirantesList } = useAppContext();

  const previewImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (sector?.value) {
      setTotalValue(+qtdBancas * 3.56 * Number(sector?.value));
    }
  }, [qtdBancas, sector]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInsertFeirante>({
    resolver: zodResolver(registerFeiranteSchema),
  });

  useEffect(() => {
    console.log(feirantesList);
  }, [feirantesList]);

  const onSubmit = (data: TInsertFeirante) => {
    setFeirantesList([
      ...feirantesList,
      {
        ...data,
        id: feirantesList.length
          ? Math.max(...feirantesList.map((feirante) => feirante.id)) + 1
          : 1,
      },
    ]);

    reset();
    setSector(undefined);
    setQtdBancas(1);
  };

  return (
    <div className="wrapper">
      <div className="modal">
        <div className="flex bg-white justify-between">
          <h2 className="px-2 py-1">Cadastro Feirantes</h2>
          <button className="button-close px-1 py-1">X</button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col font-normal px-[40px] pt-[50px] pb-[24px]"
        >
          <div className="flex gap-[12px] justify-between">
            <div className="flex flex-col gap-[25px]  w-[80%]">
              <div className="flex gap-[12px] w-[80%]">
                <div className="flex flex-col w-1/3 gap-[25px]">
                  <label className="flex flex-col">
                    C.P.F.
                    <input
                      type="text"
                      {...register("CPF", {
                        onChange(e: React.ChangeEvent<HTMLInputElement>) {
                          CPFMask(e);
                        },
                      })}
                      placeholder="___.___.___-__"
                    />
                  </label>
                  <label className="flex flex-col">
                    R.G.
                    <input
                      type="text"
                      maxLength={9}
                      {...register("RG", {
                        onChange(e: React.ChangeEvent<HTMLInputElement>) {
                          OnlyNumbersMask(e);
                        },
                      })}
                    />
                  </label>
                </div>

                <div className="flex flex-col w-2/3 gap-[25px]">
                  <label className="flex flex-col">
                    Nome (feirante)
                    <input type="text" {...register("name")} />
                  </label>

                  <label className="flex flex-col">
                    ENDEREÇO
                    <input
                      type="text"
                      placeholder="(Logradouro, numero, CEP, cidade, estado)"
                      className="input-default"
                      {...register("address")}
                    />
                  </label>
                </div>
              </div>

              <div className="flex gap-[12px] w-full">
                <label className="flex flex-col w-1/4">
                  QTD BANCA(S)
                  <input
                    type="number"
                    min={1}
                    step={1}
                    className="w-full input-default"
                    {...register("qtd_bancas", {
                      onChange(e) {
                        setQtdBancas(Number(e.target.value));
                      },
                    })}
                    defaultValue={1}
                  />
                </label>

                <label className="flex flex-col w-[40%]">
                  SETOR
                  <select
                    className="input-default"
                    {...register("sector", {
                      onChange(e: React.ChangeEvent<HTMLInputElement>) {
                        const sector = sectorsMock.find(
                          (sector) => sector.id == Number(e.target.value)
                        );
                        setSector(sector);
                      },
                    })}
                  >
                    <option value={""}>Selecionar</option>
                    {sectorsMock.map((sector) => (
                      <option key={sector.id} value={sector.id}>
                        {sector.description}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col w-[10%]">
                  VL. M2
                  <input type="number" readOnly value={sector?.value || ""} />
                </label>

                <label className="flex flex-col w-auto">
                  Valor R$
                  {sector && (
                    <span className="font-bold">
                      {totalValue.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                        maximumFractionDigits: 4,
                      })}{" "}
                      {/* {
                        groupsMock.find((group) => group.id == sector?.group!)
                          ?.name
                      } */}
                    </span>
                  )}
                </label>
              </div>

              <div className="flex gap-[12px] w-[80%]">
                <label className="flex flex-col w-[30%]">
                  FONE
                  <input
                    type="tel"
                    maxLength={15}
                    className="w-full input-default"
                    {...register("fone", {
                      onChange(e: React.ChangeEvent<HTMLInputElement>) {
                        PhoneMask(e);
                      },
                    })}
                  />
                </label>

                <label className="flex flex-col  w-[30%]">
                  FISCAL
                  <select {...register("fiscalId")} className="input-default">
                    <option value={""}> Selecionar</option>
                    {fiscalList.map((fiscal) => (
                      <option key={fiscal.id} value={fiscal.id}>
                        {fiscal.name}
                      </option>
                    ))}
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
              <fieldset className="field h-full min-h-[10px]">
                <legend>FOTO</legend>
                <img className="m-w-full m-h-full" ref={previewImageRef} />
              </fieldset>

              <label className="button-default self-center p-2">
                <input
                  {...register("file", {
                    onChange(e: React.ChangeEvent<HTMLInputElement>) {
                      const inputTarget = e.target;
                      const file = inputTarget.files![0];

                      if (file) {
                        const reader = new FileReader();

                        reader.onload = () => {
                          previewImageRef.current!.src = String(reader.result!);
                        };

                        reader.readAsDataURL(file);
                      }
                    },
                  })}
                  className="hidden"
                  type="file"
                  accept="image/**"
                />
                <span>Inserir Foto</span>
              </label>
            </div>
          </div>

          <div className="mt-[24px]">
            <p>Dia(s) de Venda</p>
            <div className="flex gap-[25px] mt-2">
              <div className="flex flex-col">
                <label className="flex items-center gap-1">
                  <input {...register("days.monday")} type="checkbox" />
                  SEGUNDA
                </label>
                <label className="flex items-center gap-1">
                  <input {...register("days.tuesday")} type="checkbox" />
                  TERÇA
                </label>
                <label className="flex items-center gap-1">
                  <input {...register("days.wednesday")} type="checkbox" />
                  QUARTA
                </label>
                <label className="flex items-center gap-1">
                  <input {...register("days.thrusday")} type="checkbox" />
                  QUINTA
                </label>
              </div>
              <div className="flex flex-col">
                <label className="flex items-center gap-1">
                  <input {...register("days.friday")} type="checkbox" />
                  SEXTA
                </label>
                <label className="flex items-center gap-1">
                  <input {...register("days.saturday")} type="checkbox" />
                  SÁBADO
                </label>
                <label className="flex items-center gap-1">
                  <input {...register("days.sunday")} type="checkbox" />
                  DOMINGO
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8">
            <button type="submit" className="button-default-l">
              GRAVAR
            </button>
            <button
              onClick={() => reset()}
              type="button"
              className="button-default-l"
            >
              RETORNAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
