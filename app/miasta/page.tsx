import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const metadata = {
  title: "Specjalista Google Ads w Polsce | Miasta | SEMGOKU",
  description: "Obsługuję firmy z całej Polski: Warszawa, Kraków, Wrocław, Poznań, Gdańsk, Rzeszów i więcej. Google Ads, Meta Ads, Microsoft Advertising + feed optimization.",
  keywords: ["google ads polska", "ppc polska", "specjalista google ads", "kampanie reklamowe", "miasta polska"],
  alternates: {
    canonical: "https://semgoku.pl/miasta",
  },
};

const cities = [
  { name: "Rzeszów", slug: "rzeszow", region: "Podkarpackie", featured: true },
  { name: "Warszawa", slug: "warszawa", region: "Mazowieckie", featured: true },
  { name: "Kraków", slug: "krakow", region: "Małopolskie", featured: true },
  { name: "Wrocław", slug: "wroclaw", region: "Dolnośląskie", featured: false },
  { name: "Poznań", slug: "poznan", region: "Wielkopolskie", featured: false },
  { name: "Gdańsk", slug: "gdansk", region: "Pomorskie", featured: false },
  { name: "Łódź", slug: "lodz", region: "Łódzkie", featured: false },
  { name: "Katowice", slug: "katowice", region: "Śląskie", featured: false },
  { name: "Szczecin", slug: "szczecin", region: "Zachodniopomorskie", featured: false },
  { name: "Bydgoszcz", slug: "bydgoszcz", region: "Kujawsko-Pomorskie", featured: false },
  { name: "Lublin", slug: "lublin", region: "Lubelskie", featured: false },
  { name: "Białystok", slug: "bialystok", region: "Podlaskie", featured: false },
  { name: "Olsztyn", slug: "olsztyn", region: "Warmińsko-Mazurskie", featured: false },
  { name: "Kielce", slug: "kielce", region: "Świętokrzyskie", featured: false },
  { name: "Opole", slug: "opole", region: "Opolskie", featured: false },
  { name: "Zielona Góra", slug: "zielona-gora", region: "Lubuskie", featured: false },
];

export default function MiastaPage() {
  const featuredCities = cities.filter(c => c.featured);
  const otherCities = cities.filter(c => !c.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Header - simplified */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Image
              src="/semgoku logo poziomo białe.svg"
              alt="SEMGOKU - Specjalista Google Ads, PPC i Feed Optimization"
              width={180}
              height={45}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Obsługuję firmy z całej Polski
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Specjalista Google Ads <span className="text-primary">w Twoim mieście</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Freelancer SEM z 10-letnim doświadczeniem. Współpracuję z firmami e-commerce i B2B
              z całej Polski - zdalnie lub z dojazdem do klienta.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Główne miasta</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredCities.map((city) => (
              <Link key={city.slug} href={`/miasta/${city.slug}`}>
                <Card className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <MapPin className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-2xl">{city.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{city.region}</p>
                    <p className="text-sm text-primary">
                      Specjalista Google Ads {city.name} →
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Cities */}
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Wszystkie miasta wojewódzkie</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {otherCities.map((city) => (
              <Link key={city.slug} href={`/miasta/${city.slug}`}>
                <Card className="text-center hover:border-primary/30 transition-all h-full">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-1">{city.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{city.region}</p>
                    <span className="text-sm text-primary">Zobacz więcej →</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20">
            <CardContent className="pt-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Usługi PPC dla firm w Polsce</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ✓ <strong>Google Ads</strong> - kampanie Search, Shopping, Display, YouTube
                </p>
                <p>
                  ✓ <strong>Meta Ads</strong> - Facebook i Instagram Ads
                </p>
                <p>
                  ✓ <strong>Microsoft Advertising</strong> - Bing Ads
                </p>
                <p>
                  ✓ <strong>Feed Optimization</strong> - optymalizacja plików produktowych
                </p>
                <p>
                  ✓ <strong>Analiza konwersji</strong> - audyt landing pages i rekomendacje CRO
                </p>
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/#kontakt"
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Bezpłatna konsultacja
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 SEMGOKU. Specjalista Google Ads dla firm z całej Polski.
          </p>
        </div>
      </footer>
    </div>
  );
}
