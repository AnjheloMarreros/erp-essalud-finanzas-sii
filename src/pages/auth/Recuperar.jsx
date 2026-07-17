export default function Recuperar() {
    return (
        <div className="bg-essalud-light h-screen flex items-center justify-center font-sans">
            
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border border-essalud-border">
        <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-essalud-blue">Recuperar Acceso</h1>
            <p className="text-gray-500 mt-2">Ingrese su correo institucional</p>
        </div>
        <form>
            <div className="mb-6">
                <label className="block text-sm font-medium text-essalud-text mb-1">Correo Electrónico</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-essalud-blue focus:ring-1 focus:ring-essalud-blue" placeholder="usuario@essalud.gob.pe" />
            </div>
            <button type="button" className="w-full bg-essalud-blue text-white rounded-lg py-2 font-medium hover:bg-essalud-accent transition-colors">Enviar Enlace</button>
        </form>
        <div className="mt-4 text-center">
            <a href="login.html" className="text-sm text-gray-500 hover:text-essalud-blue hover:underline">Volver al inicio de sesión</a>
        </div>
    </div>

        </div>
    );
}
