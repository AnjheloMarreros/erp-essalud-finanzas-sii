import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TailwindLayout from './components/TailwindLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Contabilidad from './pages/dashboard/Contabilidad';
import IngresosEgresos from './pages/dashboard/IngresosEgresos';
import Reportes from './pages/dashboard/Reportes';
import Tesoreria from './pages/dashboard/Tesoreria';
import Login from './pages/auth/Login';
import Recuperar from './pages/auth/Recuperar';
import Registro from './pages/auth/Registro';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas Públicas (Auth) */}
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar" element={<Recuperar />} />
        <Route path="/registro" element={<Registro />} />

        {/* Todas las rutas privadas ahora usan TailwindLayout */}
        <Route element={<TailwindLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contabilidad" element={<Contabilidad />} />
          <Route path="/ingresos_egresos" element={<IngresosEgresos />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/tesoreria" element={<Tesoreria />} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
