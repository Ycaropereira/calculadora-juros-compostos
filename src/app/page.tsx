"use client";

import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartPoint = {
  mes: number;
  valor: number;
  juros: number;
};

function parseNumber(value: string): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
}

export default function Home() {
  const [capitalInicial, setCapitalInicial] = useState("1000");
  const [taxaJuros, setTaxaJuros] = useState("1");
  const [periodo, setPeriodo] = useState("12");
  const [aporteMensal, setAporteMensal] = useState("0");
  const [resultado, setResultado] = useState<ChartPoint[]>([]);

  const resumo = useMemo(() => {
    if (resultado.length === 0) {
      return {
        valorFinal: 0,
        totalInvestido: 0,
        totalJuros: 0,
        rendimentoPct: 0,
        multiplicacao: 0,
      };
    }

    const valorFinal = resultado[resultado.length - 1]?.valor ?? 0;
    const totalInvestido =
      parseNumber(capitalInicial) +
      parseNumber(aporteMensal) * Math.max(0, Math.trunc(parseNumber(periodo)));
    const totalJuros = valorFinal - totalInvestido;

    return {
      valorFinal,
      totalInvestido,
      totalJuros,
      rendimentoPct: totalInvestido > 0 ? (totalJuros / totalInvestido) * 100 : 0,
      multiplicacao: totalInvestido > 0 ? valorFinal / totalInvestido : 0,
    };
  }, [resultado, capitalInicial, aporteMensal, periodo]);

  function calcular(): void {
    const capital = parseNumber(capitalInicial);
    const taxa = parseNumber(taxaJuros) / 100;
    const meses = Math.trunc(parseNumber(periodo));
    const aporte = parseNumber(aporteMensal);

    if (capital <= 0 || taxa <= 0 || meses <= 0) {
      window.alert("Preencha capital inicial, taxa e período com valores válidos.");
      return;
    }

    const dados: ChartPoint[] = [];
    let valorAcumulado = capital;

    dados.push({ mes: 0, valor: capital, juros: 0 });

    for (let i = 1; i <= meses; i += 1) {
      const jurosMes = valorAcumulado * taxa;
      valorAcumulado = valorAcumulado + jurosMes + aporte;
      dados.push({ mes: i, valor: valorAcumulado, juros: jurosMes });
    }

    setResultado(dados);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Calculadora de Juros Compostos
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-zinc-700">
            Simule um investimento com juros compostos, aportes mensais e visualize a
            evolução do patrimônio ao longo do tempo.
          </p>
        </header>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">
              Parâmetros do investimento
            </h2>

            <div className="mt-6 grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-zinc-700">
                  Capital inicial (R$)
                </span>
                <input
                  className="h-12 rounded-xl border border-zinc-300 bg-white px-4 text-zinc-900 shadow-sm outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  inputMode="decimal"
                  min={0}
                  step={0.01}
                  type="number"
                  value={capitalInicial}
                  onChange={(e) => setCapitalInicial(e.target.value)}
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-zinc-700">
                  Taxa de juros mensal (%)
                </span>
                <input
                  className="h-12 rounded-xl border border-zinc-300 bg-white px-4 text-zinc-900 shadow-sm outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  inputMode="decimal"
                  min={0}
                  step={0.01}
                  type="number"
                  value={taxaJuros}
                  onChange={(e) => setTaxaJuros(e.target.value)}
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-zinc-700">
                  Período (meses)
                </span>
                <input
                  className="h-12 rounded-xl border border-zinc-300 bg-white px-4 text-zinc-900 shadow-sm outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  inputMode="numeric"
                  min={1}
                  step={1}
                  type="number"
                  value={periodo}
                  onChange={(e) => setPeriodo(e.target.value)}
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-zinc-700">
                  Aporte mensal (R$)
                </span>
                <input
                  className="h-12 rounded-xl border border-zinc-300 bg-white px-4 text-zinc-900 shadow-sm outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
                  inputMode="decimal"
                  min={0}
                  step={0.01}
                  type="number"
                  value={aporteMensal}
                  onChange={(e) => setAporteMensal(e.target.value)}
                />
              </label>

              <button
                type="button"
                onClick={calcular}
                className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-sky-600 px-5 font-semibold text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-200"
              >
                Calcular
              </button>
            </div>
          </section>

          <section className="grid gap-6">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-zinc-900">Resultados</h2>

              {resultado.length === 0 ? (
                <p className="mt-3 text-zinc-700">
                  Preencha os campos e clique em <strong>Calcular</strong>.
                </p>
              ) : (
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-sky-50 p-4">
                    <p className="text-sm text-zinc-700">Valor final</p>
                    <p className="mt-1 text-xl font-bold text-sky-700">
                      {formatarMoeda(resumo.valorFinal)}
                    </p>
                  </div>
                  <div className="rounded-xl bg-emerald-50 p-4">
                    <p className="text-sm text-zinc-700">Total investido</p>
                    <p className="mt-1 text-xl font-bold text-emerald-700">
                      {formatarMoeda(resumo.totalInvestido)}
                    </p>
                  </div>
                  <div className="rounded-xl bg-violet-50 p-4">
                    <p className="text-sm text-zinc-700">Total em juros</p>
                    <p className="mt-1 text-xl font-bold text-violet-700">
                      {formatarMoeda(resumo.totalJuros)}
                    </p>
                  </div>

                  <div className="sm:col-span-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                    <p className="text-sm text-zinc-700">
                      <strong>Rendimento total:</strong>{" "}
                      {resumo.rendimentoPct.toFixed(2)}%
                    </p>
                    <p className="mt-1 text-sm text-zinc-700">
                      <strong>Multiplicação:</strong>{" "}
                      {resumo.multiplicacao.toFixed(2)}x
                    </p>
                  </div>
                </div>
              )}
            </div>

            {resultado.length > 0 && (
              <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-zinc-900">
                  Evolução do patrimônio
                </h2>
                <div className="mt-4 h-[380px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={resultado} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="mes" />
                      <YAxis tickFormatter={(v: number) => `R$ ${v.toLocaleString("pt-BR")}`} />
                      <Tooltip
                        formatter={(value: unknown) => {
                          if (typeof value === "number") return formatarMoeda(value);
                          return String(value ?? "");
                        }}
                        labelFormatter={(label: unknown) => `Mês ${String(label ?? "")}`}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="valor"
                        name="Valor acumulado"
                        stroke="#0284c7"
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="juros"
                        name="Juros do mês"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </section>
        </div>

        <section className="mt-10 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-zinc-900">
            O que são juros compostos?
          </h2>
          <p className="mt-3 text-zinc-700 leading-relaxed">
            Juros compostos são os juros calculados sobre o valor inicial e também sobre
            os juros acumulados. Em outras palavras, o seu dinheiro passa a render “juros
            sobre juros”, o que tende a acelerar o crescimento do montante com o tempo.
          </p>
        </section>
      </div>
    </div>
  );
}
