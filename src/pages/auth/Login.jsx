import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="bg-essalud-light h-screen w-full flex-1 flex items-center justify-center font-sans">
            
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border border-essalud-border">
        <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-essalud-blue">EsSalud ERP</h1>
            <p className="text-gray-500 mt-2">Módulo de Finanzas - Acceso</p>
        </div>
        <form>
            <div className="mb-4">
                <label className="block text-sm font-medium text-essalud-text mb-1">Usuario</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-essalud-blue focus:ring-1 focus:ring-essalud-blue" placeholder="Ingrese su usuario" />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-medium text-essalud-text mb-1">Contraseña</label>
                <input type="password" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-essalud-blue focus:ring-1 focus:ring-essalud-blue" placeholder="••••••••" />
            </div>
            <button type="button" onClick={() => navigate('/dashboard')} className="w-full bg-essalud-blue text-white rounded-lg py-2 font-medium hover:bg-essalud-accent transition-colors">Ingresar</button>
        </form>
    </div>

        </div>
    );
}
