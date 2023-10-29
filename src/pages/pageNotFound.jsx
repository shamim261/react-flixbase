export default function PageNotFound() {
    return (
        <section className="flex h-96 flex-col items-center justify-center ">
            <h1 className="text-4xl font-bold dark:text-slate-200">Page Not found!</h1>
            <button className="text-xl mt-6 rounded-lg p-2 border dark:text-slate-200 dark:border-gray-500 hover:text-slate-200 hover:bg-blue-600 transition-colors">
                Back to FlixBase
            </button>
        </section>
    );
}
