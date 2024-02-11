"use client";

import { TFeiraDays, TReadFeiras, TRegisterFeiras } from "@/interfaces";
import { feirasMock } from "@/mocks";
import { registerFeirasSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Feiras() {
  const [feirasList, setFeirasList] = useState<TReadFeiras[]>(feirasMock);

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegisterFeiras>({
    resolver: zodResolver(registerFeirasSchema),
  });

  const onSubmit = (data: any) => {
    setFeirasList([
      ...feirasList,
      {
        ...data,
        id: feirasList.length ? Math.max(...feirasList.map((feira) => feira.id)) + 1 : 1,
      },
    ]);
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
                              sunday: 0,
                              monday: 0,
                              tuesday: 0,
                              thrusday: 0,
                              wednesday: 0,
                              fryday: 0,
                              saturday: 0,
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
                                  sunday: feiras.sunday + 1,
                                };
                              }
                              if (newDate.getDay() == 1) {
                                feiras = {
                                  ...feiras,
                                  monday: feiras.monday + 1,
                                };
                              }
                              if (newDate.getDay() == 2) {
                                feiras = {
                                  ...feiras,
                                  tuesday: feiras.tuesday + 1,
                                };
                              }
                              if (newDate.getDay() == 3) {
                                feiras = {
                                  ...feiras,
                                  wednesday: feiras.wednesday + 1,
                                };
                              }
                              if (newDate.getDay() == 4) {
                                feiras = {
                                  ...feiras,
                                  thrusday: feiras.thrusday + 1,
                                };
                              }
                              if (newDate.getDay() == 5) {
                                feiras = {
                                  ...feiras,
                                  fryday: feiras.fryday + 1,
                                };
                              }
                              if (newDate.getDay() == 6) {
                                feiras = {
                                  ...feiras,
                                  saturday: feiras.saturday + 1,
                                };
                              }
                            }
                            const feirasStringArray = Object.entries(feiras).map((value) => [
                              value[0],
                              String(value[1]),
                            ]);

                            const feirasObjectData = Object.fromEntries(feirasStringArray);

                            reset({
                              feiraDays: feirasObjectData,
                              exercise: String(year),
                              date: e.target.value,
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
                        {...register("exercise")}
                        type="number"
                        min={1950}
                        max={Number(new Date().getFullYear())}
                        readOnly
                      />
                    </label>

                    <div className="flex flex-col">
                      <div className="flex flex-row justify-between gap-[2px] w-full">
                        <label className="flex flex-col font-bold">
                          Segunda
                          <input
                            {...register("feiraDays.monday")}
                            type="text"
                            readOnly
                            className="w-full input-default "
                          />
                        </label>
                        <label className="flex flex-col font-bold">
                          Terça
                          <input
                            {...register("feiraDays.tuesday")}
                            type="text"
                            readOnly
                            className="w-full input-default "
                          />
                        </label>
                        <label className="flex flex-col font-bold">
                          Quarta
                          <input
                            {...register("feiraDays.wednesday")}
                            type="text"
                            readOnly
                            className="w-full input-default "
                          />
                        </label>
                        <label className="flex flex-col font-bold">
                          Quinta
                          <input
                            {...register("feiraDays.thrusday")}
                            type="text"
                            readOnly
                            className="w-full input-default "
                          />
                        </label>
                        <label className="flex flex-col font-bold">
                          Sexta
                          <input
                            {...register("feiraDays.fryday")}
                            type="text"
                            readOnly
                            className="w-full input-default "
                          />
                        </label>
                        <label className="flex flex-col font-bold">
                          Sábado
                          <input
                            {...register("feiraDays.saturday")}
                            type="text"
                            readOnly
                            className="w-full input-default "
                          />
                        </label>
                        <label className="flex flex-col font-bold">
                          Domingo
                          <input
                            {...register("feiraDays.sunday")}
                            type="text"
                            readOnly
                            className="w-full input-default "
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
                      {feirasList.map((feira) => (
                        <tr key={feira.id}>
                          <td> </td>
                          <td>{feira.feiraDays.monday}</td>
                          <td>{feira.feiraDays.tuesday}</td>
                          <td>{feira.feiraDays.wednesday}</td>
                          <td>{feira.feiraDays.thrusday}</td>
                          <td>{feira.feiraDays.fryday}</td>
                          <td>{feira.feiraDays.saturday}</td>
                          <td>{feira.feiraDays.sunday}</td>
                          <td>
                            {new Date(Number(feira.exercise), Number(feira.date.slice(5)), 0)
                              .toISOString()
                              .slice(0, 10)
                              .split("-")
                              .reverse()
                              .join("/")}
                          </td>
                          <td>{feira.exercise}</td>
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
