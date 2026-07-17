document.addEventListener('DOMContentLoaded', () => {
    // Datos mock basados en las reglas de negocio de EsSalud
    const transacciones = [
        {
            id: 'TRX-2026-001',
            concepto: 'Pago a proveedor de insumos médicos (Oxígeno)',
            partida: '2.3.1.8.1.2',
            fecha: '16/07/2026',
            estado: 'aprobado',
            monto: 'S/ 45,200.00'
        },
        {
            id: 'TRX-2026-002',
            concepto: 'Mantenimiento preventivo de ecógrafos',
            partida: '2.3.2.4.1.5',
            fecha: '15/07/2026',
            estado: 'pendiente',
            monto: 'S/ 12,500.00'
        },
        {
            id: 'TRX-2026-003',
            concepto: 'Reembolso por caja chica - Farmacia',
            partida: '2.3.1.2.1.1',
            fecha: '15/07/2026',
            estado: 'aprobado',
            monto: 'S/ 3,450.00'
        },
        {
            id: 'TRX-2026-004',
            concepto: 'Error de digitación - Certificación duplicada',
            partida: '2.3.2.1.2.1',
            fecha: '14/07/2026',
            estado: 'anulado',
            monto: 'S/ 8,000.00'
        }
    ];

    const tableBody = document.getElementById('transaction-table-body');

    // Función para renderizar los datos en la tabla
    function renderTable() {
        tableBody.innerHTML = '';
        transacciones.forEach(trx => {
            const row = document.createElement('tr');
            
            // Capitalizar primera letra del estado para el badge
            const estadoCapitalizado = trx.estado.charAt(0).toUpperCase() + trx.estado.slice(1);

            row.innerHTML = `
                <td><strong>${trx.id}</strong></td>
                <td>${trx.concepto}</td>
                <td>${trx.partida}</td>
                <td>${trx.fecha}</td>
                <td><span class="badge ${trx.estado}">${estadoCapitalizado}</span></td>
                <td><strong>${trx.monto}</strong></td>
            `;
            tableBody.appendChild(row);
        });
    }

    renderTable();
});
