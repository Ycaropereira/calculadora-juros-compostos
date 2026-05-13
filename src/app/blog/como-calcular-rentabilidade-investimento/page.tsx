import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Como calcular a rentabilidade real de um investimento | Guia 2024',
  description: 'Aprenda a descontar inflação, taxas e impostos para descobrir quanto seu investimento realmente rende. Fórmulas e exemplos práticos.',
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
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Como calcular a rentabilidade real de um investimento</h1>
            <p className="mt-2 text-sm text-zinc-500">Publicado em 12 de maio de 2024 • 5 minutos de leitura</p>
          </header>
          <div className="mt-8 prose prose-blue max-w-none">
            <h2 className="text-2xl font-semibold text-zinc-900">Rendimento nominal vs rendimento real</h2>
            <p className="text-zinc-700 leading-relaxed">
              Quando alguém diz que um investimento rendeu 12% ao ano, está falando do <strong>rendimento nominal</strong> — o número bruto, sem descontar nada. Mas o que realmente importa para o seu bolso é o <strong>rendimento real</strong>: quanto de poder de compra você efetivamente ganhou.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Para chegar ao rendimento real, você precisa descontar três vilões: inflação, impostos e taxas. Neste artigo, vamos desmontar cada um deles e mostrar como calcular o que realmente sobra no seu bolso.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Os três vilões do rendimento</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">1. Inflação</h3>
            <p className="text-zinc-700 leading-relaxed">
              A inflação é o aumento geral dos preços. Se seu investimento rendeu 12% mas a inflação foi 5%, seu ganho real foi de apenas ~6,67%. A inflação corrói o poder de compra do dinheiro, tornando essencial que seus investimentos rendam acima dela.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
              <p className="text-blue-900 font-semibold">Fórmula do rendimento real (descontando inflação):</p>
              <p className="font-mono text-center text-blue-900 mt-2">Taxa Real = [(1 + Taxa Nominal) ÷ (1 + Inflação)] - 1</p>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 my-4">
              <p className="text-zinc-700"><strong>Exemplo:</strong></p>
              <p className="text-zinc-700">Rendimento nominal: 12% | Inflação (IPCA): 5%</p>
              <p className="text-zinc-700 mt-1">Taxa Real = [(1,12) ÷ (1,05)] - 1 = 0,0667 = <strong>6,67%</strong></p>
              <p className="text-zinc-600 text-sm mt-1">Seu ganho real foi 6,67%, não 12%.</p>
            </div>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">2. Imposto de Renda</h3>
            <p className="text-zinc-700 leading-relaxed">
              A maioria dos investimentos de renda fixa no Brasil é tributada pelo IR. A alíquota depende do prazo:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Até 180 dias:</strong> 22,5% sobre o rendimento</li>
              <li><strong>181 a 360 dias:</strong> 20%</li>
              <li><strong>361 a 720 dias:</strong> 17,5%</li>
              <li><strong>Acima de 720 dias:</strong> 15%</li>
            </ul>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 my-4">
              <p className="text-zinc-700"><strong>Exemplo:</strong> CDB que rendeu R$ 1.000 em 2 anos</p>
              <p className="text-zinc-700">IR: 15% × R$ 1.000 = R$ 150</p>
              <p className="text-zinc-700">Rendimento líquido: <strong>R$ 850</strong></p>
            </div>
            <p className="text-zinc-700 leading-relaxed">
              <strong>Investimentos isentos de IR:</strong> LCI, LCA, CRI, CRA, debêntures incentivadas e poupança são isentos para pessoa física. Por isso, um LCI de 90% do CDI pode render mais que um CDB de 100% do CDI após impostos.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">3. Taxas</h3>
            <p className="text-zinc-700 leading-relaxed">
              Diversas taxas podem reduzir seu rendimento:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Taxa de administração:</strong> Comum em fundos de investimento (0,5% a 2% ao ano)</li>
              <li><strong>Taxa de custódia:</strong> B3 cobra 0,20% ao ano no Tesouro Direto</li>
              <li><strong>Taxa de performance:</strong> Alguns fundos cobram sobre rendimentos que superam o benchmark</li>
              <li><strong>Spread:</strong> Diferença entre taxa compra e venda em operações cambiais</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Cálculo completo: do bruto ao líquido real</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Exemplo: CDB 100% CDI por 2 anos</h3>
              <p className="text-blue-700">CDI: 13,15% ao ano | Inflação: 4,5% ao ano</p>
              <ol className="text-blue-700 mt-3 space-y-2">
                <li><strong>1. Rendimento bruto:</strong> 13,15% ao ano</li>
                <li><strong>2. Desconta IR (15% por ser mais de 720 dias):</strong> 13,15% × 0,85 = 11,18%</li>
                <li><strong>3. Desconta inflação:</strong> [(1,1118) ÷ (1,045)] - 1 = 6,39%</li>
              </ol>
              <p className="text-blue-900 font-bold mt-3">Rendimento real líquido: 6,39% ao ano</p>
              <p className="text-blue-700 text-sm">De 13,15% bruto, sobraram 6,39% reais — menos da metade!</p>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Comparando investimentos pela rentabilidade real</h2>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="text-left text-zinc-800">
                    <th className="border-b border-zinc-300 pb-2">Investimento</th>
                    <th className="border-b border-zinc-300 pb-2">Bruto</th>
                    <th className="border-b border-zinc-300 pb-2">Líquido de IR</th>
                    <th className="border-b border-zinc-300 pb-2">Real (- inflação)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border-b border-zinc-200 py-2">Poupança</td><td className="border-b border-zinc-200 py-2">7,40%</td><td className="border-b border-zinc-200 py-2">7,40%</td><td className="border-b border-zinc-200 py-2 text-red-600 font-semibold">2,77%</td></tr>
                  <tr><td className="border-b border-zinc-200 py-2">CDB 100% CDI (2 anos)</td><td className="border-b border-zinc-200 py-2">13,15%</td><td className="border-b border-zinc-200 py-2">11,18%</td><td className="border-b border-zinc-200 py-2 text-blue-700 font-semibold">6,39%</td></tr>
                  <tr><td className="border-b border-zinc-200 py-2">LCI 90% CDI</td><td className="border-b border-zinc-200 py-2">11,84%</td><td className="border-b border-zinc-200 py-2">11,84%</td><td className="border-b border-zinc-200 py-2 text-blue-700 font-semibold">7,02%</td></tr>
                  <tr><td className="border-b border-zinc-200 py-2">Tesouro IPCA+ 6,5%</td><td className="border-b border-zinc-200 py-2">11,00%</td><td className="border-b border-zinc-200 py-2">9,35%</td><td className="border-b border-zinc-200 py-2 text-blue-700 font-semibold">4,64%</td></tr>
                  <tr><td className="py-2">Fundo DI (taxa 1%)</td><td className="py-2">12,15%</td><td className="py-2">10,33%</td><td className="py-2 text-blue-700 font-semibold">5,58%</td></tr>
                </tbody>
              </table>
              <p className="text-zinc-600 text-sm mt-3">* Considerando inflação de 4,5% e IR de 15% (prazo acima de 2 anos)</p>
            </div>
            <p className="text-zinc-700 leading-relaxed">
              Note como a LCI, mesmo com taxa bruta menor, tem rendimento real maior que o CDB por ser isenta de IR. Essa análise muda completamente sua decisão de investimento.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Dicas para maximizar seu rendimento real</h2>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Prefira investimentos de longo prazo:</strong> IR menor (15% vs 22,5%)</li>
              <li><strong>Considere investimentos isentos:</strong> LCI, LCA e debêntures incentivadas</li>
              <li><strong>Evite taxas altas:</strong> Fundos com taxa de administração acima de 0,5% para renda fixa</li>
              <li><strong>Diversifique:</strong> Combine investimentos pós-fixados e atrelados à inflação</li>
              <li><strong>Reinvista rendimentos:</strong> Juros compostos são potencializados pelo reinvestimento</li>
              <li><strong>Acompanhe a inflação:</strong> Tesouro IPCA+ garante rendimento real positivo</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Conclusão</h2>
            <p className="text-zinc-700 leading-relaxed">
              Nunca avalie um investimento apenas pelo rendimento nominal. O que importa é o rendimento real — quanto de poder de compra você efetivamente ganha após descontar inflação, impostos e taxas. Um investimento que parece ótimo no papel pode ser medíocre na prática, e vice-versa.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Faça sempre essa conta antes de investir. Compare investimentos pela rentabilidade líquida real, não pela bruta. Seu bolso agradece.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-200">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-zinc-700">
                <strong>Simule seus investimentos!</strong> Use nossa{' '}
                <Link href="/" className="text-blue-700 hover:text-blue-800 font-medium">calculadora de juros compostos</Link>
                {' '}para projetar rendimentos com diferentes taxas.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
