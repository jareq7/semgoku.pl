import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border px-4 py-4">
        <div className="container mx-auto max-w-6xl">
          <Link href="/">
            <Image
              src="/semgoku logo poziomo białe.svg"
              alt="SEMGOKU"
              width={160}
              height={40}
              className="h-9 w-auto"
            />
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center space-y-6 max-w-lg">
          <div className="text-8xl font-black text-primary/20">404</div>
          <h1 className="text-3xl font-bold">Tej strony nie ma</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Wygląda na to, że ta strona nie istnieje lub została przeniesiona.
            Może szukasz czegoś innego?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              href="/"
              className="px-6 py-2.5 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity font-medium"
            >
              Strona główna
            </Link>
            <Link
              href="/uslugi"
              className="px-6 py-2.5 rounded-lg border border-border text-foreground hover:bg-muted/60 transition-colors font-medium"
            >
              Usługi
            </Link>
            <Link
              href="/miasta"
              className="px-6 py-2.5 rounded-lg border border-border text-foreground hover:bg-muted/60 transition-colors font-medium"
            >
              Miasta
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-4 py-6">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 SEMGOKU.{" "}
            <a href="mailto:kontakt@semgoku.pl" className="hover:text-primary transition-colors">
              kontakt@semgoku.pl
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
