import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Como investir com pouco dinheiro em 2024 | Guia prático',
  description: 'Aprenda a investir com R$ 50 ou menos. Guia completo para iniciantes com as melhores opções de investimento acessíveis no Brasil.',
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
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Como investir com pouco dinheiro em 2024</h1>
            <p className="mt-2 text-sm text-zinc-500">Publicado em 12 de maio de 2024 • 5 minutos de leitura</p>
          </header>
          <div className="mt-8 prose prose-blue max-w-none">
            <h2 className="text-2xl font-semibold text-zinc-900">Você não precisa ser rico para investir</h2>
            <p className="text-zinc-700 leading-relaxed">
              Um dos maiores mitos sobre investimentos é que você precisa de muito dinheiro para começar. A verdade é que, no Brasil de 2024, é possível começar a investir com menos de R$ 50. O mais importante não é quanto você investe, mas o hábito de investir regularmente e deixar os juros compostos trabalharem a seu favor.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Neste guia, vamos mostrar as melhores opções para quem está começando com pouco dinheiro e quer construir patrimônio de forma segura e inteligente.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Antes de investir: os 3 passos essenciais</h2>
            <h3 className="text-xl font-semibold text-zinc-900 mt-4">1. Quite dívidas caras</h3>
            <p className="text-zinc-700 leading-relaxed">
              Não faz sentido investir a 12% ao ano enquanto paga 300% no cartão de crédito. Priorize: cartão de crédito, cheque especial e empréstimos pessoais. Apenas dívidas baratas (financiamento imobiliário, consignado) podem coexistir com investimentos.
            </p>
            <h3 className="text-xl font-semibold text-zinc-900 mt-4">2. Monte sua reserva de emergência</h3>
            <p className="text-zinc-700 leading-relaxed">
              Antes de qualquer investimento de longo prazo, tenha 3 a 6 meses de gastos mensais em um investimento líquido (Tesouro Selic ou CDB de liquidez diária). Essa reserva evita que você precise resgatar investimentos em momentos ruins.
            </p>
            <h3 className="text-xl font-semibold text-zinc-900 mt-4">3. Defina seus objetivos</h3>
            <p className="text-zinc-700 leading-relaxed">
              Saber para que você está investindo define onde investir. Objetivos de curto prazo (até 2 anos) pedem investimentos conservadores. Objetivos de longo prazo (mais de 5 anos) permitem mais risco e potencial de retorno.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">As melhores opções para investir com pouco</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Tesouro Direto (a partir de R$ 30)</h3>
            <p className="text-zinc-700 leading-relaxed">O investimento mais seguro do Brasil. Você empresta dinheiro para o governo federal e recebe de volta com juros. Existem três tipos:</p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Tesouro Selic:</strong> Ideal para reserva de emergência. Rende a taxa Selic (atualmente 13,25% ao ano). Liquidez diária.</li>
              <li><strong>Tesouro IPCA+:</strong> Protege contra a inflação. Ideal para aposentadoria e objetivos de longo prazo.</li>
              <li><strong>Tesouro Prefixado:</strong> Você sabe exatamente quanto vai receber. Bom quando as taxas estão altas.</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">CDB de liquidez diária (a partir de R$ 1)</h3>
            <p className="text-zinc-700 leading-relaxed">
              Certificados de Depósito Bancário são emitidos por bancos. Muitos bancos digitais oferecem CDBs que rendem 100% do CDI ou mais, com investimento mínimo de apenas R$ 1. São protegidos pelo FGC (Fundo Garantidor de Créditos) até R$ 250.000 por banco.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">LCI e LCA (a partir de R$ 50)</h3>
            <p className="text-zinc-700 leading-relaxed">
              Letras de Crédito Imobiliário e do Agronegócio têm uma grande vantagem: são <strong>isentas de Imposto de Renda</strong> para pessoa física. Um LCI que rende 90% do CDI equivale a um CDB de 106% do CDI após impostos. Normalmente exigem prazos mínimos de 90 dias a 1 ano.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Fundos de Investimento (a partir de R$ 100)</h3>
            <p className="text-zinc-700 leading-relaxed">
              Fundos reúnem dinheiro de vários investidores para aplicar em diferentes ativos. Para iniciantes, os fundos DI e de renda fixa são os mais indicados. Verifique sempre a taxa de administração — acima de 1% ao ano para fundos de renda fixa é caro demais.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">ETFs - Fundos de Índice (a partir de R$ 10)</h3>
            <p className="text-zinc-700 leading-relaxed">
              ETFs são fundos negociados na bolsa que replicam índices. O BOVA11 replica o Ibovespa, e o IVVB11 replica o S&amp;P 500 americano. É a forma mais simples e barata de diversificar seus investimentos em ações ou no mercado internacional.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Estratégia prática: a regra dos R$ 200</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Divisão sugerida para R$ 200/mês</h3>
              <ul className="text-blue-700 space-y-2">
                <li>• <strong>R$ 100</strong> → Tesouro Selic (reserva de emergência até completar 6 meses)</li>
                <li>• <strong>R$ 50</strong> → CDB/LCI de longo prazo (objetivos de médio prazo)</li>
                <li>• <strong>R$ 50</strong> → ETF IVVB11 ou BOVA11 (longo prazo, crescimento)</li>
              </ul>
              <p className="text-blue-900 font-semibold mt-4">Após completar a reserva, redirecione os R$ 100 para os outros investimentos.</p>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Erros comuns de quem começa</h2>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Esperar ter muito dinheiro:</strong> Comece com o que tem. R$ 50 investidos hoje valem mais que R$ 500 investidos daqui a 5 anos.</li>
              <li><strong>Investir sem reserva de emergência:</strong> Sem reserva, qualquer imprevisto obriga a resgatar investimentos no pior momento.</li>
              <li><strong>Seguir dicas de influenciadores:</strong> Ninguém conhece sua situação financeira melhor que você. Estude antes de investir.</li>
              <li><strong>Olhar o rendimento todo dia:</strong> Investimentos de longo prazo oscilam. Olhe uma vez por mês, no máximo.</li>
              <li><strong>Não reinvestir os rendimentos:</strong> Resgatar os juros mata o efeito dos juros compostos.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Como abrir sua primeira conta de investimentos</h2>
            <ol className="list-decimal pl-6 text-zinc-700 leading-relaxed">
              <li>Escolha uma corretora de valores (Nubank, Rico, XP, Inter, BTG)</li>
              <li>Abra sua conta (geralmente online, em minutos)</li>
              <li>Transfira o valor que deseja investir via Pix</li>
              <li>Escolha o investimento adequado ao seu perfil</li>
              <li>Confirme a aplicação</li>
              <li>Configure aportes automáticos mensais</li>
            </ol>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Simulação: o poder de R$ 200 por mês</h2>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 my-4">
              <p className="text-zinc-700"><strong>Aporte:</strong> R$ 200/mês a 12% ao ano (juros compostos)</p>
              <ul className="text-zinc-700 mt-2 space-y-1">
                <li>• <strong>5 anos:</strong> R$ 16.353 (investiu R$ 12.000)</li>
                <li>• <strong>10 anos:</strong> R$ 46.006 (investiu R$ 24.000)</li>
                <li>• <strong>20 anos:</strong> R$ 199.735 (investiu R$ 48.000)</li>
                <li>• <strong>30 anos:</strong> R$ 699.671 (investiu R$ 72.000)</li>
              </ul>
              <p className="text-zinc-900 font-bold mt-3">R$ 200 por mês vira quase R$ 700.000 em 30 anos!</p>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Conclusão</h2>
            <p className="text-zinc-700 leading-relaxed">
              Investir com pouco dinheiro não só é possível como é essencial. O mercado financeiro brasileiro oferece opções acessíveis para todos os bolsos e perfis. O mais importante é dar o primeiro passo, ser consistente e ter paciência.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Lembre-se: grandes fortunas não foram construídas de uma vez. Foram construídas tijolo por tijolo, aporte por aporte, mês a mês. Comece hoje. Seu eu do futuro vai agradecer.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-200">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-zinc-700">
                <strong>Quer simular seus aportes?</strong> Use nossa{' '}
                <Link href="/" className="text-blue-700 hover:text-blue-800 font-medium">calculadora de juros compostos</Link>
                {' '}e veja quanto seu dinheiro pode render.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
