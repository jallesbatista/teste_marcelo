"use client";
import { useAppContext } from "@/context";

export default function Cadastro() {
  const { fiscalList, sectorsList, feirantesList, switchToTranslateDays } = useAppContext();

  return (
    <div className="wrapper">
      <div className="modal text-sm">
        <div className="flex bg-white justify-between">
          <h2 className="px-2 py-1">Cadastro</h2>
          <button className="button-close px-1 py-1">X</button>
        </div>

        <div className="flex flex-col gap-3 px-[20px] pt-[12px] pb-[50px]">
          <fieldset className="field">
            <div className="flex justify-between pt-[12px] px-[16px] pb-[24px] ">
              <div className="flex flex-col w-max min-w-max">
                <div className="flex justify-between gap-2">
                  <label className="flex items-center">
                    <input name="register_type" type="radio" />
                    Resumida
                  </label>
                  <label className="flex items-center">
                    <input name="register_type" type="radio" />
                    Nome
                  </label>
                  <label className="flex items-center">
                    <input name="register_type" type="radio" />
                    CPF
                  </label>
                  <label className="flex items-center">
                    <input name="register_type" type="radio" />
                    Resumida old
                  </label>
                </div>
                <input type="text" />
              </div>

              <label className="flex flex-col w-[15%] gap-2">
                Fiscal
                <select>
                  <option value={""}> Selecionar</option>
                  {fiscalList.map((fiscal) => (
                    <option key={fiscal.id} value={fiscal.id}>
                      {fiscal.nome}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col w-[15%] gap-2">
                Dias
                <select>
                  <option value={"all"}>TODOS</option>

                  <option value={"monday"}>SEGUNDA</option>
                  <option value={"tuesday"}>TERÇA</option>
                  <option value={"wednesday"}>QUARTA</option>
                  <option value={"thrusday"}>QUINTA</option>
                  <option value={"fryday"}>SEXTA</option>
                  <option value={"saturday"}>SÁBADO</option>
                  <option value={"sunday"}>DOMINGO</option>
                </select>
              </label>

              <label className="flex flex-col w-[20%] gap-2">
                Setor
                <select className="input-default">
                  <option value={""}>SELECIONAR</option>
                  {sectorsList.map((sector) => (
                    <option key={sector.codigo} value={sector.codigo}>
                      {sector.setor}
                    </option>
                  ))}
                </select>
              </label>

              <button type="submit">
                <svg
                  height="80px"
                  width="80px"
                  version="1.1"
                  id="Capa_1"
                  viewBox="-4.16 -4.16 40.32 40.32"
                  fill="#000000"
                  stroke="#000000"
                  strokeWidth="0.992"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)">
                    <rect
                      x="-4.16"
                      y="-4.16"
                      width="40.32"
                      height="40.32"
                      rx="0"
                      fill="#8bacac"
                    ></rect>
                  </g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#fafafa"
                    strokeWidth="4.736"
                  >
                    {" "}
                    <g>
                      {" "}
                      <g id="check_x5F_alt">
                        {" "}
                        <path
                          style={{
                            fill: "#030104",
                          }}
                          d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M13.52,23.383 L6.158,16.02l2.828-2.828l4.533,4.535l9.617-9.617l2.828,2.828L13.52,23.383z"
                        ></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g id="check_x5F_alt">
                        {" "}
                        <path
                          style={{
                            fill: "#030104",
                          }}
                          d="M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z M13.52,23.383 L6.158,16.02l2.828-2.828l4.533,4.535l9.617-9.617l2.828,2.828L13.52,23.383z"
                        ></path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </button>
            </div>
          </fieldset>

          <fieldset className="field">
            <legend className="ml-[10px]">Feirante</legend>
            <div className="w-full px-[16px] py-[12px] ">
              <div className="flex gap-4 font-semibold text-blue-600">
                <span>{"Numero do código do feirante"}</span>
                <h3>NOME DO FEIRANTE</h3>
              </div>
              <div className="flex gap-4">
                <span>Código setor</span>
                <p>NOME DO SETOR</p>
              </div>
            </div>
          </fieldset>

          <div className="flex flex-col bg-[white]">
            <div className="flex">
              <div className="button-menu">
                <input
                  id="feirantes"
                  name="window"
                  type="radio"
                  className="hidden"
                  defaultChecked
                />
                <label htmlFor="feirantes">Feirantes</label>
              </div>
              <div className="button-menu">
                <input id="pagamentos" name="window" type="radio" className="hidden" />
                <label htmlFor="pagamentos">Pagamentos</label>
              </div>
              <div className="button-menu">
                <input id="alteracoes" name="window" type="radio" className="hidden" />
                <label htmlFor="alteracoes">Alterações</label>
              </div>
              <div className="button-menu">
                <input id="lancamentos" name="window" type="radio" className="hidden" />
                <label htmlFor="lancamentos">Lançamentos</label>
              </div>
              <div className="button-menu">
                <input id="cadastrar_inscrição" name="window" type="radio" className="hidden" />
                <label htmlFor="cadastrar_inscrição">Cadastrar Inscrição</label>
              </div>
              <div className="button-menu">
                <input id="alterar_feirante" name="window" type="radio" className="hidden" />
                <label htmlFor="alterar_feirante">Alterar Feirante</label>
              </div>
              <div className="button-menu">
                <input id="parcelamento" name="window" type="radio" className="hidden" />
                <label htmlFor="parcelamento">Parcelamento</label>
              </div>
              <div className="button-menu">
                <input id="transporte(s)" name="window" type="radio" className="hidden" />
                <label htmlFor="transporte(s)">Transporte(s)</label>
              </div>
            </div>

            <div className="bg-white w-full p-[12px]">
              <fieldset className="field">
                <legend className="ml-[10px]">IMPRESSAO</legend>
                <div className="flex flex-col pt-3 px-3 pb-[32px]">
                  <div className="flex items-end justify-start gap-4">
                    <div className="flex flex-col">
                      <p>Qtd de Feirantes</p>
                      <span className="text-center">{feirantesList.length}</span>
                    </div>

                    <label className="flex flex-col">
                      Mes Referencia
                      <input type="month" />
                    </label>

                    <label className="flex flex-col w-max">
                      Vencimento
                      <input type="date" className="w-full" />
                    </label>

                    <div className="flex gap-3">
                      <button className="h-full px-3 py-5 button-default">Boleto</button>
                      <button className="h-full px-3 py-5 button-default">Sem Carga</button>
                    </div>
                  </div>
                  <div className="overflow-auto mt-3 max-h-[216px]">
                    <table className="table-default">
                      <thead>
                        <tr>
                          <th className="text-start">Resumida</th>
                          <th className="text-start">Insc. Anterior</th>
                          <th className="text-start">Feirante</th>
                          <th className="text-start">Codigo</th>
                          <th className="text-start">Setor</th>
                          <th className="text-start">Banca</th>
                          <th className="text-start">Valor</th>
                          <th className="text-start">Venda(s)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feirantesList.map((feirante) => {
                          const initialValue =
                            sectorsList.find((sector) => sector.codigo == feirante.sectorId)
                              ?.valor! *
                            feirante.qtd_bancas *
                            3.56;

                          const simulatedTax = 0.123595506 * initialValue;

                          const adittionalDaySimulatedTax = 1.8;

                          const finalValue =
                            (initialValue + simulatedTax) * adittionalDaySimulatedTax;

                          const daysArray = Object.entries(feirante.days)
                            .filter((day) => day[1])
                            .map((filtredDays) => filtredDays[0]);

                          const daysArrayToString = switchToTranslateDays(daysArray)
                            .split(" ")
                            .join(", ");

                          return (
                            <tr key={feirante.id}>
                              <td className="text-nowrap text-ellipsis">00000</td>
                              <td className="text-nowrap text-ellipsis">00000</td>
                              <td className="text-nowrap text-ellipsis">{feirante.name}</td>
                              <td className="text-nowrap text-ellipsis">00000</td>
                              <td className="text-nowrap text-ellipsis">
                                {
                                  sectorsList.find((sector) => sector.codigo == feirante.sectorId)
                                    ?.setor
                                }
                              </td>
                              <td className="text-nowrap text-ellipsis">{feirante.qtd_bancas}</td>
                              <td className="text-nowrap text-ellipsis">
                                {finalValue.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                              <td className="text-nowrap text-ellipsis">{daysArrayToString}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-between w-full">
                    <label className="flex flex-col w-full mt-3">
                      Obs:
                      <textarea className="border-black border-2 w-[55%] overflow-y-auto resize-none min-h-[124px]" />
                    </label>

                    <div>
                      <button className="button-default px-3 py-2">Alterar</button>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
