import { NavLink } from 'react-router-dom';
import esSaludLogo from '../assets/Logo_EsSalud.jpeg';

export default function TailwindSidebar() {
    return (
        <aside className="w-64 bg-white border-r border-essalud-border flex flex-col h-full shrink-0 shadow-sm z-10">
            <div className="h-16 border-b border-essalud-border flex items-center justify-center overflow-hidden">
                <img src={esSaludLogo} alt="EsSalud - Seguridad Social para todos" className="w-[88%] h-[125%] object-contain mix-blend-multiply" />
            </div>
            
            <nav className="flex-1 overflow-y-auto p-3 space-y-1 mt-2">
                <NavLink to="/dashboard" className={({ isActive }) => `sidebar-menu-item flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${isActive ? 'bg-essalud-blue text-white shadow-md shadow-blue-900/20' : 'text-gray-600 hover:bg-gray-50 hover:text-essalud-blue'}`}>
                    <i className="ph ph-squares-four text-lg"></i> Dashboard
                </NavLink>
                <NavLink to="/tesoreria" className={({ isActive }) => `sidebar-menu-item flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${isActive ? 'bg-essalud-blue text-white shadow-md shadow-blue-900/20' : 'text-gray-600 hover:bg-gray-50 hover:text-essalud-blue'}`}>
                    <i className="ph ph-bank text-lg"></i> Tesorería y Presup.
                </NavLink>
                <NavLink to="/ingresos_egresos" className={({ isActive }) => `sidebar-menu-item flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${isActive ? 'bg-essalud-blue text-white shadow-md shadow-blue-900/20' : 'text-gray-600 hover:bg-gray-50 hover:text-essalud-blue'}`}>
                    <i className="ph ph-arrows-left-right text-lg"></i> Ingresos / Egresos
                </NavLink>
                <NavLink to="/contabilidad" className={({ isActive }) => `sidebar-menu-item flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${isActive ? 'bg-essalud-blue text-white shadow-md shadow-blue-900/20' : 'text-gray-600 hover:bg-gray-50 hover:text-essalud-blue'}`}>
                    <i className="ph ph-calculator text-lg"></i> Contabilidad
                </NavLink>
                <NavLink to="/reportes" className={({ isActive }) => `sidebar-menu-item flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${isActive ? 'bg-essalud-blue text-white shadow-md shadow-blue-900/20' : 'text-gray-600 hover:bg-gray-50 hover:text-essalud-blue'}`}>
                    <i className="ph ph-file-text text-lg"></i> Reportes
                </NavLink>
            </nav>
            
            <div className="p-3 border-t border-essalud-border space-y-1">
                <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium">
                    <i className="ph ph-gear text-lg"></i> Configuración
                </a>
                <NavLink to="/login" className="flex items-center gap-3 px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium">
                    <i className="ph ph-sign-out text-lg"></i> Cerrar Sesión
                </NavLink>
            </div>
        </aside>
    );
}
