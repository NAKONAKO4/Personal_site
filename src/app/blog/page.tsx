import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    title: "π0.5: a VLA with Open-World Generalization",
    date: "April 22, 2025",
    description: "Our latest generalist policy, π0.5, extends π0 and enables open-world generalization. Our new model can control a mobile manipulator to clean up an entirely new kitchen or bedroom.",
    slug: "pi05"
  },
  {
    title: "Open Sourcing π0",
    date: "February 4, 2025",
    description: "We are releasing the weights and code for π0 as well as our new π0-FAST autoregressive model.",
    slug: "openpi"
  },
  {
    title: "π0: Our First Generalist Policy",
    date: "October 31, 2024",
    description: "Our first generalist policy, π0, a prototype model that combines large-scale multi-task and multi-robot data collection with a new network architecture to enable the most capable and dexterous generalist robot policy to date.",
    slug: "pi0"
  }
];

export default function BlogPage() {
  return (
    <>
      <Header />
      
      <main>
        <h1 className="text-4xl font-serif mb-8">Research & Blog</h1>
        
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8">
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-2xl font-semibold mb-2 group-hover:underline">
                  {post.title}
                </h2>
                <time className="text-muted-foreground text-sm mb-4 block">
                  {post.date}
                </time>
                <p className="text-gray-700">
                  {post.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>
      
      <Footer />
    </>
  );
} 