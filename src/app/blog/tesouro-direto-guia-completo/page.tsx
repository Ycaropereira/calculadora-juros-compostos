import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tesouro Direto: guia completo para iniciantes | 2024',
  description: 'Tudo sobre Tesouro Selic, IPCA+ e Prefixado. Como investir, quanto rende, taxas, impostos e qual título escolher para cada objetivo.',
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
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Tesouro Direto: guia completo para iniciantes</h1>
            <p className="mt-2 text-sm text-zinc-500">Publicado em 12 de maio de 2024 • 7 minutos de leitura</p>
          </header>
          <div className="mt-8 prose prose-blue max-w-none">
            <h2 className="text-2xl font-semibold text-zinc-900">O que é o Tesouro Direto?</h2>
            <p className="text-zinc-700 leading-relaxed">
              O Tesouro Direto é um programa do governo federal brasileiro que permite que qualquer pessoa física compre títulos públicos pela internet. Em outras palavras, quando você investe no Tesouro Direto, está emprestando dinheiro ao governo, que promete devolver com juros em uma data futura. É considerado o investimento mais seguro do Brasil, pois é garantido pelo Tesouro Nacional.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Criado em 2002 pelo Tesouro Nacional em parceria com a B3 (Bolsa de Valores), o programa democratizou o acesso aos títulos públicos, que antes eram restritos a grandes investidores institucionais. Hoje, qualquer pessoa pode investir a partir de aproximadamente R$ 30.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Os três tipos de títulos</h2>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Tesouro Selic (LFT)</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
              <p className="text-blue-900"><strong>Rendimento:</strong> Acompanha a taxa Selic (atualmente 13,25% ao ano)</p>
              <p className="text-blue-900"><strong>Melhor para:</strong> Reserva de emergência, objetivos de curto prazo</p>
              <p className="text-blue-900"><strong>Risco de mercado:</strong> Praticamente zero</p>
              <p className="text-blue-900"><strong>Liquidez:</strong> Diária (resgate em D+1)</p>
            </div>
            <p className="text-zinc-700 leading-relaxed">
              O Tesouro Selic é o queridinho dos investidores conservadores. Ele rende próximo à taxa Selic e tem a grande vantagem de não sofrer marcação a mercado significativa, ou seja, você pode resgatar a qualquer momento sem risco de perder dinheiro. É a escolha ideal para sua reserva de emergência.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Tesouro IPCA+ (NTN-B)</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
              <p className="text-blue-900"><strong>Rendimento:</strong> IPCA (inflação) + taxa fixa (ex: IPCA + 6,5% ao ano)</p>
              <p className="text-blue-900"><strong>Melhor para:</strong> Aposentadoria, objetivos de longo prazo</p>
              <p className="text-blue-900"><strong>Risco de mercado:</strong> Alto se resgatado antes do vencimento</p>
              <p className="text-blue-900"><strong>Liquidez:</strong> Diária, mas pode ter prejuízo no resgate antecipado</p>
            </div>
            <p className="text-zinc-700 leading-relaxed">
              O Tesouro IPCA+ garante que seu dinheiro sempre vai render acima da inflação. Se a inflação for 5% e o título pagar IPCA + 6%, seu rendimento total será de 11% ao ano. É o melhor título para objetivos de longo prazo porque protege seu poder de compra. Porém, se você precisar resgatar antes do vencimento, pode ter prejuízo devido à marcação a mercado.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Tesouro Prefixado (LTN)</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
              <p className="text-blue-900"><strong>Rendimento:</strong> Taxa fixa definida na compra (ex: 12,5% ao ano)</p>
              <p className="text-blue-900"><strong>Melhor para:</strong> Quando as taxas estão altas e devem cair</p>
              <p className="text-blue-900"><strong>Risco de mercado:</strong> Alto se resgatado antes do vencimento</p>
              <p className="text-blue-900"><strong>Liquidez:</strong> Diária, mas pode ter prejuízo no resgate antecipado</p>
            </div>
            <p className="text-zinc-700 leading-relaxed">
              No Tesouro Prefixado, você sabe exatamente quanto vai receber no vencimento. Se comprar um título que paga 12,5% ao ano e mantiver até o vencimento, receberá exatamente essa taxa. É uma boa opção quando as taxas de juros estão altas e há expectativa de queda, pois o valor do título sobe quando a Selic cai.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Qual título escolher?</h2>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 my-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="text-left text-zinc-800">
                    <th className="border-b border-zinc-300 pb-2">Objetivo</th>
                    <th className="border-b border-zinc-300 pb-2">Prazo</th>
                    <th className="border-b border-zinc-300 pb-2">Título indicado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border-b border-zinc-200 py-2">Reserva de emergência</td><td className="border-b border-zinc-200 py-2">Imediato</td><td className="border-b border-zinc-200 py-2 font-semibold text-blue-700">Tesouro Selic</td></tr>
                  <tr><td className="border-b border-zinc-200 py-2">Viagem em 2 anos</td><td className="border-b border-zinc-200 py-2">Curto</td><td className="border-b border-zinc-200 py-2 font-semibold text-blue-700">Tesouro Selic</td></tr>
                  <tr><td className="border-b border-zinc-200 py-2">Troca de carro em 3-5 anos</td><td className="border-b border-zinc-200 py-2">Médio</td><td className="border-b border-zinc-200 py-2 font-semibold text-blue-700">Tesouro IPCA+ ou Prefixado</td></tr>
                  <tr><td className="border-b border-zinc-200 py-2">Compra de imóvel</td><td className="border-b border-zinc-200 py-2">Longo</td><td className="border-b border-zinc-200 py-2 font-semibold text-blue-700">Tesouro IPCA+</td></tr>
                  <tr><td className="py-2">Aposentadoria</td><td className="py-2">Muito longo</td><td className="py-2 font-semibold text-blue-700">Tesouro IPCA+ (mais longo disponível)</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Taxas e impostos</h2>
            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Taxa de custódia da B3</h3>
            <p className="text-zinc-700 leading-relaxed">
              A B3 cobra 0,20% ao ano sobre o valor investido. Para investimentos no Tesouro Selic de até R$ 10.000, essa taxa é isenta. A taxa é descontada automaticamente, você não precisa se preocupar com ela.
            </p>
            <h3 className="text-xl font-semibold text-zinc-900 mt-4">Imposto de Renda</h3>
            <p className="text-zinc-700 leading-relaxed">O IR é cobrado de forma regressiva sobre os rendimentos:</p>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Até 180 dias:</strong> 22,5%</li>
              <li><strong>181 a 360 dias:</strong> 20%</li>
              <li><strong>361 a 720 dias:</strong> 17,5%</li>
              <li><strong>Acima de 720 dias:</strong> 15%</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed">
              Quanto mais tempo você mantiver o investimento, menos imposto paga. Mais um motivo para investir pensando no longo prazo.
            </p>

            <h3 className="text-xl font-semibold text-zinc-900 mt-4">IOF</h3>
            <p className="text-zinc-700 leading-relaxed">
              O IOF é cobrado apenas se você resgatar nos primeiros 30 dias. A alíquota começa em 96% no dia 1 e vai diminuindo até 0% no dia 30. Evite resgatar nos primeiros 30 dias.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Como investir: passo a passo</h2>
            <ol className="list-decimal pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Abra uma conta em uma corretora</strong> habilitada (Nubank, XP, Rico, Inter, BTG)</li>
              <li><strong>Transfira o dinheiro</strong> para sua conta na corretora via Pix ou TED</li>
              <li><strong>Acesse a área de Tesouro Direto</strong> na plataforma da corretora</li>
              <li><strong>Escolha o título</strong> adequado ao seu objetivo</li>
              <li><strong>Defina o valor</strong> (mínimo de aproximadamente R$ 30)</li>
              <li><strong>Confirme a compra</strong> e pronto! Seu dinheiro já está investido</li>
            </ol>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Dicas importantes</h2>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Não resgate Tesouro IPCA+ ou Prefixado antes do vencimento</strong> sem necessidade. A marcação a mercado pode gerar prejuízo.</li>
              <li><strong>Agende aportes mensais automáticos.</strong> A maioria das corretoras permite isso.</li>
              <li><strong>Diversifique entre títulos.</strong> Não coloque tudo em um único tipo.</li>
              <li><strong>Reinvista os cupons semestrais</strong> (no caso do IPCA+ com juros semestrais) para maximizar os juros compostos.</li>
              <li><strong>Acompanhe as taxas.</strong> Quando a taxa sobe, pode ser boa hora de comprar IPCA+.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Conclusão</h2>
            <p className="text-zinc-700 leading-relaxed">
              O Tesouro Direto é o investimento ideal para quem está começando. É seguro, acessível, transparente e oferece opções para todos os objetivos. Comece pela reserva de emergência no Tesouro Selic e, conforme for ganhando confiança e conhecimento, diversifique para outros títulos.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Lembre-se: o melhor investimento é aquele que você faz regularmente e mantém por tempo suficiente para os juros compostos fazerem seu trabalho. Comece hoje, mesmo que com pouco.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-200">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-zinc-700">
                <strong>Simule seu investimento no Tesouro!</strong> Use nossa{' '}
                <Link href="/" className="text-blue-700 hover:text-blue-800 font-medium">calculadora de juros compostos</Link>
                {' '}para projetar seus rendimentos.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
