export default function Topbar({ title, subtitle }) {
    return (
        <header className="finance-topbar">
            <div className="page-title">
                <h1>{title}</h1>
                <p>{subtitle || 'Red Prestacional Rebagliati - Oficina de Finanzas'}</p>
            </div>
            <div className="user-profile">
                <div className="avatar">JC</div>
                <div className="user-info">
                    <strong>Juan Carlos</strong>
                    <span>Jefe de Finanzas</span>
                </div>
            </div>
        </header>
    );
}
