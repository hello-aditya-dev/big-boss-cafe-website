import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Board } from "@/components/Board";
import { Place } from "@/components/Place";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";

export default function Home() {
  return (
    <>
      <a
        href="#board"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border-2 focus:border-ink focus:bg-red focus:px-5 focus:py-3 focus:font-bold focus:uppercase focus:text-cream"
      >
        Skip to menu
      </a>
      <Header />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <Board />
        <Place />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
