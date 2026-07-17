import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside className="finance-sidebar">
            <div className="brand">
                <i className="ph ph-heartbeat brand-icon"></i>
                <h2>Finanzas ERP</h2>
            </div>
            <nav className="finance-nav">
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
                    <i className="ph ph-squares-four"></i> Dashboard
                </NavLink>
                <NavLink to="/tesoreria" className={({ isActive }) => isActive ? "active" : ""}>
                    <i className="ph ph-wallet"></i> Tesorería y Pagos
                </NavLink>
                <NavLink to="/presupuesto" className={({ isActive }) => isActive ? "active" : ""}>
                    <i className="ph ph-chart-line-up"></i> Presupuesto
                </NavLink>
                <NavLink to="/contabilidad" className={({ isActive }) => isActive ? "active" : ""}>
                    <i className="ph ph-books"></i> Contabilidad
                </NavLink>
                <NavLink to="/reportes" className={({ isActive }) => isActive ? "active" : ""}>
                    <i className="ph ph-file-text"></i> Reportes
                </NavLink>
            </nav>
        </aside>
    );
}
