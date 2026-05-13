import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre nós | Calculadora de Juros Compostos',
  description: 'Conheça nossa missão de democratizar a educação financeira no Brasil com ferramentas gratuitas e confiáveis para simulação de investimentos.',
};

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <article className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Sobre a Calculadora de Juros Compostos</h1>
            <p className="mt-2 text-sm text-zinc-500">Ferramenta gratuita para planejamento financeiro</p>
          </header>
          <div className="mt-8 prose prose-blue max-w-none">
            <h2 className="text-2xl font-semibold text-zinc-900">Nossa missão</h2>
            <p className="text-zinc-700 leading-relaxed">
              Criamos esta calculadora para oferecer uma ferramenta gratuita, acessível e confiável que ajude os brasileiros a planejar seus investimentos e entender o poder dos juros compostos. Acreditamos que a educação financeira é a base para a construção de um futuro mais próspero para todos.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              No Brasil, onde a taxa de juros é historicamente alta e a cultura de investimentos ainda está em desenvolvimento, é fundamental que as pessoas tenham acesso a ferramentas que as ajudem a tomar decisões financeiras informadas.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">O que oferecemos</h2>
            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900">Simulador de Investimentos</h3>
                <p className="text-blue-700 leading-relaxed mt-2">
                  Calcule juros compostos com aportes mensais e visualize a evolução do seu patrimônio ao longo do tempo com gráficos e tabelas detalhadas.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900">Educação Financeira</h3>
                <p className="text-blue-700 leading-relaxed mt-2">
                  Artigos completos sobre investimentos, renda fixa, renda variável e estratégias para fazer seu dinheiro trabalhar para você.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900">Transparência</h3>
                <p className="text-blue-700 leading-relaxed mt-2">
                  Fórmulas abertas e explicadas. Mostramos exatamente como cada cálculo é feito para que você entenda e confie nos resultados.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900">Privacidade</h3>
                <p className="text-blue-700 leading-relaxed mt-2">
                  Todos os cálculos são feitos localmente no seu navegador. Seus dados financeiros nunca são enviados para nossos servidores.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Por que juros compostos?</h2>
            <p className="text-zinc-700 leading-relaxed">
              Os juros compostos são considerados por muitos a força mais poderosa do universo financeiro. Eles permitem que seu dinheiro cresça exponencialmente ao longo do tempo, transformando pequenos aportes regulares em grandes patrimônios. No entanto, muitos brasileiros ainda desconhecem esse conceito ou não sabem como aplicá-lo na prática.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Nossa ferramenta foi projetada para tornar esse conceito tangível e prático. Ao visualizar como seu dinheiro pode crescer ao longo de anos e décadas, esperamos motivar mais pessoas a começar a investir e planejar seu futuro financeiro.
            </p>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Nossos valores</h2>
            <ul className="list-disc pl-6 text-zinc-700 leading-relaxed">
              <li><strong>Educação:</strong> Acreditamos que conhecimento financeiro deve ser acessível a todos</li>
              <li><strong>Precisão:</strong> Nossos cálculos seguem fórmulas matemáticas comprovadas</li>
              <li><strong>Simplicidade:</strong> Interface intuitiva que qualquer pessoa pode usar</li>
              <li><strong>Gratuidade:</strong> Nossa ferramenta é e sempre será gratuita</li>
              <li><strong>Independência:</strong> Não recomendamos produtos financeiros específicos</li>
            </ul>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Aviso importante</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
              <p className="text-amber-900 font-semibold mb-2">Isenção de responsabilidade:</p>
              <p className="text-amber-700 leading-relaxed">
                Esta calculadora é uma ferramenta educacional e de simulação. Os resultados apresentados são projeções baseadas nos dados informados e não constituem garantia de rendimento futuro. Investimentos envolvem riscos e rentabilidade passada não é garantia de rentabilidade futura. Consulte sempre um assessor de investimentos qualificado antes de tomar decisões financeiras.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-zinc-900 mt-6">Financiamento</h2>
            <p className="text-zinc-700 leading-relaxed">
              Esta ferramenta é mantida através de publicidade, o que nos permite oferecê-la gratuitamente para todos os usuários. Nosso compromisso é manter a publicidade discreta e nunca comprometer a experiência do usuário ou a qualidade do conteúdo.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-200">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-zinc-700">
                <strong>Comece a simular agora!</strong> Use nossa{' '}
                <Link href="/" className="text-blue-700 hover:text-blue-800 font-medium">calculadora de juros compostos</Link>
                {' '}e planeje seu futuro financeiro.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
