import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Calculadora de Juros Compostos | Artigos sobre investimentos',
  description: 'Aprenda tudo sobre juros compostos, investimentos, renda fixa, renda variável e como fazer seu dinheiro trabalhar para você.',
};

const posts = [
  {
    slug: 'o-que-sao-juros-compostos',
    title: 'O que são juros compostos e por que são tão poderosos?',
    excerpt: 'Entenda como funcionam os juros sobre juros e por que Albert Einstein os chamou de a oitava maravilha do mundo.',
    date: '2024-05-12',
    readTime: '6 min',
  },
  {
    slug: 'como-investir-com-pouco-dinheiro',
    title: 'Como investir com pouco dinheiro em 2024',
    excerpt: 'Guia prático para começar a investir com R$ 50 ou menos e construir patrimônio ao longo do tempo.',
    date: '2024-05-12',
    readTime: '5 min',
  },
  {
    slug: 'tesouro-direto-guia-completo',
    title: 'Tesouro Direto: guia completo para iniciantes',
    excerpt: 'Tudo sobre Tesouro Selic, IPCA+ e Prefixado. Qual escolher, como investir e quanto rende.',
    date: '2024-05-12',
    readTime: '7 min',
  },
  {
    slug: 'diferenca-juros-simples-compostos',
    title: 'Diferença entre juros simples e compostos',
    excerpt: 'Compare os dois tipos de juros com exemplos práticos e entenda por que os compostos fazem tanta diferença.',
    date: '2024-05-12',
    readTime: '4 min',
  },
  {
    slug: 'como-calcular-rentabilidade-investimento',
    title: 'Como calcular a rentabilidade real de um investimento',
    excerpt: 'Aprenda a descontar inflação, taxas e impostos para saber quanto seu investimento realmente rende.',
    date: '2024-05-12',
    readTime: '5 min',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Blog sobre Investimentos
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-zinc-700">
            Guias completos, dicas práticas e artigos especializados sobre juros compostos, investimentos e educação financeira.
          </p>
        </header>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-zinc-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-700 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-zinc-700 leading-relaxed">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors">
                Ler artigo completo →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
