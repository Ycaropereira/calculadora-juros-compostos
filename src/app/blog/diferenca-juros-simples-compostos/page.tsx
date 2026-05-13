import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Diferença entre juros simples e compostos | Com exemplos práticos',
  description: 'Compare juros simples e compostos com exemplos reais. Entenda as fórmulas, quando cada um é usado e por que os compostos fazem tanta diferença no longo prazo.',
};

export default function Post() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <nav className="mb-6">
          <Link href="/blog" className="text-blue-700 hover:text-blue-800 text-sm font-medium transition-colors">← Voltar para o blog</Link>
        </nav>
        <article className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Diferença entre juros simples e compostos</h1>
            <p className="mt-2 text-sm text-zinc-500">Publicado em 12 de maio de 2024 • 4 minutos de leitura</p>
          </header>
          <div className="mt-8 prose prose-blue max-w-none">
            <h2 className="text-2xl font-semibold text-zinc-900">Dois sistemas, resultados muito diferentes</h2>
            <p className="text-zinc-700 leading-relaxed">
              Juros simples e compostos são dois métodos de cálculo de rendimentos financeiros. Embora pareçam semelhantes no início, com o tempo a diferença entre eles se torna astronômica. Entender essa diferença é fundamental para tomar decisões financeiras inteligentes, seja investindo ou tomando empréstimos.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Juros Simples</h2>
            <p className="text-zinc-700 leading-relaxed">
              Nos juros simples, o rendimento é calculado <strong>sempre sobre o valor inicial</strong>. Não importa quanto tempo passe, a base de cálculo nunca muda.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
              <p className="font-mono text-center text-blue-900 text-lg">M = C × (1 + i × n)</p>
              <p className="text-blue-700 text-sm text-center mt-1">Montante = Capital × (1 + taxa × períodos)</p>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 my-4">
              <p className="text-zinc-700"><strong>Exemplo:</strong> R$ 10.000 a 10% ao ano por 5 anos</p>
              <ul className="text-zinc-700 mt-2 space-y-1">
                <li>Ano 1: R$ 10.000 + R$ 1.000 = R$ 11.000</li>
                <li>Ano 2: R$ 10.000 + R$ 1.000 = R$ 12.000</li>
                <li>Ano 3: R$ 10.000 + R$ 1.000 = R$ 13.000</li>
                <li>Ano 4: R$ 10.000 + R$ 1.000 = R$ 14.000</li>
                <li>Ano 5: R$ 10.000 + R$ 1.000 = <strong>R$ 15.000</strong></li>
              </ul>
              <p className="text-zinc-600 text-sm mt-2">Rendimento total: R$ 5.000 (sempre R$ 1.000 por ano)</p>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Juros Compostos</h2>
            <p className="text-zinc-700 leading-relaxed">
              Nos juros compostos, o rendimento é calculado <strong>sobre o montante acumulado</strong>. Ou seja, você ganha juros sobre os juros anteriores. A base de cálculo cresce a cada período.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
              <p className="font-mono text-center text-blue-900 text-lg">M = C × (1 + i)^n</p>
              <p className="text-blue-700 text-sm text-center mt-1">Montante = Capital × (1 + taxa) elevado ao número de períodos</p>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 my-4">
              <p className="text-zinc-700"><strong>Exemplo:</strong> R$ 10.000 a 10% ao ano por 5 anos</p>
              <ul className="text-zinc-700 mt-2 space-y-1">
                <li>Ano 1: R$ 10.000 × 1,10 = R$ 11.000</li>
                <li>Ano 2: R$ 11.000 × 1,10 = R$ 12.100</li>
                <li>Ano 3: R$ 12.100 × 1,10 = R$ 13.310</li>
                <li>Ano 4: R$ 13.310 × 1,10 = R$ 14.641</li>
                <li>Ano 5: R$ 14.641 × 1,10 = <strong>R$ 16.105</strong></li>
              </ul>
              <p className="text-zinc-600 text-sm mt-2">Rendimento total: R$ 6.105 (cresce a cada ano)</p>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Comparação visual</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">R$ 10.000 a 10% ao ano</h3>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="text-left text-blue-800">
                    <th className="border-b border-blue-300 pb-2">Período</th>
                    <th className="border-b border-blue-300 pb-2">Juros Simples</th>
                    <th className="border-b border-blue-300 pb-2">Juros Compostos</th>
                    <th className="border-b border-blue-300 pb-2">Diferença</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border-b border-blue-200 py-2">1 ano</td><td className="border-b border-blue-200 py-2">R$ 11.000</td><td className="border-b border-blue-200 py-2">R$ 11.000</td><td className="border-b border-blue-200 py-2">R$ 0</td></tr>
                  <tr><td className="border-b border-blue-200 py-2">5 anos</td><td className="border-b border-blue-200 py-2">R$ 15.000</td><td className="border-b border-blue-200 py-2">R$ 16.105</td><td className="border-b border-blue-200 py-2">R$ 1.105</td></tr>
                  <tr><td className="border-b border-blue-200 py-2">10 anos</td><td className="border-b border-blue-200 py-2">R$ 20.000</td><td className="border-b border-blue-200 py-2">R$ 25.937</td><td className="border-b border-blue-200 py-2">R$ 5.937</td></tr>
                  <tr><td className="border-b border-blue-200 py-2">20 anos</td><td className="border-b border-blue-200 py-2">R$ 30.000</td><td className="border-b border-blue-200 py-2">R$ 67.275</td><td className="border-b border-blue-200 py-2 font-bold">R$ 37.275</td></tr>
                  <tr><td className="py-2">30 anos</td><td className="py-2">R$ 40.000</td><td className="py-2 font-bold text-blue-900">R$ 174.494</td><td className="py-2 font-bold text-blue-900">R$ 134.494</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-zinc-700 leading-relaxed">
              Em 30 anos, os juros compostos geraram <strong>mais de 4 vezes</strong> o valor dos juros simples. Essa é a mágica do crescimento exponencial versus o crescimento linear.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Onde cada tipo é usado no dia a dia</h2>
            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Juros simples na prática</h3>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Desconto de duplicatas:</strong> Cálculo de desconto antecipado de títulos</li>
              <li><strong>Multas e mora:</strong> Juros de atraso em boletos geralmente são simples</li>
              <li><strong>Cálculos rápidos:</strong> Usado como aproximação em períodos curtos</li>
              <li><strong>Algumas operações de curto prazo:</strong> Empréstimos de curtíssimo prazo</li>
            </ul>
            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Juros compostos na prática</h3>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Investimentos:</strong> CDB, Tesouro Direto, fundos, ações — todos usam juros compostos</li>
              <li><strong>Empréstimos e financiamentos:</strong> Bancos cobram juros compostos</li>
              <li><strong>Cartão de crédito:</strong> A dívida cresce com juros compostos (por isso é tão perigosa)</li>
              <li><strong>Inflação:</strong> O aumento de preços é composto (juros sobre juros)</li>
              <li><strong>Poupança:</strong> Rende juros compostos mensalmente</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Por que os juros compostos são mais comuns?</h2>
            <p className="text-zinc-700 leading-relaxed">
              Os juros compostos refletem melhor a realidade econômica. Quando um banco empresta dinheiro, ele poderia reinvestir os juros recebidos. Portanto, faz sentido que cada período de juros considere o montante total acumulado. Da mesma forma, quando você investe, seus rendimentos são reinvestidos automaticamente, gerando mais rendimentos.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Na prática, quase todas as operações financeiras no Brasil usam juros compostos. Por isso é tão importante entender como eles funcionam — tanto para fazer seu dinheiro crescer quanto para evitar que dívidas saiam do controle.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">A lição mais importante</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
              <p className="text-blue-900 font-semibold">Quando você investe, os juros compostos são seus melhores amigos.</p>
              <p className="text-blue-900 font-semibold mt-1">Quando você deve, os juros compostos são seus piores inimigos.</p>
            </div>
            <p className="text-zinc-700 leading-relaxed">
              A diferença entre riqueza e pobreza financeira muitas vezes está em qual lado dos juros compostos você se encontra. Investidores aproveitam o poder dos juros compostos a seu favor. Devedores sofrem com o mesmo poder trabalhando contra eles.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Conclusão</h2>
            <p className="text-zinc-700 leading-relaxed">
              Juros simples são lineares e previsíveis. Juros compostos são exponenciais e surpreendentes. No curto prazo, a diferença é pequena. No longo prazo, é gigantesca. Entender essa diferença é o primeiro passo para tomar decisões financeiras mais inteligentes e construir um futuro financeiro sólido.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-200">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-zinc-700">
                <strong>Veja a diferença na prática!</strong> Use nossa{' '}
                <Link href="/" className="text-blue-700 hover:text-blue-800 font-medium">calculadora de juros compostos</Link>
                {' '}para simular seus investimentos.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
