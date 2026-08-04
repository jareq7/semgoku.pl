import type { Metadata } from "next";
import { WaveBackground } from "@/components/ui/wave-background";
import { Zap, Award, Target, FileText } from "lucide-react";

// Piaskownica — wariant B (stonowany). Nie indeksować.
export const metadata: Metadata = {
  title: "Podgląd: hero stonowany",
  robots: { index: false, follow: false },
};

export default function PodgladSubtelnyPage() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-background">
      {/* tło falowe ZA treścią — mocniej widoczne (medium) */}
      <WaveBackground intensity="medium" />
      {/* lekkie wygaszenie, żeby tekst był czytelny, ale fale wciąż widać */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/45 via-background/10 to-background/70" />

      <div className="relative z-10 container mx-auto max-w-6xl px-4 pt-32 pb-20">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            10 lat doświadczenia • Rzeszów &amp; cała Polska
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto leading-tight">
            Kampanie PPC, które <span className="text-primary">faktycznie</span> sprzedają
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Google Ads + Meta Ads + Microsoft Advertising
            <br />
            <strong className="text-foreground">+ optymalizacja feedu produktowego</strong> (to robi różnicę)
          </p>

          <div className="flex flex-col items-center gap-3 pt-6">
            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105"
            >
              Napisz do mnie — oddzwonię
            </a>
            <p className="text-sm text-muted-foreground">Odpowiadam w ciągu 24h</p>
          </div>

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
  );
}
