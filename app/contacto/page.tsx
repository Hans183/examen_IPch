import RootLayout from "../layout";
import Header from "../components/header";
import Footer from "../components/footer";

export default function BlogPage() {
    return (
        <RootLayout>
            <Header />
                <div className="col-span-6 row-span-1">
                    <h1 className="text-3xl font-bold">Contacto</h1>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li><a>Inicio</a></li>
                            <li><a>Contacto</a></li>
                        </ul>
                    </div>
                </div>
                <div className="p-4 mx-auto max-w-xl font-[sans-serif]">
            <h1 className="text-3xl text-white font-extrabold text-center">Contactanos</h1>
            <form className="mt-8 space-y-4">
                <input type='text' placeholder='Name'
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                <input type='email' placeholder='Email'
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                <input type='text' placeholder='Subject'
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
                <textarea placeholder='Message' rows={6}
                    className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"></textarea>
                <button type='button'
                    className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full">Send</button>
            </form>
        </div>
            <Footer />
        </RootLayout>
    );
}