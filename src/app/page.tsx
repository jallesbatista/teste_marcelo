"use client";
export default function Feiras() {
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="shadow-2xl gap-4 flex flex-col bg-[#BDD6F5] text-black w-[95%] py-10 px-[20px] rounded-xl">
            <fieldset className="field px-[5px] pt-10 pb-2 max-w-full">
              <legend className="text-[10px]">
                Qtd de feiras para calculo
              </legend>
              <div className="flex flex-row gap-[5px] text-xs">
                <label className="flex flex-col font-bold">
                  Mês
                  <input type="month" className="font-normal" />
                </label>
                <label className="flex flex-col font-bold">
                  Exercício
                  <input
                    className="font-normal"
                    type="number"
                    min={1950}
                    max={Number(new Date().getFullYear())}
                    onChange={(e) => {
                      if (
                        Number(e.target.value) >
                        Number(new Date().getFullYear())
                      ) {
                        e.target.value = String(new Date().getFullYear());
                      }
                    }}
                  />
                </label>

                <div className="flex flex-col">
                  <div className="flex flex-row justify-between gap-[2px] w-full">
                    <label className="flex flex-col font-bold">
                      Segunda
                      <input
                        type="text"
                        readOnly
                        className="w-full max-w-[80px] font-normal"
                      />
                    </label>
                    <label className="flex flex-col font-bold">
                      Terça
                      <input
                        type="text"
                        readOnly
                        className="w-full max-w-[80px] font-normal"
                      />
                    </label>
                    <label className="flex flex-col font-bold">
                      Quarta
                      <input
                        type="text"
                        readOnly
                        className="w-full max-w-[80px] font-normal"
                      />
                    </label>
                    <label className="flex flex-col font-bold">
                      Quinta
                      <input
                        type="text"
                        readOnly
                        className="w-full max-w-[80px] font-normal"
                      />
                    </label>
                    <label className="flex flex-col font-bold">
                      Sexta
                      <input
                        type="text"
                        readOnly
                        className="w-full max-w-[80px] font-normal"
                      />
                    </label>
                    <label className="flex flex-col font-bold">
                      Sábado
                      <input
                        type="text"
                        readOnly
                        className="w-full max-w-[80px] font-normal"
                      />
                    </label>
                    <label className="flex flex-col font-bold">
                      Domingo
                      <input
                        type="text"
                        readOnly
                        className="w-full max-w-[80px] font-normal"
                      />
                    </label>
                  </div>
                  <span className="text-xs">
                    Obs: Informe o total de feira(s) no mês para cada dia da
                    semana
                  </span>
                </div>
              </div>
              <div>
                <button className="bg-[lightgrey] text-xs p-2">
                  Adicionar
                </button>
              </div>
            </fieldset>
            <fieldset className="field px-[5px] pt-10 pb-2 max-w-full">
              <legend className="text-[10px]">Lançamentos efetuados</legend>
            </fieldset>
          </div>
        </div>
      </main>
    </>
  );
}
