export default function IngresosEgresos() {
    return (
        <>
            <main className="flex-1 overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <div className="text-sm text-gray-500 mb-1">Finanzas <i className="ph ph-caret-right text-xs mx-1"></i> <span className="font-medium text-essalud-blue">Ingresos y Egresos</span></div>
                    <h1 className="text-2xl font-bold text-gray-900">Control de Pagos y Recaudación</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2 font-medium text-sm transition-colors shadow-sm">
                        <i className="ph ph-download-simple text-lg"></i> Exportar
                    </button>
                    <button className="px-4 py-2 bg-essalud-blue text-white rounded-lg hover:bg-essalud-accent flex items-center gap-2 font-medium text-sm transition-colors shadow-sm">
                        <i className="ph ph-plus text-lg"></i> Nuevo Registro
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-essalud-border p-6 text-center text-gray-500 py-20">
                <i className="ph ph-money text-4xl mb-3 text-gray-300"></i>
                <p>Módulo en construcción (RF07, RF09)</p>
            </div>
        </main>
        </>
    );
}
