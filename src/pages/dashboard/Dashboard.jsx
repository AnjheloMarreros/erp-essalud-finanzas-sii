import { useEffect } from 'react';

export default function Dashboard() {
    useEffect(() => {
        // Load the dashboard.js script logic if needed, or implement it here
        const script = document.createElement('script');
        script.src = '/src/assets/js/dashboard.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
            {/* Header Section */}
            <div className="flex flex-col mb-8 gap-1">
                <div className="flex items-center text-sm text-gray-500 gap-2">
                    <span>Finanzas</span> 
                    <i className="ph ph-caret-right text-xs"></i> 
                    <span className="font-semibold text-essalud-blue">Dashboard General</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Resumen Financiero</h1>
            </div>

            {/* Tarjetas de KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Presupuesto Ejecutado</p>
                            <h3 className="text-3xl font-bold text-gray-900">S/ 12,450,000</h3>
                        </div>
                        <div className="p-3 bg-blue-50 rounded-lg text-essalud-blue border border-blue-100">
                            <i className="ph ph-currency-circle-dollar text-2xl"></i>
                        </div>
                    </div>
                    <p className="text-sm font-medium text-green-600 flex items-center gap-1">
                        <i className="ph ph-trend-up"></i> +4.5% vs mes anterior
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Pagos Pendientes</p>
                            <h3 className="text-3xl font-bold text-gray-900">S/ 845,200</h3>
                        </div>
                        <div className="p-3 bg-yellow-50 rounded-lg text-yellow-600 border border-yellow-100">
                            <i className="ph ph-clock-countdown text-2xl"></i>
                        </div>
                    </div>
                    <p className="text-sm font-medium text-gray-500 flex items-center gap-1">
                        32 requerimientos en cola
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all hover:shadow-md hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500 mb-1">Conciliación Bancaria</p>
                            <h3 className="text-3xl font-bold text-gray-900">94%</h3>
                        </div>
                        <div className="p-3 bg-green-50 rounded-lg text-green-600 border border-green-100">
                            <i className="ph ph-check-circle text-2xl"></i>
                        </div>
                    </div>
                    <p className="text-sm font-medium text-green-600 flex items-center gap-1">
                        Meta operativa superada ({'>'}90%)
                    </p>
                </div>
            </div>

            {/* Tabla de Últimos Movimientos */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-white rounded-md border border-gray-200 shadow-sm text-gray-700">
                            <i className="ph ph-list-dashes text-xl"></i>
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg">Últimas Transacciones (Tesorería)</h3>
                    </div>
                    <button className="px-4 py-2.5 bg-essalud-blue text-white rounded-lg hover:bg-blue-900 flex items-center gap-2 font-medium text-sm transition-all shadow-md shadow-blue-900/20 hover:shadow-lg">
                        <i className="ph ph-plus-circle text-lg"></i> Nuevo Registro
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50/50 text-gray-500 text-sm">
                                <th className="font-semibold p-4">ID Transacción</th>
                                <th className="font-semibold p-4">Concepto</th>
                                <th className="font-semibold p-4">Partida Pptal.</th>
                                <th className="font-semibold p-4">Fecha</th>
                                <th className="font-semibold p-4">Estado</th>
                                <th className="font-semibold p-4">Monto</th>
                            </tr>
                        </thead>
                        <tbody id="transaction-table-body" className="text-sm text-gray-700 divide-y divide-gray-100">
                            {/* Los datos se inyectarán vía JavaScript */}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
