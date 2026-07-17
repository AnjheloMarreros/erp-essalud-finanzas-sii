export default function Reportes() {
    return (
        <>
            <main className="flex-1 overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Reportes Financieros</h1>
                    <p className="text-sm text-gray-500">Exportación a PDF y Excel</p>
                </div>
                <a href="tesoreria.html" className="text-essalud-blue hover:underline">Volver a Tesorería</a>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-essalud-border p-6 text-center text-gray-500 py-20">
                <i className="ph ph-file-pdf text-4xl mb-3 text-gray-300"></i>
                <p>En construcción (RF12)</p>
            </div>
        </main>
        </>
    );
}
