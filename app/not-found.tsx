import Link from "next/link";

function Notfont() {
    return (
        <div className="min-h-[100vh] flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-7xl font-bold text-red-600 mb-4">404</h1>

            <p className="text-lg text-red-600 max-w-md mb-6">
                Kechirasiz, siz noto‘g‘ri sahifaga kirdingiz yoki manzilni
                xato yozdingiz. Bu sahifa saytimizda mavjud emas.
            </p>

            <Link
                href="/"
                className="px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-800 transition"
            >
                Bosh sahifaga qaytish
            </Link>
        </div>
    );
}

export default Notfont;
