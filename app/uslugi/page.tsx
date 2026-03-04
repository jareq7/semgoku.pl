import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Target, TrendingUp, Award, FileText, CheckCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usługi PPC i Feed Optimization | Google Ads, Meta Ads | SEMGOKU",
  description: "Kompleksowe usługi SEM: zarządzanie kampaniami Google Ads, Meta Ads i Microsoft Advertising, optymalizacja feedów produktowych, audyt PPC i analiza konwersji. Freelancer z 10-letnim doświadczeniem.",
  keywords: [
    "zarządzanie kampaniami google ads",
    "audyt google ads",
    "optymalizacja feedów produktowych",
    "specjalista ppc freelancer",
    "google shopping optymalizacja",
    "meta ads zarządzanie",
    "audyt ppc",
    "analiza konwersji",
    "feed optimization",
    "google merchant center",
  ],
  alternates: { canonical: "https://semgoku.pl/uslugi" },
  openGraph: {
    title: "Usługi PPC i Feed Optimization | SEMGOKU",
    description: "Zarządzanie Google Ads, Meta Ads, optymalizacja feedów i audyt kampanii. Freelancer SEM z 10-letnim doświadczeniem.",
    url: "https://semgoku.pl/uslugi",
    locale: "pl_PL",
    type: "website",
  },
};

const services = [
  {
    id: "zarzadzanie-kampaniami",
    icon: Target,
    title: "Zarządzanie kampaniami PPC",
    tagline: "Google Ads · Meta Ads · Microsoft Advertising",
    description:
      "Kompleksowa obsługa kampanii reklamowych od konfiguracji po bieżącą optymalizację. Pracuję na Twoim koncie, nie zakładam nowego — masz pełen wgląd i własność danych.",
    includes: [
      "Audyt istniejących kampanii lub setup od zera",
      "Google Search, Shopping, Display, YouTube",
      "Meta Ads (Facebook + Instagram)",
      "Microsoft Advertising (Bing)",
      "Bieżąca optymalizacja stawek, słów kluczowych i grup odbiorców",
      "Miesięczny raport z wynikami i rekomendacjami",
    ],
    forWhom: "Dla e-commerce i firm B2B które chcą stałej, profesjonalnej obsługi kampanii.",
  },
  {
    id: "feed-optimization",
    icon: Award,
    title: "Optymalizacja feedów produktowych",
    tagline: "Google Shopping · Meta Catalog · Merchant Center",
    description:
      "Moja unikalna specjalizacja. Plik produktowy to fundament kampanii Shopping — jeśli jest źle skonfigurowany, żadna optymalizacja kampanii tego nie naprawi. Optymalizuję strukturę, tytuły, opisy i segmentację.",
    includes: [
      "Audyt aktualnego feedu i identyfikacja problemów",
      "Optymalizacja tytułów i opisów produktów pod frazy zakupowe",
      "Zaawansowana segmentacja (custom labels, kategorie)",
      "Konfiguracja Google Merchant Center",
      "Integracja z Sembot",
      "Reguły transformacji danych bez ingerencji w sklep",
    ],
    forWhom: "Dla sklepów e-commerce z katalogiem produktów w Google Shopping lub Meta Catalog.",
  },
  {
    id: "audyt-ppc",
    icon: FileText,
    title: "Audyt kampanii PPC",
    tagline: "Jednorazowa usługa · Konkretne rekomendacje",
    description:
      "Kompleksowa analiza Twoich kampanii, feedu i landing pages. Dostajesz raport z priorytetowaną listą problemów i konkretnym planem naprawy — bez ogólników.",
    includes: [
      "Audyt struktury kampanii i grup reklam",
      "Analiza słów kluczowych i dopasowań",
      "Ocena pliku produktowego (dla e-commerce)",
      "Analiza landing pages pod kątem CRO",
      "Weryfikacja śledzenia konwersji i tagów",
      "Raport z priorytetami i szacowanym wpływem",
    ],
    forWhom: "Dla firm które chcą wiedzieć co nie działa i dlaczego — zanim zainwestują więcej.",
  },
  {
    id: "analiza-konwersji",
    icon: TrendingUp,
    title: "Analiza konwersji i tracking",
    tagline: "GA4 · GTM · Consent Mode v2",
    description:
      "Jeśli nie mierzysz poprawnie, optymalizujesz w ciemno. Wdrażam śledzenie konwersji, konfigurację GA4 przez GTM i Consent Mode v2 zgodny z RODO — tak jak ta strona.",
    includes: [
      "Konfiguracja Google Analytics 4",
      "Wdrożenie tagów przez Google Tag Manager",
      "Śledzenie konwersji (zakupy, leady, telefony)",
      "Consent Mode v2 (RODO compliance)",
      "Analiza ścieżek konwersji i drop-off",
      "Raport z rekomendacjami CRO",
    ],
    forWhom: "Dla firm które chcą mierzyć co faktycznie przynosi wyniki — nie tylko kliknięcia.",
  },
];

