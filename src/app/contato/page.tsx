import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contato | Calculadora de Juros Compostos',
  description: 'Entre em contato conosco para dúvidas, sugestões ou feedback sobre nossa calculadora de juros compostos.',
};

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <article className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Entre em contato</h1>
            <p className="mt-2 text-sm text-zinc-500">Estamos aqui para ajudar e ouvir suas sugestões</p>
          </header>
          <div className="mt-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold text-zinc-900">Como podemos ajudar?</h2>
                <div className="mt-6 space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-blue-900">Dúvidas sobre a calculadora</h3>
                    <p className="text-blue-700 leading-relaxed mt-2">Problemas técnicos, dúvidas sobre fórmulas ou interpretação de resultados.</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-blue-900">Sugestões de melhoria</h3>
                    <p className="text-blue-700 leading-relaxed mt-2">Ideias para novas funcionalidades, novos cálculos ou melhorias na interface.</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-blue-900">Correções de conteúdo</h3>
                    <p className="text-blue-700 leading-relaxed mt-2">Encontrou algum erro nos artigos ou nos cálculos? Nos avise!</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-blue-900">Parcerias</h3>
                    <p className="text-blue-700 leading-relaxed mt-2">Propostas de parceria ou colaboração em educação financeira.</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-zinc-900">Informações de contato</h2>
                <div className="mt-6">
                  <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-zinc-900">E-mail principal</h3>
                    <p className="text-zinc-700 mt-2">
                      <a className="font-semibold text-blue-700 hover:text-blue-800 transition-colors" href="mailto:suportcalculo@gmail.com">
                        suportcalculo@gmail.com
                      </a>
                    </p>
                    <p className="text-zinc-600 text-sm mt-1">Resposta em até 48 horas úteis</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-zinc-900">Antes de entrar em contato</h3>
                  <p className="text-zinc-700 leading-relaxed mt-2">Verifique se sua dúvida já foi respondida em nosso blog:</p>
                  <div className="mt-3">
                    <Link href="/blog" className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium transition-colors">
                      Ver artigos do blog →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-zinc-200 pt-8">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <p className="text-amber-900 font-semibold mb-2">Aviso importante:</p>
                <ul className="text-amber-700 leading-relaxed space-y-2">
                  <li>• Não oferecemos consultoria ou assessoria financeira</li>
                  <li>• Não recomendamos investimentos específicos</li>
                  <li>• Para decisões de investimento, consulte um assessor qualificado</li>
                  <li>• Os cálculos são simulações e não garantem rendimentos futuros</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
