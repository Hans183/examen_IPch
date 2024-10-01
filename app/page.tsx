import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import RootLayout from "./layout";

export default function Home() {
  return (
    <div>
      <RootLayout>
        <Header />
        <Hero />
        <Carousel />
        <Footer />
      </RootLayout>
    </div>
  );
}
