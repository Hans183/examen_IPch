import RootLayout from "../layout";
import Header from "../components/header";
import Footer from "../components/footer";

export default function BlogPage() {
    return (
        <RootLayout>
            <Header />
                <div className="col-span-6 row-span-1">
                    <h1 className="text-3xl font-bold">Nuestro Blog</h1>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li><a>Inicio</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                </div>
                hola
                <div className="col-span-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="shadow-md rounded-lg p-4 mb-4">
                        <h2 className="text-xl font-bold mb-2">Noticia de Ecología {item}</h2>
                        <p className="text-gray-700">Esta es una breve descripción de la noticia de ecología número {item}. Aquí se puede agregar más información relevante sobre el tema.</p>
                        <a href="#" className="text-blue-500 hover:underline">Leer más</a>
                    </div>
                ))}
                </div>
            <Footer />
        </RootLayout>
    );
}