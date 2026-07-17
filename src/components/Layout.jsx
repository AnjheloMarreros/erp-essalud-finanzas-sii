import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useMemo } from 'react';

export default function Layout() {
    const location = useLocation();

    const pageInfo = useMemo(() => {
        switch (location.pathname) {
            case '/dashboard':
            case '/':
                return { title: 'Resumen Financiero' };
            case '/tesoreria':
                return { title: 'Tesorería y Pagos' };
            case '/contabilidad':
                return { title: 'Contabilidad' };
            case '/reportes':
                return { title: 'Reportes y Cierre' };
            case '/ingresos_egresos':
                return { title: 'Ingresos y Egresos' };
            default:
                return { title: 'Finanzas ERP' };
        }
    }, [location]);

    return (
        <div className="finance-layout">
            <Sidebar />
            <main className="finance-main-content">
                <Topbar title={pageInfo.title} />
                <Outlet />
            </main>
        </div>
    );
}
