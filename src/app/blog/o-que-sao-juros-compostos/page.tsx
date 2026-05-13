import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'O que são juros compostos e por que são tão poderosos? | Guia Completo',
  description: 'Entenda o que são juros compostos, como funcionam, a fórmula de cálculo e por que são considerados a força mais poderosa do universo financeiro.',
};

export default function Post() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <nav className="mb-6">
          <Link href="/blog" className="text-blue-700 hover:text-blue-800 text-sm font-medium transition-colors">
            ← Voltar para o blog
          </Link>
        </nav>

        <article className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              O que são juros compostos e por que são tão poderosos?
            </h1>
            <p className="mt-2 text-sm text-zinc-500">Publicado em 12 de maio de 2024 • 6 minutos de leitura</p>
          </header>

          <div className="mt-8 prose prose-blue max-w-none">
            <h2 className="text-2xl font-semibold text-zinc-900">A oitava maravilha do mundo</h2>
            <p className="text-zinc-700 leading-relaxed">
              Existe uma frase atribuída a Albert Einstein que diz: &quot;Os juros compostos são a oitava maravilha do mundo. Quem entende, ganha. Quem não entende, paga.&quot; Independentemente de quem realmente disse isso, a verdade por trás dessa frase é inegável: os juros compostos são a força mais poderosa do universo financeiro.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Juros compostos são, em essência, juros que incidem sobre juros. Diferente dos juros simples, onde o rendimento é calculado apenas sobre o valor inicial, nos juros compostos cada período de rendimento é calculado sobre o montante acumulado até aquele momento. Isso cria um efeito de bola de neve que, com o tempo, gera resultados extraordinários.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Como funcionam na prática?</h2>
            <p className="text-zinc-700 leading-relaxed">
              Imagine que você investe R$ 1.000 a uma taxa de 10% ao ano. Veja a diferença entre juros simples e compostos ao longo de 10 anos:
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Comparação: R$ 1.000 a 10% ao ano</h3>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="text-left text-blue-800">
                    <th className="border-b border-blue-300 pb-2">Ano</th>
                    <th className="border-b border-blue-300 pb-2">Juros Simples</th>
                    <th className="border-b border-blue-300 pb-2">Juros Compostos</th>
                    <th className="border-b border-blue-300 pb-2">Diferença</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border-b border-blue-200 py-2">1</td><td className="border-b border-blue-200 py-2">R$ 1.100</td><td className="border-b border-blue-200 py-2">R$ 1.100</td><td className="border-b border-blue-200 py-2">R$ 0</td></tr>
                  <tr><td className="border-b border-blue-200 py-2">3</td><td className="border-b border-blue-200 py-2">R$ 1.300</td><td className="border-b border-blue-200 py-2">R$ 1.331</td><td className="border-b border-blue-200 py-2">R$ 31</td></tr>
                  <tr><td className="border-b border-blue-200 py-2">5</td><td className="border-b border-blue-200 py-2">R$ 1.500</td><td className="border-b border-blue-200 py-2">R$ 1.611</td><td className="border-b border-blue-200 py-2">R$ 111</td></tr>
                  <tr><td className="border-b border-blue-200 py-2">10</td><td className="border-b border-blue-200 py-2">R$ 2.000</td><td className="border-b border-blue-200 py-2">R$ 2.594</td><td className="border-b border-blue-200 py-2">R$ 594</td></tr>
                  <tr><td className="py-2">20</td><td className="py-2">R$ 3.000</td><td className="py-2 font-bold text-blue-900">R$ 6.727</td><td className="py-2 font-bold text-blue-900">R$ 3.727</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-zinc-700 leading-relaxed">
              Perceba como no início a diferença é pequena, mas com o passar dos anos ela se torna enorme. Em 20 anos, os juros compostos geraram mais que o dobro dos juros simples. Esse é o efeito exponencial.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">A fórmula dos juros compostos</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
              <p className="font-mono text-center text-blue-900 text-lg">
                M = C × (1 + i)^n
              </p>
            </div>
            <p className="text-zinc-700 leading-relaxed">Onde:</p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>M</strong> = Montante final (quanto você terá)</li>
              <li><strong>C</strong> = Capital inicial (quanto você investiu)</li>
              <li><strong>i</strong> = Taxa de juros por período (em decimal)</li>
              <li><strong>n</strong> = Número de períodos</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Exemplo prático</h3>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 my-4">
              <p className="text-zinc-700">
                <strong>Investimento:</strong> R$ 5.000 no Tesouro Selic a 13,25% ao ano por 5 anos<br />
                <strong>Cálculo:</strong> M = 5.000 × (1 + 0,1325)^5<br />
                <strong>Resultado:</strong> M = 5.000 × 1,8647 = <strong>R$ 9.323,50</strong><br />
                <strong>Rendimento:</strong> R$ 4.323,50 (86,5% de ganho)
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">O poder do tempo</h2>
            <p className="text-zinc-700 leading-relaxed">
              O fator mais importante nos juros compostos não é a taxa, não é o valor investido — é o <strong>tempo</strong>. Quanto mais cedo você começa a investir, mais poderoso é o efeito dos juros compostos.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">O poder de começar cedo</h3>
              <p className="text-blue-700 mb-2"><strong>Pessoa A:</strong> Investe R$ 500/mês dos 20 aos 30 anos (10 anos) e para.</p>
              <p className="text-blue-700 mb-2"><strong>Pessoa B:</strong> Investe R$ 500/mês dos 30 aos 60 anos (30 anos).</p>
              <p className="text-blue-700 mb-2">Ambos a 10% ao ano.</p>
              <p className="text-blue-900 font-bold mt-3">Resultado aos 60 anos:</p>
              <p className="text-blue-700">Pessoa A: R$ 1.744.940 (investiu apenas R$ 60.000)</p>
              <p className="text-blue-700">Pessoa B: R$ 1.130.244 (investiu R$ 180.000)</p>
              <p className="text-blue-900 font-bold mt-2">A pessoa A investiu 3x menos e terminou com mais dinheiro!</p>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Aportes mensais: o turbo dos juros compostos</h2>
            <p className="text-zinc-700 leading-relaxed">
              Investir um valor único e esperar é bom, mas adicionar aportes mensais regulares transforma completamente o resultado. Cada novo aporte começa a gerar seus próprios juros compostos, criando múltiplas bolas de neve crescendo simultaneamente.
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>R$ 300/mês por 20 anos a 12% ao ano:</strong> R$ 299.600 (você investiu R$ 72.000)</li>
              <li><strong>R$ 500/mês por 20 anos a 12% ao ano:</strong> R$ 499.334 (você investiu R$ 120.000)</li>
              <li><strong>R$ 1.000/mês por 20 anos a 12% ao ano:</strong> R$ 998.668 (você investiu R$ 240.000)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Onde encontrar juros compostos no Brasil?</h2>
            <p className="text-zinc-700 leading-relaxed">
              Praticamente todo investimento no Brasil trabalha com juros compostos:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Tesouro Direto:</strong> Selic, IPCA+, Prefixado — todos com juros compostos</li>
              <li><strong>CDB:</strong> Certificados de Depósito Bancário rendem juros sobre juros</li>
              <li><strong>LCI/LCA:</strong> Letras de Crédito com isenção de IR</li>
              <li><strong>Fundos de Investimento:</strong> Rendimento é reinvestido automaticamente</li>
              <li><strong>Ações com reinvestimento de dividendos:</strong> Efeito composto no longo prazo</li>
              <li><strong>Poupança:</strong> Também rende juros compostos, mas com taxa muito baixa</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Cuidado: juros compostos também trabalham contra você</h2>
            <p className="text-zinc-700 leading-relaxed">
              O mesmo poder que faz seu patrimônio crescer pode destruí-lo nas dívidas:
            </p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Cartão de crédito:</strong> Juros de até 400% ao ano — compostos</li>
              <li><strong>Cheque especial:</strong> Juros de até 150% ao ano — compostos</li>
              <li><strong>Empréstimos pessoais:</strong> Juros que podem dobrar a dívida em poucos anos</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed">
              Por isso, a primeira regra antes de investir é: <strong>elimine todas as dívidas com juros altos</strong>. Nenhum investimento rende mais do que o cartão de crédito cobra.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Como começar a aproveitar os juros compostos</h2>
            <ol className="list-decimal pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Elimine dívidas caras</strong> (cartão, cheque especial)</li>
              <li><strong>Crie uma reserva de emergência</strong> (3-6 meses de gastos no Tesouro Selic)</li>
              <li><strong>Defina um valor mensal para investir</strong> (mesmo que R$ 50)</li>
              <li><strong>Escolha investimentos adequados</strong> ao seu perfil</li>
              <li><strong>Reinvista todos os rendimentos</strong> — nunca retire antes do prazo</li>
              <li><strong>Seja consistente</strong> — o tempo é seu maior aliado</li>
            </ol>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Conclusão</h2>
            <p className="text-zinc-700 leading-relaxed">
              Os juros compostos são a ferramenta mais poderosa para construção de patrimônio. O segredo não está em encontrar a melhor taxa ou o melhor investimento, mas em começar o mais cedo possível, investir com consistência e ter paciência para deixar o tempo fazer sua mágica.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Cada dia que você adia o início dos seus investimentos é um dia a menos de juros compostos trabalhando para você. Comece hoje, mesmo que com pouco. O futuro você vai agradecer.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-200">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-zinc-700">
                <strong>Simule seus investimentos!</strong> Use nossa{' '}
                <Link href="/" className="text-blue-700 hover:text-blue-800 font-medium">calculadora de juros compostos</Link>
                {' '}para ver quanto seu dinheiro pode render.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
