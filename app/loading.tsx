function Loading() {
    return (
        <div className="flex fixed flex-col items-center h-[100vh]  z-55 w-full bg-black justify-center top-0 left-0 h-fu flex-col justify-center items-center h-[60vh] gap-3">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin" />
            <h1 className="text-sm text-white">
                Sayt yuklanmoqda...
            </h1>
        </div>
    );
}

export default Loading;
