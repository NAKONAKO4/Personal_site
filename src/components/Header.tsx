import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <Link href="/" className="text-3xl font-serif">
        Physical Intelligence (π)
      </Link>
      <nav className="flex gap-4">
        <Link 
          href="/" 
          className="text-link decoration-2 hover:decoration-foreground hover:text-foreground"
        >
          Home
        </Link>
        <Link 
          href="/blog" 
          className="text-link hover:decoration-2 hover:decoration-foreground/50 hover:text-foreground/70"
        >
          Research
        </Link>
        <Link 
          href="/join-us" 
          className="text-link hover:decoration-2 hover:decoration-foreground/50 hover:text-foreground/70"
        >
          Join Us
        </Link>
      </nav>
    </header>
  );
} 