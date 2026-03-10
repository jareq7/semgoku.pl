import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Mail } from "lucide-react";
import ConversionTracker from "./ConversionTracker";

export const metadata = {
  title: "Dziękuję za wiadomość - SEMGOKU",
  description: "Dostałem Twoją wiadomość. Odezwę się najszybciej jak mogę.",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ConversionTracker />
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Image
              src="/semgoku logo poziomo białe.svg"
              alt="SEMGOKU Logo"
              width={200}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-primary/20">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-primary" />
                </div>
              </div>

              <h1 className="text-4xl font-bold mb-4">
                Dzięki za wiadomość!
              </h1>

              <div className="space-y-4 text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                <p>
                  Dostałem ją i przeczytam najszybciej jak mogę.
                </p>
                <p className="text-foreground font-medium">
                  Nie zostawiam ludzi bez odpowiedzi.
                </p>
                <p className="pt-4">
                  Nie możesz czekać? <a href="https://cal.eu/semgoku/darmowa-konsultacja" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Zarezerwuj termin rozmowy →</a>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <Link href="/">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Wróć na stronę główną
                  </Link>
                </Button>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Potrzebujesz szybszego kontaktu?
                </p>
                <a
                  href="mailto:kontakt@semgoku.pl"
                  className="text-primary hover:underline font-medium"
                >
                  kontakt@semgoku.pl
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 SEMGOKU. Freelancer SEM & PPC Specialist.
          </p>
        </div>
      </footer>
    </div>
  );
}
