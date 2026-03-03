import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Award, TrendingUp, Target, ArrowLeft } from "lucide-react";
import PhoneButton from "./PhoneButton";
import CityPageTracker from "@/components/CityPageTracker";

export const metadata = {
  title: "Specjalista Google Ads Olsztyn | PPC dla firm z Warmii i Mazur | SEMGOKU",
  description: "Obsługuję firmy z Olsztyna! Google Ads, Meta Ads, Microsoft Advertising + optymalizacja feedów produktowych. Firmy e-commerce i B2B z Warmii i Mazur. 10 lat doświadczenia.",
  keywords: ["google ads olsztyn", "ppc olsztyn", "specjalista google ads olsztyn", "kampanie reklamowe olsztyn", "facebook ads olsztyn", "meta ads olsztyn", "sem olsztyn", "warmińsko-mazurskie"],
  alternates: { canonical: "https://semgoku.pl/miasta/olsztyn" },
  openGraph: { title: "Specjalista Google Ads Olsztyn | SEMGOKU", description: "Specjalista PPC obsługujący firmy z Olsztyna. Google Ads, Meta Ads + feed optimization dla firm z Warmii i Mazur.", url: "https://semgoku.pl/miasta/olsztyn", locale: "pl_PL", type: "website" },
};

export default function OlsztynPage() {
  return (
    <div className="min-h-screen bg-background">
      <CityPageTracker cityName="Olsztyn" />
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/"><Image src="/semgoku logo poziomo białe.svg" alt="SEMGOKU" width={180} height={45} className="h-10 w-auto" priority /></Link>
          <Link href="/miasta" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"><ArrowLeft className="w-4 h-4" />Wszystkie miasta</Link>
        </div>
      </header>
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"><MapPin className="w-4 h-4" />Olsztyn, Warmińsko-Mazurskie</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Specjalista Google Ads <span className="text-primary">Olsztyn</span></h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">Obsługuję firmy z Olsztyna i całej Warmii i Mazur. Google Ads, Meta Ads, Microsoft Advertising + optymalizacja feedów produktowych.</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20"><CardContent className="pt-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0"><Image src="/profile.jpeg" alt="Jarosław Rzepa - Specjalista Google Ads Olsztyn" width={150} height={150} className="rounded-full border-4 border-primary/30" /></div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Dlaczego warto wybrać freelancera?</h2>
                <p className="text-muted-foreground text-lg"><strong className="text-foreground">Obsługuję firmy z Olsztyna</strong> — stolicy Warmii i Mazur z rozwijającym się sektorem turystycznym, handlowym i usługowym. Pracuję zdalnie lub z dojazdem do klienta.</p>
                <p className="text-muted-foreground"><strong className="text-primary">10 lat doświadczenia</strong> w kampaniach PPC dla e-commerce, B2B i usług. Nie tylko Google Ads — optymalizuję też pliki produktowe i analizuję konwersję na stronie.</p>
              </div>
            </div>
          </CardContent></Card>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Kampanie PPC dla firm z Olsztyna</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20"><CardHeader><Target className="w-10 h-10 text-primary mb-2" /><CardTitle className="text-2xl">Google Ads dla e-commerce</CardTitle></CardHeader><CardContent className="space-y-3"><p className="text-muted-foreground">Kompleksowa obsługa Google Shopping, Search i Display dla sklepów internetowych z Olsztyna i okolic.</p><ul className="space-y-2 text-muted-foreground"><li>✓ Google Shopping + optymalizacja feedu</li><li>✓ Kampanie Search (wyszukiwanie)</li><li>✓ Remarketing Display</li><li>✓ YouTube Ads</li></ul></CardContent></Card>
            <Card className="border-primary/20"><CardHeader><TrendingUp className="w-10 h-10 text-primary mb-2" /><CardTitle className="text-2xl">Meta Ads & Microsoft</CardTitle></CardHeader><CardContent className="space-y-3"><p className="text-muted-foreground">Facebook, Instagram i Bing Ads dla firm usługowych i B2B z Warmii i Mazur.</p><ul className="space-y-2 text-muted-foreground"><li>✓ Meta Ads (Facebook + Instagram)</li><li>✓ Microsoft Advertising (Bing)</li><li>✓ Kampanie lead generation</li><li>✓ Remarketing multi-platform</li></ul></CardContent></Card>
            <Card className="border-primary/20"><CardHeader><Award className="w-10 h-10 text-primary mb-2" /><CardTitle className="text-2xl">Feed Optimization</CardTitle></CardHeader><CardContent className="space-y-3"><p className="text-muted-foreground">Moja unikalna specjalizacja — optymalizacja plików produktowych dla maksymalnej widoczności.</p><ul className="space-y-2 text-muted-foreground"><li>✓ Optymalizacja tytułów produktów</li><li>✓ Segmentacja zaawansowana</li><li>✓ Google Merchant Center</li><li>✓ Meta Product Catalog</li></ul></CardContent></Card>
            <Card className="border-primary/20"><CardHeader><Target className="w-10 h-10 text-primary mb-2" /><CardTitle className="text-2xl">Analiza & Audyt</CardTitle></CardHeader><CardContent className="space-y-3"><p className="text-muted-foreground">Kompleksowy audyt kampanii, feedu i landing pages z konkretnymi rekomendacjami.</p><ul className="space-y-2 text-muted-foreground"><li>✓ Audyt Google Ads, Meta, Microsoft</li><li>✓ Analiza plików produktowych</li><li>✓ Audyt landing pages (CRO)</li><li>✓ Raport z priorytetami</li></ul></CardContent></Card>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Branże dla firm z Olsztyna</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">Doświadczenie w kampaniach PPC dla różnych branż — od turystyki po e-commerce i usługi</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["E-commerce", "Turystyka", "Hotele", "Gastronomia", "Fashion", "Kosmetyki", "Meble", "Elektronika", "Sport", "Automotive", "Nieruchomości", "Medycyna", "Stomatologia", "Finanse", "Edukacja", "B2B"].map((industry) => (
              <span key={industry} className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-full border border-primary/20">{industry}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5"><CardContent className="pt-12 pb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Masz firmę w Olsztynie lub okolicach?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">Umów się na bezpłatną konsultację. Przeanalizujemy Twoją sytuację i sprawdzimy potencjał kampanii PPC dla Twojego biznesu.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"><Link href="/#kontakt">Bezpłatna konsultacja</Link></Button>
              <PhoneButton />
            </div>
            <p className="text-sm text-muted-foreground">Spotkanie online lub zdalnie</p>
          </CardContent></Card>
        </div>
      </section>
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2026 SEMGOKU. Specjalista Google Ads Olsztyn.</p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Strona główna</Link>
              <Link href="/miasta" className="hover:text-primary transition-colors">Inne miasta</Link>
              <a href="mailto:kontakt@semgoku.pl" className="hover:text-primary transition-colors">kontakt@semgoku.pl</a>
            </div>
          </div>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "ProfessionalService", "name": "SEMGOKU - Specjalista Google Ads Olsztyn", "description": "Specjalista PPC i Google Ads dla firm z Olsztyna i Warmii i Mazur", "areaServed": { "@type": "City", "name": "Olsztyn", "containedInPlace": { "@type": "State", "name": "Warmińsko-Mazurskie" } }, "provider": { "@type": "Person", "name": "Jarosław Rzepa", "jobTitle": "Specjalista PPC & Feed Optimization" }, "email": "kontakt@semgoku.pl", "telephone": "+48669809002", "url": "https://semgoku.pl/miasta/olsztyn" }) }} />
    </div>
  );
}
