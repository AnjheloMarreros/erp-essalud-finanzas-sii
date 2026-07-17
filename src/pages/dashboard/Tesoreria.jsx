export default function Tesoreria() {
    return (
        <>
            <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 gap-4">
                <div>
                    <div className="flex items-center text-sm text-gray-500 mb-2 gap-2">
                        <span>Finanzas</span> 
                        <i className="ph ph-caret-right text-xs"></i> 
                        <span className="font-semibold text-essalud-blue">Tesorería y Presupuesto</span>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Gestión de Tesorería</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center gap-2 font-medium text-sm transition-all shadow-sm hover:shadow">
                        <i className="ph ph-download-simple text-lg"></i> Exportar
                    </button>
                    <button className="px-5 py-2.5 bg-essalud-blue text-white rounded-lg hover:bg-blue-900 flex items-center gap-2 font-medium text-sm transition-all shadow-md shadow-blue-900/20 hover:shadow-lg">
                        <i className="ph ph-plus-circle text-lg"></i> Nueva Transacción
                    </button>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                
                {/* Tarjeta 1: Certificación Presupuestal */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden">
                    <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                        <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-white rounded-md border border-gray-200 shadow-sm text-gray-700">
                                <i className="ph ph-seal-check text-xl"></i>
                            </div>
                            <h3 className="font-bold text-gray-800 text-lg">Certificación Presupuestal</h3>
                        </div>
                        <span className="text-xs font-bold text-essalud-blue bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 tracking-wide">PRESUPUESTO 2024</span>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Código Requerimiento</label>
                                <input type="text" value="REQ-2024-8842" className="w-full bg-blue-50/50 border border-blue-100 rounded-lg px-4 py-2.5 text-gray-800 font-medium focus:outline-none" readOnly />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Monto Solicitado</label>
                                <input type="text" value="S/ 45,200.00" className="w-full bg-blue-50/50 border border-blue-100 rounded-lg px-4 py-2.5 text-gray-800 font-bold focus:outline-none" readOnly />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-sm font-medium text-gray-700">Partida Presupuestaria</label>
                                <i className="ph ph-info text-gray-400 cursor-pointer hover:text-gray-600"></i>
                            </div>
                            <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 bg-white focus:border-essalud-blue focus:ring-1 focus:ring-essalud-blue outline-none appearance-none cursor-pointer">
                                <option>2.3.1.5.1.2 Papelería en General y Útiles de Escritorio</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Justificación del Gasto</label>
                            <textarea className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-600 bg-blue-50/30 resize-none h-20 focus:outline-none" readOnly>Adquisición de suministros críticos para el departamento de Admisión General y Consultorios Externos - Sede Central.</textarea>
                        </div>

                        {/* Status Alert */}
                        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg p-4 flex justify-between items-center mt-2">
                            <div className="flex items-center gap-3">
                                <i className="ph ph-check-circle text-[#16A34A] text-2xl"></i>
                                <div>
                                    <p className="font-bold text-[#166534] text-sm">Disponibilidad Confirmada</p>
                                    <p className="text-xs text-[#22C55E]">Verificación automatizada exitosa</p>
                                </div>
                            </div>
                            <span className="font-bold text-[#166534] text-lg">S/ 120,450.00</span>
                        </div>
                    </div>
                    
                    {/* Footer Actions */}
                    <div className="p-5 border-t border-gray-100 bg-gray-50 flex gap-4 mt-auto">
                        <button className="flex-1 bg-white border border-gray-300 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                            Evaluar Saldo
                        </button>
                        <button className="flex-1 bg-essalud-blue text-white font-semibold py-2.5 rounded-lg hover:bg-blue-900 transition-colors shadow-md">
                            Emitir Certificado
                        </button>
                    </div>
                </div>

                {/* Tarjeta 2: Conciliación Bancaria Automática */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden">
                    <div className="p-5 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
                        <div className="p-1.5 bg-white rounded-md border border-gray-200 shadow-sm text-gray-700">
                            <i className="ph ph-bank text-xl"></i>
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg">Conciliación Bancaria Automática</h3>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            
                            {/* Columna Izquierda */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Cuenta Bancaria Destino</label>
                                    <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-gray-700 bg-white focus:border-essalud-blue focus:ring-1 focus:ring-essalud-blue outline-none appearance-none cursor-pointer text-sm font-medium">
                                        <option>BCP - CTA CT 191-2234556-0-91 (Principal)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">Tipo de Operación</label>
                                    <div className="space-y-3">
                                        {/* Option 1 */}
                                        <label className="flex items-start gap-3 p-3 border border-essalud-blue bg-blue-50/30 rounded-lg cursor-pointer">
                                            <input type="radio" name="operacion" className="mt-1 w-4 h-4 text-essalud-blue" defaultChecked />
                                            <div>
                                                <p className="font-semibold text-gray-800 text-sm">Egreso por Devengado</p>
                                                <p className="text-[10px] text-gray-500 uppercase tracking-wide mt-0.5">SIAF - GASTO CORRIENTE</p>
                                            </div>
                                        </label>
                                        {/* Option 2 */}
                                        <label className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                            <input type="radio" name="operacion" className="mt-1 w-4 h-4 text-essalud-blue" />
                                            <div>
                                                <p className="font-semibold text-gray-700 text-sm">Transferencia CCI</p>
                                                <p className="text-[10px] text-gray-500 uppercase tracking-wide mt-0.5">PAGO PROVEEDORES</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Monto Devengado</label>
                                    <input type="text" value="S/ 15400.00" className="w-full bg-blue-50/50 border border-blue-100 rounded-lg px-4 py-2.5 text-gray-800 font-bold focus:outline-none" readOnly />
                                </div>
                            </div>
                            
                            {/* Columna Derecha */}
                            <div className="space-y-6 flex flex-col h-full">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Extracto Bancario</label>
                                    <div className="border-2 border-dashed border-[#CBD5E1] bg-[#F8FAFC] rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all h-40">
                                        <i className="ph ph-file-arrow-up text-4xl text-[#94A3B8] mb-2"></i>
                                        <p className="font-bold text-gray-800">Cargar archivo</p>
                                        <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">.CSV / .XLSX</p>
                                    </div>
                                </div>

                                {/* Resumen widget */}
                                <div className="bg-white border border-gray-200 rounded-xl p-4 mt-auto shadow-sm">
                                    <div className="flex items-center gap-2 mb-3 text-essalud-blue font-bold text-sm">
                                        <i className="ph ph-chart-bar text-lg"></i> RESUMEN
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mb-1">Total</p>
                                            <p className="font-bold text-gray-800">S/ 450,223</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                                            <p className="text-[10px] text-gray-500 font-bold tracking-wider uppercase mb-1">Match</p>
                                            <p className="font-bold text-essalud-blue">94.2%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-5 border-t border-gray-100 bg-gray-50 flex gap-4 mt-auto">
                        <button className="flex-1 bg-white border border-gray-300 text-essalud-blue font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex justify-center items-center gap-2">
                            <i className="ph ph-arrows-clockwise text-lg"></i> Ejecutar Conciliación Automática
                        </button>
                        <button className="flex-1 bg-essalud-blue text-white font-semibold py-2.5 rounded-lg hover:bg-blue-900 transition-colors shadow-md flex justify-center items-center gap-2">
                            <i className="ph ph-lock-key text-lg"></i> Autorizar Pago
                        </button>
                    </div>
                </div>

            </div>
        </main>
        </>
    );
}
