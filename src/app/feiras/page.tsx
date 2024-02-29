"use client";

import { useAppContext } from "@/context";
import { TFeiraDays, TInsertFeiras } from "@/interfaces";
import { monthListMock } from "@/mocks";
import { registerFeirasSchema } from "@/schemas/feiras.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Feiras() {
  const { feirasList, setFeirasList, createFeirasRequest } = useAppContext();
  const [feira, setFeira] = useState<TFeiraDays>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TInsertFeiras>({
    resolver: zodResolver(registerFeirasSchema),
  });

  const onSubmit = async (data: TInsertFeiras) => {
    const newFeira = await createFeirasRequest(data);

    if (newFeira) {
      setFeirasList(
        [...feirasList, newFeira]
          .sort((a, b) => a.Mes_n! - b.Mes_n!)
          .sort((a, b) => Number(a.exercicio) - Number(b.exercicio))
      );
    }
  };

  return (
    <>
      <main>
        <div className="wrapper">
          <div className="modal max-w-[1000px]">
            <div className="flex bg-white justify-between">
              <h2 className="px-2 py-1">Feiras</h2>
              <button className="button-close px-1 py-1">X</button>
            </div>
            <div className="gap-4  flex flex-col py-10 px-[20px]">
              <fieldset className="field px-[5px] pt-10 pb-2 max-w-full">
                <legend className="text-[10px]">Qtd de feiras para calculo</legend>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-row gap-[5px] text-xs">
                    <label className="flex flex-col font-bold">
                      Mês
                      <input
                        {...register("date", {
                          onChange(e: React.ChangeEvent<HTMLInputElement>) {
                            let feiras: TFeiraDays = {
                              domingo: 0,
                              segunda: 0,
                              terca: 0,
                              quarta: 0,
                              quinta: 0,
                              sexta: 0,
                              sabado: 0,
                            };

                            const year = Number(e.target.value.slice(0, 4));
                            const month = Number(e.target.value.slice(5));

                            const getFinalDayOfMonth = new Date(year, month, 0);
                            const getTotalDays = getFinalDayOfMonth.getDate();

                            for (let i = 1; i <= getTotalDays; i++) {
                              const newDate = new Date(year, month - 1, i);

                              if (newDate.getDay() == 0) {
                                feiras = {
                                  ...feiras,
                                  domingo: feiras.domingo + 1,
                                };
                              }
                              if (newDate.getDay() == 1) {
                                feiras = {
                                  ...feiras,
                                  segunda: feiras.segunda + 1,
                                };
                              }
                              if (newDate.getDay() == 2) {
                                feiras = {
                                  ...feiras,
                                  terca: feiras.terca + 1,
                                };
                              }
                              if (newDate.getDay() == 3) {
                                feiras = {
                                  ...feiras,
                                  quarta: feiras.quarta + 1,
                                };
                              }
                              if (newDate.getDay() == 4) {
                                feiras = {
                                  ...feiras,
                                  quinta: feiras.quinta + 1,
                                };
                              }
                              if (newDate.getDay() == 5) {
                                feiras = {
                                  ...feiras,
                                  sexta: feiras.sexta + 1,
                                };
                              }
                              if (newDate.getDay() == 6) {
                                feiras = {
                                  ...feiras,
                                  sabado: feiras.sabado + 1,
                                };
                              }
                            }
                            setFeira(feiras);

                            const feirasStringArray = Object.entries(feiras).map((value) => [
                              value[0],
                              String(value[1]),
                            ]);

                            const feirasObjectData = Object.fromEntries(feirasStringArray);

                            reset({
                              ...feirasObjectData,
                              exercicio: String(year),
                              date: e.target.value,
                              Mes: monthListMock[month - 1],
                            });
                          },
                        })}
                        type="month"
                        pattern="yyyy-mm"
                        className="font-normal input-default "
                      />
                    </label>
                    <label className="flex flex-col font-bold">
                      Exercício
                      <input
                        className="input-default "
                        {...register("exercicio")}
                        type="number"
                        min={1950}
                        max={Number(new Date().getFullYear())}
                        readOnly
                      />
                    </label>

                    <div className="flex flex-col w-full">
                      <div className="flex flex-row justify-between gap-[2px] w-full">
                        <label className="flex flex-col w-full font-bold">
                          Segunda
                          <input
                            {...register("segunda")}
                            type="number"
                            className="w-full input-default "
                            max={feira?.segunda}
                            min={0}
                          />
                        </label>
                        <label className="flex flex-col w-full font-bold">
                          Terça
                          <input
                            {...register("terca")}
                            type="number"
                            className="w-full input-default "
                            max={feira?.terca}
                            min={0}
                          />
                        </label>
                        <label className="flex flex-col w-full font-bold">
                          Quarta
                          <input
                            {...register("quarta")}
                            type="number"
                            className="w-full input-default "
                            max={feira?.quarta}
                            min={0}
                          />
                        </label>
                        <label className="flex flex-col w-full font-bold">
                          Quinta
                          <input
                            {...register("quinta")}
                            type="number"
                            className="w-full input-default "
                            max={feira?.quinta}
                            min={0}
                          />
                        </label>
                        <label className="flex flex-col w-full font-bold">
                          Sexta
                          <input
                            {...register("sexta")}
                            type="number"
                            className="w-full input-default "
                            max={feira?.sexta}
                            min={0}
                          />
                        </label>
                        <label className="flex flex-col w-full font-bold">
                          Sábado
                          <input
                            {...register("sabado")}
                            type="number"
                            className="w-full input-default "
                            max={feira?.sabado}
                            min={0}
                          />
                        </label>
                        <label className="flex flex-col w-full font-bold">
                          Domingo
                          <input
                            {...register("domingo")}
                            type="number"
                            className="w-full input-default "
                            max={feira?.domingo}
                            min={0}
                          />
                        </label>
                      </div>
                      <span className="text-xs">
                        Obs: Informe o total de feira(s) no mês para cada dia da semana
                      </span>
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="button-default py-2 px-2">
                      Adicionar
                    </button>
                  </div>
                </form>
              </fieldset>
              <fieldset className="field px-[5px] pt-10 pb-2 max-w-full">
                <legend className="text-[10px]">Lançamentos efetuados</legend>

                <div className="max-h-[167px] overflow-auto">
                  <table className="table-default ">
                    <thead>
                      <tr>
                        <th className="text-start ">Mensal</th>
                        <th className="text-start ">Segunda</th>
                        <th className="text-start ">Terça</th>
                        <th className="text-start ">Quarta</th>
                        <th className="text-start ">Quinta</th>
                        <th className="text-start ">Sexta</th>
                        <th className="text-start ">Sábado</th>
                        <th className="text-start ">Domingo</th>
                        <th className="text-start ">Vencimento</th>
                        <th className="text-start ">Exercício</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feirasList?.map((feira) => (
                        <tr key={feira.id}>
                          <td> </td>
                          <td>{feira.segunda}</td>
                          <td>{feira.terca}</td>
                          <td>{feira.quarta}</td>
                          <td>{feira.quinta}</td>
                          <td>{feira.sexta}</td>
                          <td>{feira.sabado}</td>
                          <td>{feira.domingo}</td>
                          <td>{feira.vencimento}</td>
                          <td>{feira.exercicio}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
