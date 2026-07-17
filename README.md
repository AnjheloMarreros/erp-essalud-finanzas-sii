# Sistema de Oficina de Finanzas - ERP EsSalud

Módulo de centralización e integración de la base de datos de la Oficina de Finanzas de EsSalud Trujillo, que articula la información de la Unidad de Tesorería y Presupuesto con la Unidad de Contabilidad y Costos.

## Requisitos Funcionales Principales
* Autenticación y gestión de usuarios (roles y privilegios).
* Consulta y seguimiento en tiempo real de operaciones financieras y presupuestos.
* Registro de recaudación, pagos a proveedores, certificaciones presupuestales y ajustes contables.
* Control de documentación sustentatoria de bienes institucionales.
* Generación de reportes financieros.

## Requisitos No Funcionales
* **Seguridad:** Cifrado de datos y control de accesos (HTTPS, AES-256).
* **Trazabilidad:** Registro inalterable de auditoría (logs) para control institucional.
* **Rendimiento:** Tiempo de respuesta óptimo (< 3s) y soporte para concurrencia.
* **Disponibilidad:** Alta disponibilidad (99.9%) y respaldos diarios automatizados.
* **Interoperabilidad:** Integración con sistemas legados (SIAF, SAP 6.0).

## Arquitectura y Diseño de Datos

### Entidades Principales (Modelo Relacional)
* **PARTIDA_PRESUPUESTARIA:** Gestión de códigos MEF y fondos aprobados/disponibles.
* **CERTIFICACION_PRESUPUESTARIA:** Bloqueo de fondos para compromisos específicos.
* **PROVEEDOR:** Registro de contratistas y cuentas bancarias.
* **OBLIGACION_PAGO (Expediente):** Vinculación de compras o servicios con la certificación.
* **PAGO:** Desembolsos asociados a la obligación.
* **ASIENTO_CONTABLE / DETALLE_ASIENTO:** Registro de partida doble vinculado a los pagos.
* **PLAN_CUENTAS:** Estructura de cuentas (Activo, Pasivo, etc.).
* **LOG_AUDITORIA:** Historial de transacciones para trazabilidad.

### Relaciones Clave (Integridad Referencial)
* Certificación -> Partida Presupuestaria (`fk_partida`).
* Obligación de Pago -> Proveedor (`fk_proveedor`) y Certificación (`fk_certificacion`).
* Pago -> Obligación (`fk_obligacion`).
* Asiento Contable -> Pago (`fk_pago`) [ON DELETE RESTRICT].
* Detalle Asiento -> Asiento (`fk_asiento`) y Plan de Cuentas (`fk_cuenta_contable`).

## Matriz de Permisos (Roles - RBAC)
* **Administrador del Sistema:** Acceso total, gestión de usuarios, roles y auditoría.
* **Analista de Presupuesto:** Gestión y emisión de certificaciones presupuestales.
* **Tesorero:** Registro de ingresos, conciliaciones y ejecución de pagos.
* **Contador:** Validación contable, ajustes, extornos y control de activos.
* **Jefe de Finanzas:** Autorizaciones críticas y reapertura de períodos.
* **Auditor:** Acceso de solo lectura para fiscalización y trazabilidad.
