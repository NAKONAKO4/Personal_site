import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const researchItems = [
  {
    title: "Real-Time Action Chunking with Large Models",
    date: "June 9, 2025",
    description: "A real-time system for large VLAs that maintains precision and speed in the face of high latency.",
    href: "/research/real-time-chunking",
    type: "research"
  },
  {
    title: "VLAs that Train Fast, Run Fast, and Generalize Better", 
    date: "May 28, 2025",
    description: "A method to train vision-language-action models that train quickly, maintain internet-scale knowledge, have high quality inference properties, and generalize well.",
    href: "/research/knowledge-insulation",
    type: "research"
  },
  {
    title: "π0.5: a VLA with Open-World Generalization",
    date: "April 22, 2025", 
    description: "Our latest generalist policy, π0.5, extends π0 and enables open-world generalization. Our new model can control a mobile manipulator to clean up an entirely new kitchen or bedroom.",
    href: "/blog/pi05",
    type: "blog",
    featured: true
  },
  {
    title: "Teaching Robots to Listen and Think Harder",
    date: "February 26, 2025",
    description: "A method for robots to think through complex tasks step by step, incorporating human-in-the-loop feedback.",
    href: "/research/hirobot", 
    type: "research"
  },
  {
    title: "Open Sourcing π0",
    date: "February 4, 2025",
    description: "We are releasing the weights and code for π0 as well as our new π0-FAST autoregressive model.",
    href: "/blog/openpi",
    type: "blog",
    secondary: true
  },
  {
    title: "FAST: Efficient Robot Action Tokenization",
    date: "January 16, 2025",
    description: "A new robot action tokenizer that allows us to train generalist policies 5x faster than previous models.",
    href: "/research/fast",
    type: "research"
  },
  {
    title: "π0: Our First Generalist Policy", 
    date: "October 31, 2024",
    description: "Our first generalist policy, π0, a prototype model that combines large-scale multi-task and multi-robot data collection with a new network architecture to enable the most capable and dexterous generalist robot policy to date.",
    href: "/blog/pi0",
    type: "blog",
    featured: true
  }
];

const teamMembers = [
  "Join us!"
];

function ResearchItem({ item }: { item: typeof researchItems[0] }) {
  if (item.featured) {
    return (
      <Link 
        href={item.href} 
        className="flex flex-col gap-2 px-3 py-2 ml-6 group cursor-pointer bg-white border border-black shadow-[3px_3px_0px_#000] hover:shadow-[5px_5px_0px_#000] transition-all"
      >
        <div className="flex items-baseline gap-2 justify-between relative">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <div className="absolute size-[7px] bg-gray-900 rounded-sm -left-[40px] top-[7px] outline outline-2 outline-[#FFFEF7]" />
            <div className="text-xs truncate font-semibold">
              {item.title.includes('π0.5') && (
                <>
                  <span className="font-serif">π</span>
                  <sub className="tracking-tighter">0.5</sub>
                  : a VLA with Open-World Generalization
                </>
              )}
              {item.title.includes('π0:') && (
                <>
                  <span className="font-serif">π</span>
                  <sub className="tracking-tighter">0</sub>
                  : Our First Generalist Policy
                </>
              )}
            </div>
          </div>
          <div className="text-xs text-[#A8A179] shrink-0 ml-2">
            {item.date}
          </div>
        </div>
        <p className="text-xs text-[#A8A179] no-underline">
          {item.description}
        </p>
      </Link>
    );
  }

  if (item.secondary) {
    return (
      <Link 
        href={item.href} 
        className="flex flex-col gap-2 px-3 py-2 ml-6 group cursor-pointer bg-white/60 border border-[#D4D3CB] hover:border-[#C0BDAD] hover:shadow-[3px_3px_0px_#C0BDAD] transition-all hover:bg-white"
      >
        <div className="flex items-baseline gap-2 justify-between relative">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <div className="absolute size-[7px] bg-gray-900 rounded-sm -left-[40px] top-[7px] outline outline-2 outline-[#FFFEF7]" />
            <div className="text-xs truncate font-semibold">
              Open Sourcing <span className="font-serif">π</span><sub className="tracking-tighter">0</sub>
            </div>
          </div>
          <div className="text-xs text-[#A8A179] shrink-0 ml-2">
            {item.date}
          </div>
        </div>
        <p className="text-xs text-[#A8A179] no-underline">
          {item.description}
        </p>
      </Link>
    );
  }

  return (
    <Link 
      href={item.href} 
      className="flex flex-col gap-1 px-3 py-2 ml-6 hover:bg-[#F5F4EF] group cursor-pointer"
    >
      <div className="flex items-baseline gap-1 justify-between text-xs w-full relative">
        <div className="absolute size-[7px] bg-gray-900 rounded-sm -left-[40px] top-[4px] outline outline-2 outline-[#FFFEF7]" />
        <div className="flex items-baseline gap-2 relative grow truncate">
          <div className="font-semibold truncate" title={item.title}>
            {item.title}
          </div>
        </div>
        <div className="text-xs text-[#A8A179] whitespace-nowrap shrink-0">
          {item.date}
        </div>
      </div>
      <div className="text-xs text-[#A8A179]">
        {item.description}
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <p className="mt-8 mb-8">
          Physical Intelligence is bringing general-purpose AI into the physical world. 
          We are a group of engineers, scientists, roboticists, and company builders 
          developing foundation models and learning algorithms to power the robots of 
          today and the physically-actuated devices of the future.
        </p>

        {/* Research Timeline */}
        <div className="pl-2">
          <div className="relative flex flex-col space-y-4 border-l border-gray-300 py-4 before:h-6 before:w-px before:bg-gradient-to-t before:from-transparent before:to-[#FFFEF7] before:absolute before:-left-px before:top-0 after:h-6 after:w-px after:bg-gradient-to-b after:from-transparent after:to-[#FFFEF7] after:absolute after:-left-px after:bottom-0">
            {researchItems.map((item, index) => (
              <ResearchItem key={index} item={item} />
            ))}
          </div>
        </div>

        {/* Team Section */}
        <h2 className="font-bold mt-8 mb-2">Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-1">
          {teamMembers.map((member, index) => (
            <div key={index}>{member}</div>
          ))}
        </div>

        <p className="my-4">
          If you are interested in joining, please{' '}
          <Link href="/join-us" className="text-link hover:decoration-2">
            get in touch
          </Link>
          .
        </p>

        {/* Investors Section */}
        <h2 className="font-bold mt-8 mb-2">Investors</h2>
        <p>
          We are grateful for{' '}
          <a 
            href="https://www.nytimes.com/2024/11/04/business/dealbook/physical-intelligence-robot-ai.html" 
            className="text-link hover:decoration-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            the support
          </a>{' '}
          of Bond, Jeff Bezos, Khosla Ventures, Lux Capital, OpenAI, Redpoint Ventures, Sequoia Capital, and Thrive Capital.
        </p>

        <p className="my-4">
          You can follow us on 𝕏/Twitter at{' '}
          <a 
            href="https://twitter.com/physical_int" 
            className="text-link hover:decoration-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            @physical_int
          </a>
        </p>
      </main>

      <Footer />
    </>
  );
}
