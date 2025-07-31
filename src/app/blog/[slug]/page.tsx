import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 博客文章数据
const blogPosts = {
  'pi0': {
    title: 'π0: Our First Generalist Policy',
    date: 'October 31, 2024',
    authors: 'Kevin Black, Noah Brown, Danny Driess, Michael Equi, Adnan Esmail, Chelsea Finn, Nick Fusai, Lachy Groom, Karol Hausman, Brian Ichter, Szymon Jakubczak, Tim Jones, Kay Ke, Sergey Levine, Adrian Li-Bell, Mohith Mothukuri, Suraj Nair, Karl Pertsch, Lucy Shi, James Tanner, Quan Vuong, Anna Walling, Haohuan Wang, Ury Zhilinsky',
    content: `
We are living through an AI revolution: the past decade witnessed practically useful AI assistants, AI systems that can generate photorealistic images and videos, and even models that can predict the structure of proteins. But in spite of all these advances, human intelligence dramatically outpaces AI when it comes to the physical world.

To paraphrase Moravec's paradox, winning a game of chess or discovering a new drug represent "easy" problems for AI to solve, but folding a shirt or cleaning up a table requires solving some of the most difficult engineering problems ever conceived. To build AI systems that have the kind of physically situated versatility that people possess, we need a new approach — we need to make AI systems embodied so that they can acquire physical intelligence.

## The promise of generalist robot policies

Today's robots are narrow specialists. Industrial robots are programmed for repetitive motions in choreographed settings, repeatedly making the same weld in the same spot on an assembly line or dropping the same item into the same box. Even such simple behaviors require extensive manual engineering, and more complex behaviors in messy real-world environments such as homes are simply infeasible. 

AI could change that, allowing robots to learn and follow user instructions, so that programming a new behavior is as simple as telling the robot what you want done, and the robot can itself figure out how to adapt its behavior to its environment. But this requires data. Language models and other foundation models mine data from the web, utilizing a significant fraction of all available documents. There is no such treasure trove of robot data, so to enable a robot to learn a new skill, large amounts of data need to be collected with that particular robot and for that particular application.

If we could train a single generalist robot policy that can perform a wide range of different skills and control a wide range of different robots, we would overcome this challenge: such a model would need only a little bit of data from each robot and each application. Just as a person can learn a new skill quickly by drawing on a lifetime's worth of experience, such a generalist robot policy could be specialized to new tasks with only modest amounts of data.
    `
  },
  'pi05': {
    title: 'π0.5: a VLA with Open-World Generalization',
    date: 'April 22, 2025',
    authors: 'Physical Intelligence Team',
    content: `
Our latest generalist policy, π0.5, extends π0 and enables open-world generalization. Our new model can control a mobile manipulator to clean up an entirely new kitchen or bedroom.

## Key Improvements

π0.5 builds upon our previous work with several key improvements:

- **Enhanced Generalization**: The model can now operate in completely new environments without additional training
- **Mobile Manipulation**: Support for mobile robots that can navigate and manipulate objects
- **Improved Dexterity**: Better handling of complex manipulation tasks

## Results

Our experiments show that π0.5 can successfully complete household tasks in environments it has never seen before, demonstrating true open-world generalization capabilities.
    `
  },
  'openpi': {
    title: 'Open Sourcing π0',
    date: 'February 4, 2025',
    authors: 'Physical Intelligence Team',
    content: `
We are releasing the weights and code for π0 as well as our new π0-FAST autoregressive model.

## What's Being Released

- Model weights for π0
- Training code and data preprocessing pipelines
- Evaluation benchmarks and metrics
- Documentation and tutorials

## Getting Started

The code is available on our GitHub repository. Follow the installation guide to get started with training and evaluation.

## Community

We're excited to see what the research community builds with these tools. Join our Discord server for discussions and support.
    `
  }
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }
  
  return (
    <>
      <Header />
      
      <main>
        <article className="prose max-w-none">
          <h1 className="text-4xl font-serif mb-4">{post.title}</h1>
          
          <div className="text-sm text-muted-foreground mb-8">
            <p>Published: {post.date}</p>
            <p>Authors: {post.authors}</p>
          </div>
          
          <div className="prose max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">{paragraph.slice(3)}</h2>;
              }
              if (paragraph.startsWith('- ')) {
                return <p key={index} className="ml-4">{paragraph}</p>;
              }
              return <p key={index} className="mb-4">{paragraph}</p>;
            })}
          </div>
        </article>
      </main>
      
      <Footer />
    </>
  );
}

// 生成静态参数
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
} 