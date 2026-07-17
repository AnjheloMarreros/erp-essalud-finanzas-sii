export default function TailwindTopbar() {
    return (
        <header className="bg-white border-b border-essalud-border h-16 flex items-center justify-end px-6 shrink-0 shadow-sm z-0">
            <div className="flex items-center gap-5">
                <div className="relative">
                    <i className="ph ph-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <input type="text" placeholder="Buscar transacción..." className="pl-9 pr-4 py-1.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-essalud-blue focus:ring-1 focus:ring-essalud-blue w-64 bg-gray-50 placeholder-gray-400 transition-all" />
                </div>
                <button className="text-gray-500 hover:text-essalud-blue relative p-1 rounded-full hover:bg-gray-100 transition-colors">
                    <i className="ph ph-bell text-xl"></i>
                    <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="flex items-center gap-3 border-l border-gray-200 pl-5">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-gray-800 leading-none">Admin Role</p>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wide mt-1">Oficina de Finanzas</p>
                    </div>
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" className="w-9 h-9 rounded-full border border-gray-200 object-cover" />
                </div>
            </div>
        </header>
    );
}
