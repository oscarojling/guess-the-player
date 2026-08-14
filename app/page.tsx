import Footer from "@/components/Footer";
import Game from "@/components/Game";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#8ec5e8] flex flex-col items-center justify-center">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}
