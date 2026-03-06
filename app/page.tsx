"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Zap, ShoppingCart, FileText, Award, Phone, Mail, Globe, X, Linkedin, MapPin, Calendar } from "lucide-react";
import { trackFormSubmit } from "@/lib/gtm";

export default function Home() {
  const [adSpend, setAdSpend] = useState([10000]);
  const [currentMultiplier, setCurrentMultiplier] = useState([3]);
  const [targetMultiplier, setTargetMultiplier] = useState([5]);
  const [showContactModal, setShowContactModal] = useState(false);

  const currentRevenue = adSpend[0] * currentMultiplier[0];
  const targetRevenue = adSpend[0] * targetMultiplier[0];
  const potentialGain = targetRevenue - currentRevenue;


  return (
    <div className="min-h-screen bg-background">
      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <Card className="w-full max-w-lg relative">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
            <CardHeader>
              <CardTitle>Skontaktuj się ze mną</CardTitle>
              <CardDescription>Wypełnij formularz, a odezwę się w ciągu 24h</CardDescription>
            </CardHeader>
            <CardContent>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-4"
                data-form-name="kontakt_modal"
                onSubmit={() => trackFormSubmit('kontakt', 'modal')}
              >
                <input type="hidden" name="access_key" value="fd7c1348-4032-41f7-bc4f-297a24fb6c9d" />
                <input type="hidden" name="subject" value="Nowy kontakt z SEMGOKU.pl" />
                <input type="hidden" name="from_name" value="Formularz SEMGOKU" />
                <input type="hidden" name="redirect" value="/dziekuje" />

                <div>
                  <label htmlFor="website" className="block text-sm font-medium mb-2">
                    Adres strony *
                  </label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    required
                    placeholder="twoja-strona.pl"
                    className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="twoj@email.pl"
                    className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Opisz w kilku słowach czego potrzebujesz..."
                    className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Wyślij wiadomość
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/semgoku logo poziomo białe.svg"
              alt="SEMGOKU - Specjalista Google Ads, PPC i Feed Optimization"
              width={200}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/uslugi" className="hover:text-foreground transition-colors">Usługi</Link>
            <a href="#kontakt" className="hover:text-foreground transition-colors">Kontakt</a>
          </nav>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            <a href="#kontakt">Kontakt</a>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main>
      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Zap className="w-4 h-4" />
              10 lat doświadczenia • Rzeszów & cała Polska
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto leading-tight">
              Kampanie PPC, które <span className="text-primary">faktycznie</span> sprzedają
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Google Ads + Meta Ads + Microsoft Advertising<br/>
              <strong className="text-foreground">+ optymalizacja feedu produktowego</strong> (to robi różnicę)
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
              >
                Bezpłatna konsultacja 30 min
              </a>
              <a
                href="https://cal.eu/semgoku/darmowa-konsultacja"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                Zarezerwuj rozmowę
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 justify-center pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                <span>10+ lat doświadczenia</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                <span>Dziesiątki projektów e-commerce</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <span>Specjalizacja: Feed Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-mnie" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20">
            <CardContent className="pt-12">
              {/* Profile Image */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"></div>
                  <Image
                    src="/profile.jpeg"
                    alt="Jarosław Rzepa - Specjalista Google Ads, PPC, Meta Ads i Feed Optimization"
                    width={180}
                    height={180}
                    className="relative rounded-full border-4 border-primary/30"
                    priority
                  />
                </div>
                <a
                  href="https://www.linkedin.com/in/jarosław-rzepa-19a599137/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

              {/* Text Content */}
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">Czym się różnię od innych</h2>
                <p className="text-muted-foreground text-lg">
                  Nie tylko kampanie - optymalizuję też feed produktowy i analizuję konwersję na stronie.
                </p>
              </div>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary">10 lat w PPC.</strong> Dziesiątki projektów dla agencji marketingowych.
                  Kampanie dla branż od e-commerce po non-profit.
                </p>
                <p>
                  Moje podejście opiera się na prostej zasadzie: <strong>kampania to tylko 20% sukcesu</strong>.
                  Pozostałe 80%? To feed produktowy, strona docelowa i holistyczna analiza przyczyn braku konwersji.
                </p>
                <p>
                  Podczas pracy w agencjach nie tylko obsługiwałem kampanie, ale też <strong>konsultowałem
                  innych specjalistów</strong> - zarówno z agencji jak i freelancerów - w temacie optymalizacji
                  plików produktowych i audytów kampanii.
                </p>
                <p className="text-primary font-semibold">
                  Nie owijam w bawełnę - jeśli coś nie działa, powiem to wprost.
                  Nie boję się odważnych decyzji. A gdy się na czymś nie znam - też mówię to szczerze.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Główne branże:</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  {["E-commerce", "Fashion & Odzież", "Kosmetyki & Beauty", "Meble & Wyposażenie",
                    "Elektronika & AGD", "Sport & Fitness", "Automotive", "Nieruchomości",
                    "Hotele & Turystyka", "Medycyna & Zdrowie", "B2B & SaaS", "Marketplace"].map((industry) => (
                    <span key={industry} className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                      {industry}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  + wiele innych branż e-commerce i usług
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Usługi</h2>
            <p className="text-muted-foreground text-lg">
              Kompleksowe wsparcie w kampaniach PPC dla e-commerce
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardHeader>
                <Zap className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Zarządzanie kampaniami PPC</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Kompleksowa obsługa kampanii Google Ads, Meta Ads i Microsoft Advertising
                  z optymalizacją plików produktowych i audytem landing pages.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Setup i optymalizacja kampanii multi-platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Optymalizacja feedów produktowych (Google Shopping, Meta Catalog)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Analiza i rekomendacje CRO dla landing pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Regularne reporty i optymalizacja</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Audyt kompleksowy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Dogłębna analiza kampanii, feedów produktowych i stron docelowych
                  z konkretnymi rekomendacjami poprawy wydajności.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Audyt kampanii Google Ads, Meta Ads, Microsoft Advertising</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Analiza plików produktowych i optymalizacja feedu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Audyt landing pages i analiza ścieżki konwersji</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Szczegółowy raport z priorytetami działań</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Inline CTA */}
          <div className="mt-16 text-center">
            <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5 max-w-3xl mx-auto">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-bold mb-3">Gotowy sprawdzić potencjał Twoich kampanii?</h3>
                <p className="text-muted-foreground mb-6">
                  Umów bezpłatną konsultację - bez zobowiązań, bez ukrytych kosztów
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                  >
                    Umów konsultację
                  </a>
                  <a
                    href="https://cal.eu/semgoku/darmowa-konsultacja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-lg border-2 border-primary/30 text-foreground hover:bg-primary/10 transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Zarezerwuj termin
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof - Real Results */}
      <section id="social-proof" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Prawdziwe wyniki dla klientów</h2>
            <p className="text-muted-foreground text-lg">
              Konkretne liczby z rzeczywistych projektów e-commerce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-primary/20 text-center">
              <CardContent className="pt-8 pb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Przychody</p>
                <div className="text-5xl font-bold text-primary mb-2">+170%</div>
                <p className="text-lg font-semibold mb-2">wzrost w 6 miesięcy</p>
                <p className="text-sm text-muted-foreground">
                  Sklep fashion — optymalizacja feedu + kampanie Google Shopping
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 text-center">
              <CardContent className="pt-8 pb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Koszt kliknięcia</p>
                <div className="text-5xl font-bold text-primary mb-2">−41%</div>
                <p className="text-lg font-semibold mb-2">niższy CPC</p>
                <p className="text-sm text-muted-foreground">
                  Optymalizacja tytułów produktów i segmentacja feedu
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 text-center">
              <CardContent className="pt-8 pb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">ROAS</p>
                <div className="text-5xl font-bold text-primary mb-2">680%</div>
                <p className="text-lg font-semibold mb-2">zwrot z wydatków</p>
                <p className="text-sm text-muted-foreground">
                  Wzrost z 320% do 680% w ciągu 4 miesięcy współpracy
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial-style quote */}
          <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
            <CardContent className="pt-8 pb-8">
              <div className="max-w-3xl mx-auto text-center">
                <div className="text-6xl text-primary mb-4">"</div>
                <p className="text-xl italic text-muted-foreground mb-6">
                  80% sukcesu kampanii PPC to nie same ustawienia reklam - to jakość feedu produktowego
                  i optymalizacja strony docelowej. Większość specjalistów tego nie rozumie.
                </p>
                <p className="text-sm text-muted-foreground">
                  — Jarosław Rzepa, 10 lat doświadczenia w PPC
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Feed Optimization Section */}
      <section id="feed-optimization" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <FileText className="w-4 h-4" />
              Unikalna specjalizacja
            </div>
            <h2 className="text-4xl font-bold mb-4">Optymalizacja plików produktowych</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Feed produktowy to fundament skutecznych kampanii Google Shopping i Meta Catalog.
              Bez prawidłowych danych produktowych, nawet najlepsza kampania nie przyniesie rezultatów.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Target className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Optymalizacja tytułów i opisów</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automatyczna i manualna optymalizacja tytułów produktów zgodnie z best practices
                  Google Shopping i Meta Catalog dla maksymalnej widoczności.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Segmentacja zaawansowana</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tworzenie niestandardowych etykiet, segmentacja według marży, sezonowości,
                  dostępności i performance metrics dla lepszej kontroli budżetu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Zaawansowane narzędzia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Wykorzystanie Sembot, Google Merchant Center, Feed Management Tools
                  i własnych skryptów dla automatyzacji i skalowania.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section id="pomoc" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-primary/20">
            <CardContent className="pt-12 pb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Nie masz klientów, ale nie wiesz czego potrzebuje Twoja firma?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-center max-w-2xl mx-auto">
                Umów się na rozmowę. Wspólnie przeanalizujemy Twoją sytuację:
              </p>

              <div className="space-y-4 mb-8 max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-lg">Zrozumiemy gdzie jest problem</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-lg">Wybierzemy odpowiedni kanał (Google Ads, Meta, Microsoft Advertising, inne)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-lg">Ustalimy metodę pracy dopasowaną do Twoich celów</span>
                </div>
              </div>

              <p className="text-center text-muted-foreground mb-8">
                Bez sprzedażowych ściem - powiem wprost co ma potencjał, a co nie.
              </p>

              <div className="flex justify-center">
                <Button
                  onClick={() => setShowContactModal(true)}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8"
                >
                  Umów bezpłatną rozmowę
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cities Section */}
      <section id="miasta" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Obsługuję firmy z całej Polski</h2>
            <p className="text-muted-foreground text-lg">
              Pracuję zdalnie z klientami z różnych miast - lub z możliwością spotkań osobistych
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link href="/miasta/rzeszow">
              <Card className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="pt-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">Rzeszów</h3>
                  <p className="text-sm text-muted-foreground mb-3">Podkarpackie</p>
                  <p className="text-sm text-primary">
                    Google Ads Rzeszów →
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/miasta/warszawa">
              <Card className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="pt-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">Warszawa</h3>
                  <p className="text-sm text-muted-foreground mb-3">Mazowieckie</p>
                  <p className="text-sm text-primary">
                    Google Ads Warszawa →
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/miasta/krakow">
              <Card className="border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="pt-6 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">Kraków</h3>
                  <p className="text-sm text-muted-foreground mb-3">Małopolskie</p>
                  <p className="text-sm text-primary">
                    Google Ads Kraków →
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              + Wrocław, Poznań, Gdańsk, Łódź, Katowice i wszystkie miasta w Polsce
            </p>
            <Link
              href="/miasta"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Zobacz wszystkie miasta →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema.org markup */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Najczęściej zadawane pytania</h2>
            <p className="text-muted-foreground text-lg">
              Odpowiedzi na podstawowe pytania o kampanie PPC i współpracę
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Czym różni się optymalizacja feedu od zwykłej kampanii Google Ads?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Większość specjalistów PPC skupia się tylko na ustawieniach kampanii - budżet, stawki, targetowanie.
                  Ja idę głębiej: optymalizuję pliki produktowe (feed), które są fundamentem kampanii Shopping.
                  Poprawa tytułów produktów, kategoryzacja, atrybuty - to często daje większy wzrost niż optymalizacja samej kampanii.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Jak wygląda współpraca? Czy wymagana jest umowa na rok?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Nie. Większość klientów zaczyna od audytu (jednorazowy projekt) lub umowy miesięcznej z możliwością
                  wypowiedzenia z 30-dniowym wyprzedzeniem. Wolę elastyczne podejście - jeśli nie widzisz rezultatów,
                  nie ma sensu przedłużać współpracy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Jaki budżet reklamowy jest potrzebny, żeby zacząć?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Minimum to około 3000-5000 zł/miesiąc dla e-commerce w konkurencyjnych branżach. Przy mniejszych
                  budżetach algorytmy Google nie mają szansy się nauczyć i wyniki będą słabe. Dla branż niszowych
                  można startować od 2000 zł.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Czy obsługujesz tylko sklepy internetowe?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Nie, pracuję też z firmami B2B i usługowymi. Jednak moja specjalizacja (feed optimization)
                  ma największy sens w e-commerce. Dla B2B robię kampanie Search, Display i lead generation
                  na LinkedIn/Meta.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl">Jak szybko mogę zobaczyć pierwsze rezultaty?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Audyt i podstawowe poprawki feedu widać od razu (czasem wzrost CTR o 50-100% w pierwszy tydzień).
                  Pełne efekty optymalizacji kampanii - 2-3 miesiące, bo algorytmy Google potrzebują czasu na naukę.
                  Osoby obiecujące cuda w tydzień to zwykle oszuści.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Schema.org Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Czym różni się optymalizacja feedu od zwykłej kampanii Google Ads?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Większość specjalistów PPC skupia się tylko na ustawieniach kampanii - budżet, stawki, targetowanie. Ja idę głębiej: optymalizuję pliki produktowe (feed), które są fundamentem kampanii Shopping. Poprawa tytułów produktów, kategoryzacja, atrybuty - to często daje większy wzrost niż optymalizacja samej kampanii."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak wygląda współpraca? Czy wymagana jest umowa na rok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nie. Większość klientów zaczyna od audytu (jednorazowy projekt) lub umowy miesięcznej z możliwością wypowiedzenia z 30-dniowym wyprzedzeniem. Wolę elastyczne podejście - jeśli nie widzisz rezultatów, nie ma sensu przedłużać współpracy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jaki budżet reklamowy jest potrzebny, żeby zacząć?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Minimum to około 3000-5000 zł/miesiąc dla e-commerce w konkurencyjnych branżach. Przy mniejszych budżetach algorytmy Google nie mają szansy się nauczyć i wyniki będą słabe. Dla branż niszowych można startować od 2000 zł."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy obsługujesz tylko sklepy internetowe?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nie, pracuję też z firmami B2B i usługowymi. Jednak moja specjalizacja (feed optimization) ma największy sens w e-commerce. Dla B2B robię kampanie Search, Display i lead generation na LinkedIn/Meta."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak szybko mogę zobaczyć pierwsze rezultaty?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Audyt i podstawowe poprawki feedu widać od razu (czasem wzrost CTR o 50-100% w pierwszy tydzień). Pełne efekty optymalizacji kampanii - 2-3 miesiące, bo algorytmy Google potrzebują czasu na naukę. Osoby obiecujące cuda w tydzień to zwykle oszuści."
                  }
                }
              ]
            })
          }}
        />
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 px-4 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Phone className="w-4 h-4" />
              Bezpłatna konsultacja 30 min
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Porozmawiajmy o Twoich kampaniach
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Odpiszę w ciągu 24h. Żadnych zobowiązań - po prostu sprawdzę, czy mogę Ci pomóc.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Wyślij wiadomość</CardTitle>
                <CardDescription>Wypełnij formularz, a odezwę się do Ciebie</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="space-y-4"
                  data-form-name="kontakt_inline"
                  onSubmit={() => trackFormSubmit('kontakt', 'sekcja_kontakt')}
                >
                  <input type="hidden" name="access_key" value="fd7c1348-4032-41f7-bc4f-297a24fb6c9d" />
                  <input type="hidden" name="redirect" value="https://semgoku.pl/dziekuje" />

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium mb-2">
                      Adres strony *
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      required
                      placeholder="twoja-strona.pl"
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="twoj@email.pl"
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Wiadomość *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Opisz w kilku słowach, czego potrzebujesz..."
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg">
                    Wyślij wiadomość
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Twoje dane są bezpieczne. Nie sprzedaję, nie udostępniam, nie spamują.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Quick Call */}
            <div className="space-y-6">
              <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/5">
                <CardContent className="pt-8 pb-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Umów się na rozmowę</h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                      <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Darmowa konsultacja</p>
                        <a
                          href="https://cal.eu/semgoku/darmowa-konsultacja"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl text-primary hover:underline font-bold"
                        >
                          Zarezerwuj termin →
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Wybierz dogodną godzinę w kalendarzu</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                      <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a href="mailto:kontakt@semgoku.pl" className="text-primary hover:underline break-all">
                          kontakt@semgoku.pl
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Odpowiadam w ciągu 24h</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                      <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Lokalizacja</p>
                        <p className="text-muted-foreground">Rzeszów & cała Polska</p>
                        <p className="text-sm text-muted-foreground mt-1">Spotkania online lub na miejscu</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-sm text-center text-muted-foreground mb-3">
                      <strong className="text-foreground">Ograniczona dostępność:</strong> Przyjmuję maksymalnie 2-3 nowych klientów miesięcznie
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/semgoku logo kwadrat białe.svg"
                alt="SEMGOKU - Freelancer SEM i Specjalista PPC"
                width={120}
                height={120}
                className="h-16 w-auto"
              />
            </div>
            <div className="text-center md:text-right space-y-3">
              <p className="text-muted-foreground text-sm">
                © 2026 SEMGOKU. Freelancer SEM & PPC Specialist.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end text-sm text-muted-foreground">
                <a href="mailto:kontakt@semgoku.pl" className="hover:text-primary transition-colors">
                  kontakt@semgoku.pl
                </a>
                <span className="hidden sm:inline">•</span>
                <a
                  href="https://www.linkedin.com/in/jarosław-rzepa-19a599137/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <div className="text-xs text-muted-foreground">
                <Link href="/miasta" className="hover:text-primary transition-colors">
                  Miasta
                </Link>
                {": "}
                <Link href="/miasta/rzeszow" className="hover:text-primary transition-colors">
                  Rzeszów
                </Link>
                {" | "}
                <Link href="/miasta/warszawa" className="hover:text-primary transition-colors">
                  Warszawa
                </Link>
                {" | "}
                <Link href="/miasta/krakow" className="hover:text-primary transition-colors">
                  Kraków
                </Link>
                {" | "}
                <Link href="/miasta" className="hover:text-primary transition-colors">
                  Zobacz wszystkie →
                </Link>
              </div>
              <div className="text-xs text-muted-foreground">
                <button
                  onClick={() => window.dispatchEvent(new Event("semgoku:open-consent"))}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Zarządzaj zgodami
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
