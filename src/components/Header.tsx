import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <Link href="/" className="text-3xl font-serif">
        Physical Intelligence (π)
      </Link>
      <div className="flex gap-4">
        <Link 
          href="/" 
          className="underline underline-offset-8 hover:decoration-2 decoration-2 hover:decoration-[var(--foreground)] hover:text-[var(--foreground)]"
        >
          Home
        </Link>
        <Link 
          href="/blog" 
          className="underline underline-offset-8 hover:decoration-2 hover:decoration-[var(--foreground)]/50 hover:text-[var(--foreground)]/70"
        >
          Research
        </Link>
        <Link 
          href="/join-us" 
          className="underline underline-offset-8 hover:decoration-2 hover:decoration-[var(--foreground)]/50 hover:text-[var(--foreground)]/70"
        >
          Join Us
        </Link>
      </div>
    </header>
  );
} 