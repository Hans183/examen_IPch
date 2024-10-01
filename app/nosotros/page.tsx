
import RootLayout from "../layout"
import Header from "../components/header"
import Footer from "../components/footer"

export default function About() {
    return <div>
    <RootLayout>
      <Header />
      <section className="py-24 flex items-center min-h-screen justify-center glass glass-blur "
      style={{
        backgroundImage: "url('/assets/img/8.png')",
        alignItems: "center",
        backgroundSize: "cover",
      }}
      >
    <div className="mx-auto max-w-[43rem]">
      <div className="text-center">
        <p className="text-lg font-medium leading-8 text-white">Somos EcoGreen</p>
        <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Reinventamos el&nbsp;reciclaje</h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-400 text-black">Ser líderes en la industria de la reducción de huella de carbono, inspirando y empoderando a las organizaciones y comunidades a adoptar prácticas sostenibles.</p>
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        <a href="/contacto" className="transform rounded-md px-5 py-3 font-medium text-white transition-colors"> Contacto </a>
        <a href="/nosotros" className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"> Blog</a>
      </div>
    </div>
  </section>
      <Footer />
    </RootLayout>
  </div>
  }