export default function UslugiPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/semgoku logo poziomo białe.svg"
              alt="SEMGOKU"
              width={180}
              height={45}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/#o-mnie" className="text-sm text-muted-foreground hover:text-primary transition-colors hidden sm:block">
              O mnie
            </Link>
            <Link href="/uslugi" className="text-sm text-primary font-medium transition-colors hidden sm:block">
              Usługi
            </Link>
            <Link
              href="/#kontakt"
              className="text-sm px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity font-medium"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Target className="w-4 h-4" />
            Freelancer SEM · 10 lat doświadczenia
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Usługi <span className="text-primary">PPC</span> i Feed Optimization
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Zarządzanie kampaniami Google Ads, Meta Ads i Microsoft Advertising,
            optymalizacja feedów produktowych oraz audyty PPC dla e-commerce i B2B.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {["Google Ads", "Meta Ads", "Microsoft Advertising", "Feed Optimization", "GA4 & GTM"].map((tag) => (
              <span key={tag} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl space-y-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} id={service.id} className="border-border hover:border-primary/30 transition-colors">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                          {service.tagline}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-2">
                    {service.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-sm text-muted-foreground italic">{service.forWhom}</p>
                    <Link
                      href="/#kontakt"
                      className="text-sm text-primary hover:underline flex items-center gap-1 flex-shrink-0"
                    >
                      Zapytaj o wycenę <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* How I work */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">Jak wygląda współpraca</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Bezpłatna konsultacja", desc: "Omawiamy Twój biznes, cele i aktualne działania. Bez zobowiązań." },
              { step: "02", title: "Audyt lub onboarding", desc: "Sprawdzam co masz, identyfikuję problemy i ustalamy plan działania." },
              { step: "03", title: "Wdrożenie", desc: "Konfiguruję lub optymalizuję kampanie, feed i tracking wg ustalonego planu." },
              { step: "04", title: "Raport i iteracja", desc: "Co miesiąc raport z wynikami i lista kolejnych działań." },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-3">
                <div className="text-4xl font-black text-primary/30">{item.step}</div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">Wyniki które osiągam</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { value: "+170%", label: "wzrost przychodów", context: "e-commerce fashion, 6 miesięcy" },
              { value: "6.8x", label: "ROAS", context: "Google Shopping po optymalizacji feedu" },
              { value: "-41%", label: "redukcja CPC", context: "restrukturyzacja kampanii Search" },
            ].map((stat) => (
              <Card key={stat.label} className="text-center border-primary/20">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.context}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">Najczęstsze pytania</h2>
          <div className="space-y-4">
            {[
              {
                q: "Czy pracujesz zdalnie czy wymagasz spotkań?",
                a: "Pracuję zdalnie z klientami z całej Polski. Spotkania online (Google Meet) są standardem. Jeśli jesteś z Rzeszowa lub okolic, mogę umówić się też osobiście.",
              },
              {
                q: "Jak wygląda dostęp do konta Google Ads?",
                a: "Dostaję dostęp do Twojego konta — nie tworzę nowego. Masz pełną kontrolę, własność konta i historię kampanii. Nigdy nie pracuję na koncie do którego klient nie ma dostępu.",
              },
              {
                q: "Czy zajmujesz się kampaniami od zera czy tylko optymalizacją?",
                a: "Robię oba. Setup od zera lub przejęcie istniejących kampanii. Zaczyna się zawsze od audytu — żeby wiedzieć od czego startujemy.",
              },
              {
                q: "Jaki minimalny budżet reklamowy?",
                a: "Nie ma twardego minimum, ale poniżej 3 000 zł/mies. budżetu reklamowego trudno uzyskać statystycznie istotne wyniki w krótkim czasie. Chętnie porozmawiam o Twojej sytuacji.",
              },
              {
                q: "Jak szybko zobaczę wyniki?",
                a: "Pierwsze dane już po 2-4 tygodniach. Optymalizacja to proces — stabilne wyniki zazwyczaj po 2-3 miesiącach. Nie obiecuję cudownych wyników po tygodniu.",
              },
            ].map((item) => (
              <Card key={item.q} className="border-border">
                <CardContent className="pt-6 pb-5">
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Gotowy na lepsze wyniki?</h2>
          <p className="text-muted-foreground text-lg">
            Zacznijmy od bezpłatnej konsultacji — opowiedz mi o swoim biznesie,
            a powiem Ci co można poprawić.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#kontakt"
              className="px-8 py-3 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity font-semibold text-lg"
            >
              Bezpłatna konsultacja
            </Link>
            <a
              href="https://cal.eu/semgoku/darmowa-konsultacja"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border border-border text-foreground hover:bg-muted/60 transition-colors font-medium text-lg"
            >
              Zarezerwuj termin
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2026 SEMGOKU. Specjalista PPC & Feed Optimization.</p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Strona główna</Link>
              <Link href="/miasta" className="hover:text-primary transition-colors">Miasta</Link>
              <a href="mailto:kontakt@semgoku.pl" className="hover:text-primary transition-colors">kontakt@semgoku.pl</a>
            </div>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Usługi PPC i Feed Optimization — SEMGOKU",
            "itemListElement": services.map((s, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "item": {
                "@type": "Service",
                "name": s.title,
                "description": s.description,
                "provider": {
                  "@type": "Person",
                  "name": "Jarosław Rzepa",
                  "url": "https://semgoku.pl",
                },
                "url": `https://semgoku.pl/uslugi#${s.id}`,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
