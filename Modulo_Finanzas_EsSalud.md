# Módulo de Oficina de Finanzas para el ERP de EsSalud

## 1. Antecedentes
En el marco del mapa de macroprocesos de EsSalud, la gestión financiera comprende la ejecución del presupuesto, el control de ingresos y egresos, el registro contable y la formulación de estados financieros; además, este proceso se articula con la certificación presupuestal y el seguimiento de la disponibilidad de recursos, lo que evidencia la necesidad de que la información financiera se gestione de manera integrada.

Dentro de esta oficina, la Unidad de Tesorería y Presupuesto cumple funciones directamente vinculadas con la administración de fondos de la red asistencial, la atención de obligaciones con proveedores, personal y terceros, y el control de las cuentas bancarias de la entidad. Asimismo, el marco funcional de EsSalud muestra que la gestión financiera se encuentra ligada a la programación y control del presupuesto, por lo que esta unidad no solo ejecuta pagos, sino que también participa en la organización y seguimiento de los recursos asignados.

Por su parte, la Unidad de Contabilidad y Costos procesa la información administrativo-contable de la Red Asistencial, controla la documentación sustentatoria de ingresos y egresos, codifica y registra la documentación fuente, elabora los estados financieros y realiza el análisis de cuentas. Su componente de costos se orienta al tratamiento y control de la información necesaria para determinar y evaluar los costos vinculados a la gestión institucional, lo que permite disponer de información útil para la toma de decisiones y para el seguimiento del uso de los recursos.

En ese sentido, estas dos unidades presentan una relación funcional estrecha: Tesorería y Presupuesto intervienen en la asignación, disponibilidad y uso de fondos, mientras que Contabilidad y Costos registra, valida y analiza la información resultante de esas operaciones. Esta interdependencia sugiere la conveniencia de integrar las tablas y procesos de ambas unidades en una sola estructura de datos, a fin de mejorar la trazabilidad, la consistencia de la información y el control de la gestión financiera. Esta última afirmación es una inferencia derivada de las funciones descritas en el ROF y en el mapa de macroprocesos institucionales.

Asimismo, la implementación del módulo de Oficina de Finanzas permitirá mejorar la confiabilidad de la información financiera y elevar el nivel de madurez del sistema.

---

## 2. Problema a resolver
La Oficina de Finanzas de EsSalud Trujillo presenta una gestión de información dispersa entre sus unidades de Tesorería y Presupuesto, y de Contabilidad y Costos, lo que dificulta que la información fluya de manera consistente entre la ejecución presupuestal, el control de pagos, el registro contable y el análisis de costos, generando posibles duplicidades, retrabajo, demoras en la actualización de datos y limitaciones para obtener una visión unificada y confiable para la toma de decisiones.

---

## 3. Objetivo general y específicos

### Objetivo general
Diseñar una propuesta de centralización e integración de la base de datos de la Oficina de Finanzas de EsSalud Trujillo, articulando la información de la Unidad de Tesorería y Presupuesto con la de la Unidad de Contabilidad y Costos, con la finalidad de mejorar la consistencia, trazabilidad y disponibilidad de la información para su futura consolidación en un ERP institucional.

### Objetivos específicos
* Analizar la estructura actual de datos y los procesos de información de la Unidad de Tesorería y Presupuesto y de la Unidad de Contabilidad y Costos.
* Identificar las tablas, campos y relaciones que intervienen en ambos procesos para determinar puntos de conexión entre la información financiera y contable.
* Diseñar un modelo de base de datos centralizado que permita integrar y relacionar la información de ambas unidades de manera coherente.
* Establecer una propuesta de integración de datos orientada a reducir duplicidades, mejorar la trazabilidad de las operaciones y facilitar el control de la información.
* Definir una estructura de información que sirva como base para la implementación o consolidación de un ERP en el área de Finanzas de EsSalud Trujillo.

---

## 4. Implementar RACI
La Matriz RACI es un modelo utilizado para definir las responsabilidades asociadas a cada rol dentro de las actividades planificadas del proyecto. Sus siglas corresponden a:
* **R (Responsible / Responsable):** Rol encargado de ejecutar de forma directa la actividad.
* **A (Accountable / Aprobador):** Rol con la autoridad final de decisión y aprobación del entregable. Solo puede haber un Accountable asignado por actividad.
* **C (Consulted / Consultado):** Rol que provee retroalimentación y datos útiles para el desarrollo de la tarea.
* **I (Informed / Informado):** Rol que debe ser notificado tras la finalización de la actividad o sobre su progreso.

### Definición de Roles del Proyecto
| Identificador | Rol Funcional | Nombre del Responsable Sugerido |
| :--- | :--- | :--- |
| **R1** | Director de Proyecto (Project Manager) | Marreros Gonzales, Anjhelo |
| **R2** | Analista de Sistemas / Administrador de Base de Datos | Mendoza Zevallos, Jonatan |
| **R3** | Analista Contable / Aseguramiento de Calidad (QA) | Rivera Chamorro, Kristel |
| **R4** | Documentador / Soporte de Proyecto | Rosas Morales, Liz |
| **R5** | Líder de Soporte Técnico (Claro/ERP) | Stakeholder Externo |
| **R6** | Jefe de Oficina de Finanzas (EsSalud) | Cliente / Dueño del Proceso |

### Matriz de Asignación de Responsabilidades (RACI)
| Actividad / Tarea | R1 (PM) | R2 (DBA) | R3 (QA) | R4 (Doc) | R5 (Sop) | R6 (Cliente) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Planificación y Gobierno (PMBOK/COBIT) | **A** | **R** | **C** | **I** | **C** | |
| Análisis de estructura de datos (Tesorería y Contabilidad) | | **R** | **C** | | | **C** |
| Diseñó del modelo de base de datos centralizado | **C** | **A** | **R** | **I** | **R** | |
| Definición de Requisitos Funcionales y No Funcionales (ISO 25010) | | **C** | **R** | **A** | **I** | **C** |
| Integración de protocolos SOAP/REST | **I** | **R** | | **I** | **A** | **I** |
| Validación de Consistencia de Datos (RF05) | **C** | **I** | **R** | **I** | **I** | **A** |
| Control de cumplimiento ISO 27001 OSIPTEL | **I** | **I** | **I** | **R** | **C** | **A** |
| Elaboración del Documento de Gestión de Cambios | **A** | | | **R** | **I** | |
| Monitoreo de reducción de tiempos (MTTR) | **A** | **I** | | **I** | **R** | **I** |
| Consolidación de documentación final del proyecto | **R** | **R** | **R** | **A** | **I** | |

---

## 5. Cronograma de actividades del proyecto
| Fase del Proyecto | Actividad | Duración (Semanas) | Semana |
| :--- | :--- | :---: | :---: |
| **I. Preparación del Proyecto** | 1.1 Definición de alcance y objetivos (General y Específicos) | 1 | 1 |
| | 1.2 Conformación del equipo y asignación de roles (RACI) | 1 | 1 |
| | 1.3 Identificación de stakeholders y sus expectativas | 1 | 1 |
| **II. Business Blueprint (Plan de negocio)** | 2.1 Análisis de la estructura actual de datos de Tesorería y Presupuesto, y Contabilidad y Costos. | 2 | 2-3 |
| | 2.2 Mapeo del proceso elegido (Área de Oficina de Finanzas) y documentación. | 2 | 3-4 |
| | 2.3 Identificación de tablas, campos y relaciones clave entre unidades. | 1 | 4 |
| | 2.4 Recopilación de Requisitos Funcionales (RF) e No Funcionales (RNF) (ISO/IEC 25010:2023 y norma IEEE 830) | 2 | 4-5 |
| **III. Realización** | 3.1 Diseñó del modelo de base de datos centralizado e integrado. | 3 | 6-8 |
| | 3.2 Diseñó de la propuesta de integración de datos para reducir duplicidades y mejorar trazabilidad. | 2 | 7-8 |
| | 3.3 Definición de la estructura de información base para el ERP. | 1 | 8 |
| **IV. Preparación Final** | 4.1 Elaboración del documento de gestión de cambios. | 1 | 9 |
| | 4.2 Consolidación de toda la documentación del proyecto. | 1 | 9 |
| **V. Lanzamiento y Soporte** | 5.1 Revisión interna del proyecto y preparación para la presentación. | 1 | 10 |
| | 5.2 Presentación final del proyecto. | 1 | 10 |

---

## 6. Mapeo del proceso
### Mapa de Procesos - Oficina de Finanzas (OFTYC)
#### Macroproceso de Soporte: PS.3 Gestión Financiera y Contable (Red Prestacional Rebagliati - RPR)
*(Bajo la Resolución 1458-GG-ESSALUD-2024)*

* **Objetivo:** Gestionar los recursos financieros de la Red Prestacional de manera oportuna y eficiente, garantizando el cumplimiento de obligaciones y la generación de información financiera confiable.
* **Alcance:** Comprende desde la recepción de solicitudes y documentos hasta la generación de estados financieros comentados y su respectivo reporte.

#### Flujo de Actividades:
1. **Inicio**
2. **Recepción de Requerimientos y Documentos**
3. **Registro y Apertura de la Solicitud**
4. **Análisis y Verificación**
5. **Evaluación Financiera y Contable**
   * *Si hay observaciones:* Se deriva a **Observación o Devolución** y retorna al emisor.
   * *Si es aprobado:* Continúa a **Aprobación y Compromiso**.
6. **Ejecución del Pago o Registro Contable**
7. **Generación de Información Financiera**
8. **Remisión de Reportes y Estados Financieros**
9. **Fin (Cliente Satisfecho)**

* **Procesos de Apoyo:** Recursos Humanos, Logística, Sistemas y Tecnología (SAP), Capacitación, Servicios Auxiliares de Apoyo.
* **Indicadores de Desempeño (KPI):** Reducción de tiempos de entrega, porcentaje de efectividad de conciliaciones bancarias (Meta: >90%), mitigación de riesgos financieros identificados.

---

## 7. Requisitos Funcionales y No Funcionales (ISO/IEC 25010:2023 / IEEE 830)

### 7.1. Introducción
* **A. Propósito:** Definir los requisitos funcionales y no funcionales del sistema de centralización de base de datos para la Oficina de Finanzas de EsSalud Trujillo, permitiendo la interoperabilidad del área.
* **B. Alcance:** El sistema permitirá la integración, almacenamiento, validación y consulta de la información financiera y contable, asegurando la consistencia y trazabilidad de los datos.
* **C. Definiciones, acrónimos y abreviaturas:**
  * **Usuario:** Persona con accesos parametrizados para gestionar los procesos.
  * **RF:** Requerimiento Funcional.
  * **RNF:** Requerimiento No Funcional.
  * **SIAF:** Sistema Integrado de Administración Financiera.
* **D. Referencias:**
  * Standard IEEE 830-1998 (Software Requirements Specification).
  * ISO/IEC 25010:2023 (Systems and software Quality Requirements and Evaluation).
* **E. Resumen:** Esta sección detalla las especificaciones de comportamiento (RF) y atributos de calidad (RNF) acordes a la norma ISO 25010 para guiar el desarrollo técnico.

### 7.2. Descripción general
* **A. Perspectiva del producto:** El sistema funcionará como la capa de unificación transaccional del módulo de finanzas de EsSalud, comunicando de manera bidireccional los subprocesos de tesorería y contabilidad.
* **B. Limitaciones o restricciones:** Uso de la infraestructura tecnológica provista por la institución, cumplimiento de leyes de protección de datos personales y normativas internas de seguridad gubernamental.
* **C. Supuestos y dependencias:** Disponibilidad y compatibilidad con las tablas legadas y accesos a bases de datos relacionales existentes.

### 7.3. Requisitos Específicos

#### A. Requerimientos Funcionales

* **RF01: Autenticación de Usuarios**
  * **Identificación:** RF01
  * **Características:** Los usuarios deberán autenticarse para acceder a los distintos módulos.
  * **Descripción:** Control de acceso que autentica credenciales según rol asignado.
  * **Prioridad:** Alta

* **RF02: Registro de Usuarios**
  * **Identificación:** RF02
  * **Características:** Permite dar de alta cuentas de usuario con información estructurada.
  * **Descripción:** Registro de nombre, correo, cargo y rol. Envía contraseña temporal por correo electrónico institucional.
  * **Prioridad:** Alta

* **RF03: Consultar Información Financiera**
  * **Identificación:** RF03
  * **Características:** Consultas integradas sobre el estado financiero.
  * **Descripción:** Permite consultar en tiempo real cuentas, presupuestos y estados de pago.
  * **Prioridad:** Alta

* **RF04: Registro de Ajustes y Extornos Contables**
  * **Identificación:** RF04
  * **Características:** Principio de inmutabilidad en los registros cerrados.
  * **Descripción:** El sistema prohíbe la modificación directa de asientos. Las correcciones deben realizarse mediante la generación obligatoria de asientos de ajuste o extornos, dejando el registro histórico intacto.
  * **Prioridad:** Alta

* **RF05: Registrar documentación sustentatoria de los bienes institucionales**
  * **Identificación:** RF05
  * **Características:** Almacenamiento digitalizado de sustento de activos fijos.
  * **Descripción:** Permite la carga e indexación de facturas, actas y órdenes de compra de bienes de la Red Asistencial.
  * **Prioridad:** Alta

* **RF06: Controlar la documentación sustentatoria de los bienes institucionales**
  * **Identificación:** RF06
  * **Características:** Auditoría y verificación de vigencias.
  * **Descripción:** Permite rastrear la trazabilidad y estatus de vigencia del soporte documental de activos.
  * **Prioridad:** Alta

* **RF07: Registro de recaudación**
  * **Identificación:** RF07
  * **Características:** Vinculación directa con partidas de ingresos.
  * **Descripción:** El tesorero registra abonos recibidos y el sistema los vincula automáticamente a la partida presupuestal correspondiente.
  * **Prioridad:** Alta

* **RF08: Seguimiento de ingresos**
  * **Identificación:** RF08
  * **Características:** Monitoreo del flujo de efectivo.
  * **Descripción:** Permite rastrear la recaudación desde su recepción hasta su conciliación en libros bancos.
  * **Prioridad:** Alta

* **RF09: Registro de Pagos**
  * **Identificación:** RF09
  * **Características:** Cancelación de obligaciones y egresos.
  * **Descripción:** Permite procesar pagos a proveedores y terceros, generando comprobante de transferencia y actualizando el estatus del expediente a "cancelado".
  * **Prioridad:** Alta

* **RF10: Registro de Ajustes y Extornos de Pagos**
  * **Identificación:** RF10
  * **Características:** Control de inmutabilidad financiera.
  * **Descripción:** Para corregir pagos registrados, el sistema obliga a realizar transacciones inversas/ajustes, prohibiendo borrados físicos.
  * **Prioridad:** Alta

* **RF11: Validación y Bloqueo Automático de Certificación Presupuestal**
  * **Identificación:** RF11
  * **Características:** Control preventivo automatizado.
  * **Descripción:** Antes de comprometer o pagar, el sistema valida que exista certificación presupuestal con saldo suficiente; de lo contrario, bloquea la operación.
  * **Prioridad:** Alta

* **RF12: Generación de Reportes Financieros**
  * **Identificación:** RF12
  * **Características:** Exportabilidad y visualización.
  * **Descripción:** Generación en tiempo real de balances de comprobación y reportes de ejecución, exportables a Excel y PDF.
  * **Prioridad:** Alta

* **RF13: Recuperación de Contraseña**
  * **Identificación:** RF13
  * **Características:** Flujo seguro de restablecimiento por autoservicio.
  * **Descripción:** Envía un enlace temporal por correo institucional para reestablecer credenciales.
  * **Prioridad:** Media

* **RF14: Control y Definición de Roles**
  * **Identificación:** RF14
  * **Características:** Gestión granular de accesos.
  * **Descripción:** Permite al administrador configurar qué módulos y datos puede ver/operar cada rol.
  * **Prioridad:** Alta

* **RF15: Apertura y Cierre de Período Contable**
  * **Identificación:** RF15
  * **Características:** Bloqueo temporal e inmutabilidad temporal.
  * **Descripción:** El contador cierra períodos mensuales, bloqueando el registro de transacciones pasadas y abriendo la secuencia del nuevo período.
  * **Prioridad:** Alta

* **RF16: Reapertura Controlada de Período Contable**
  * **Identificación:** RF16
  * **Características:** Excepciones autorizadas por jefatura.
  * **Descripción:** Permite la reapertura temporal de un período bajo autorización del Jefe de Finanzas. Todo registro se marca como "post-cierre".
  * **Prioridad:** Media

* **RF17: Trazabilidad y Bitácora de Auditoría**
  * **Identificación:** RF17
  * **Características:** Log de eventos inalterable.
  * **Descripción:** Almacena timestamp, IP, usuario y acciones críticas (modificaciones, logins fallidos) de forma inmutable.
  * **Prioridad:** Alta

* **RF18: Sincronización Automática Tesorería-Contabilidad**
  * **Identificación:** RF18
  * **Características:** Sincronización transaccional inmediata.
  * **Descripción:** Cada pago aprobado en Tesorería genera de forma automática el asiento de partida doble respectivo en el libro contable general.
  * **Prioridad:** Alta

#### B. Requerimientos No Funcionales

* **RNF01: Interfaz de usuario (Usabilidad)**
  * Interfaz intuitiva y accesible (compatible con estándares web modernos), facilitando la operación según el rol.
* **RNF02: Confidencialidad e Integridad de Datos (Seguridad)**
  * Cifrado en tránsito (HTTPS) y en reposo (AES-256). Autenticación robusta y segregación de funciones (SoD).
* **RNF03: Gestión de Cambios del Sistema (Mantenibilidad)**
  * Arquitectura modular documentada que permita extensiones y adaptaciones de leyes contables nacionales de forma sencilla.
* **RNF04: Concurrencia y Capacidad de Respuesta (Eficiencia de Rendimiento)**
  * Soportar accesos masivos concurrentes con un tiempo de respuesta de consultas menor a 3 segundos.
* **RNF05: Acceso Continuo (Disponibilidad)**
  * Disponibilidad del 99.9% con redundancia de servidores en producción.
* **RNF06: Auditoría y Registro de Eventos (Fiabilidad/Seguridad)**
  * Almacenamiento de logs inalterables para auditoría interna y del Órgano de Control Institucional (OCI).
* **RNF07: Respaldo Automático de Datos (Resiliencia)**
  * Generación de copias de seguridad incrementales automáticas diarias en horario nocturno (2:00 a.m.).
* **RNF08: Recuperación ante Fallos (Tolerancia a fallos)**
  * RTO (Recovery Time Objective) menor a 8 horas y RPO (Recovery Point Objective) menor a 24 horas.
* **RNF09: Interoperabilidad con Sistemas Externos (Compatibilidad)**
  * Integración con Logística, RRHH de EsSalud Trujillo y validaciones directas con el SIAF (MEF) a través de servicios REST/SOAP.

### 7.4. Requisitos Comunes de las Interfaces

* **a. Interfaces de usuario:** Páginas web responsivas visualizadas a través de navegadores web compatibles (sin plugins adicionales). Controles estandarizados, alertas y diseño enfocado en la usabilidad.
* **b. Interfaces de hardware:**
  * Estación de trabajo cliente: Procesador Core i5 / Ryzen 5 o superior.
  * Memoria RAM: Mínimo 8 GB (Recomendado 16 GB para uso intensivo de SAP).
  * Almacenamiento: Unidad SSD de 256 GB.
* **c. Interfaces de software:**
  * SO Cliente: Windows 10/11 o Linux.
  * Navegadores: Chrome, Firefox, Edge actualizados.
* **d. Interfaces de comunicación:** Conexiones bajo protocolo seguro HTTPS sobre TLS 1.3. Transferencia segura de archivos vía SFTP para documentación.
* **e. Requisitos Funcionales Adicionales de Interfaz:**
  * **RF_INT01:** Autenticación de interfaz por credenciales estándar.
  * **RF_INT02:** Formulario simplificado de registro de nuevos usuarios.
  * **RF_INT03:** Panel para editar datos y estados de usuarios.
  * **RF_INT04:** Filtros avanzados para búsquedas rápidas en tablas financieras.
  * **RF_INT05:** Botones de descarga PDF/Excel accesibles desde las vistas de consulta.
  * **RF_INT06:** Formularios dinámicos para el ingreso manual de asientos de ajuste.
  * **RF_INT07:** Calendario integrado para mostrar cierres de periodo programados.
  * **RF_INT08:** Acceso rápido al historial de las últimas 10 transacciones del usuario.
  * **RF_INT09:** Actualizaciones en vivo en el dashboard mediante Server-Sent Events o websockets.
* **f. Requisitos No Funcionales de Interfaces:**
  * **Rendimiento:** Carga inicial de interfaz en menos de 2 segundos.
  * **Seguridad:** Bloqueo de sesión por inactividad tras 15 minutos.
  * **Fiabilidad y Portabilidad:** Soporte nativo para múltiples sistemas de pantalla y resoluciones estándar (1920x1080 óptimo).

---

## 8. Modelo Canvas de la Empresa (Módulo de Finanzas - SAP 6.0 - RPR)

* **1. Segmentos de Mercado (Usuarios):**
  * *Operativos RPR:* Personal técnico de las unidades de Tesorería/Presupuesto y Contabilidad/Costos de la red.
  * *Gestión y Auditoría:* Alta Dirección, OCI (Órgano de Control Institucional), entes rectores (MEF, SUNAT).
* **2. Propuesta de Valor:**
  * *Integración Técnica:* Provisión de una "única fuente de verdad" que elimina la dispersión de datos entre Tesorería y Contabilidad.
  * *Fortalecimiento del Control:* Registro inalterable de operaciones para elevar el nivel de madurez del modelo COSO institucional.
  * *Eficiencia Crítica:* Automatización que garantiza la entrega de estados financieros consolidados en los primeros 5 días hábiles.
* **3. Canales:**
  * Sistemas institucionales: Interfaz directa SAP Versión 6.0 y acceso web corporativo bajo protocolos seguros HTTPS.
* **4. Relación con Clientes (Soporte):**
  * *Acompañamiento Técnico:* Soporte especializado de la GCTIC (Gerencia de Tecnologías de la Información y Comunicaciones) y talleres de formación continua.
* **5. Fuentes de Ingresos (Beneficios):**
  * *Sostenibilidad:* Optimización del gasto público mediante cumplimiento estricto de PIM/POI, reducción de multas y mitigación total de riesgos operativos.
* **6. Actividades Clave:**
  * *Business Blueprint:* Alineación del software con el macroproceso PS.3 bajo el modelo institucional.
  * *Parametrización y Auditoría:* Configuración técnica en SAP y monitoreo constante de logs de auditoría.
* **7. Recursos Clave:**
  * *Tecnológicos:* Servidor central, base de datos integrada y licencias de software SAP 6.0.
  * *Normativos:* Resolución 1458-GG-ESSALUD-2024 y Manual de Procesos de la GCGF (Gerencia Central de Gestión Financiera).
* **8. Socios Clave:**
  * *Estratégicos Internos:* GCTIC (soporte de infraestructura) y GCGF (rector contable corporativo).
  * *Interoperabilidad:* MEF/SIAF para la validación automática de partidas presupuestales.
* **9. Estructura de Costos:**
  * *Implementación:* Horas-hombre del equipo de TI, infraestructura de hardware y servidores.
  * *Calidad y Capacitación:* Gastos en auditorías de seguridad informática y capacitaciones al personal.

---

## 9. Casos de uso

### 9.1. Identificación de Actores del Sistema
1. **Administrador del Sistema:** Personal con privilegios absolutos para gestionar usuarios, roles, configurar variables del sistema y auditar los accesos e inalterabilidad del log.
2. **Analista de Presupuesto:** Encargado de verificar y emitir certificaciones de crédito presupuestal que respaldan el gasto.
3. **Tesorero / Área de Tesorería:** Encargado de registrar ingresos, conciliar cuentas, y ejecutar los pagos.
4. **Contador / Área de Contabilidad y Costos:** Responsable de validar el registro contable diario, generar ajustes, controlar activos fijos y programar los cierres.
5. **Jefe de Finanzas:** Rol jerárquico con capacidad de autorizar acciones críticas (reapertura de periodos cerrados, aprobación de ajustes mayores).
6. **Auditor:** Usuario con perfil restrictivo de "solo lectura" para fines de control de la trazabilidad.

### 9.2. Especificación de Casos de Uso (CU)

#### CU-01: Registrar Usuarios
* **Identificador:** CU-01
* **Descripción:** Permite al administrador del sistema registrar nuevos usuarios a través de un formulario web, asignándoles un rol específico y validando sus datos corporativos.
* **Actores:** Administrador del Sistema.
* **Precondiciones:** Sesión de administrador iniciada y activa en el sistema.
* **Secuencia Normal:**
  1. El administrador ingresa a "Gestión de Usuarios" -> "Registrar Nuevo Usuario".
  2. El sistema carga el formulario de registro.
  3. El administrador completa los datos obligatorios: Nombre completo, Correo electrónico institucional, Cargo, Rol (dropdown) y Estado (Activo por defecto).
  4. El frontend valida en tiempo real la longitud de los campos y el formato de correo.
  5. Al hacer clic en "Registrar Usuario", se envía una petición POST a `/api/usuarios`.
  6. El servidor web procesa los datos, valida la unicidad del correo, crea el registro en la base de datos y genera una contraseña temporal de primer uso.
  7. El sistema envía un correo de notificación al usuario con sus credenciales de acceso seguras.
  8. El sistema muestra un mensaje de confirmación de registro exitoso.
* **Excepciones:**
  * *El correo ya existe:* El backend responde con error HTTP 409. El sistema alerta al administrador en pantalla con el mensaje "Este correo ya está registrado".
  * *Campos vacíos:* El frontend resalta los campos obligatorios incompletos y bloquea el botón de envío.
  * *Fallo de servidor SMTP:* Se registra al usuario en la BD, pero el sistema emite una alerta indicando que no se pudo enviar el correo y proporciona la contraseña de forma manual.
* **Postcondiciones:** El nuevo usuario se guarda en estado "Activo" en la base de datos y queda listo para autenticarse.

#### CU-02: Autenticar Usuario
* **Identificador:** CU-02
* **Descripción:** Permite el ingreso seguro de los usuarios al sistema utilizando su correo corporativo y contraseña, gestionando la generación de tokens de sesión válidos.
* **Actores:** Todos los usuarios del sistema.
* **Precondiciones:** El usuario debe estar registrado y activo en el sistema.
* **Secuencia Normal:**
  1. El usuario accede a la pantalla de login `/login`.
  2. El usuario introduce su correo institucional y su contraseña.
  3. Al hacer clic en "Iniciar Sesión", el frontend valida el formato y envía un POST a `/api/auth/login`.
  4. El servidor verifica las credenciales aplicando funciones de hasheo seguro.
  5. El sistema responde con HTTP 200 OK e incluye el token JWT que define su rol, nombre y permisos.
  6. El frontend almacena el token en el storage local y redirige al usuario a su panel de control personalizado de acuerdo a su rol.
* **Excepciones:**
  * *Credenciales Incorrectas:* El sistema muestra un mensaje de alerta genérico: "Credenciales incorrectas" (sin detallar si falló el correo o la clave por motivos de seguridad).
  * *Cuenta Desactivada:* Si el usuario está inactivo, el sistema emite el error "Su cuenta está desactivada. Contacte al administrador".
  * *Primer Inicio (Contraseña temporal):* El sistema redirige al usuario forzosamente a la vista de cambio de contraseña obligatoria.
* **Postcondiciones:** Se crea una sesión web activa y segura. El evento queda registrado en la bitácora de auditoría.

#### CU-03: Recuperar Contraseña
* **Identificador:** CU-03
* **Descripción:** Permite a un usuario reestablecer de forma autónoma su contraseña a través de su correo institucional.
* **Actores:** Todos los usuarios.
* **Precondiciones:** El usuario debe tener acceso a su correo institucional registrado.
* **Secuencia Normal:**
  1. El usuario hace clic en "¿Olvidó su contraseña?" en la pantalla de login.
  2. El sistema carga la pantalla `/recuperar-contrasena`.
  3. El usuario ingresa su correo y envía la solicitud.
  4. El sistema verifica la existencia del correo en la base de datos de usuarios activos.
  5. Se genera un token de recuperación temporal con validez de 15 minutos.
  6. Se envía un enlace al correo del usuario (`/reset-password?token={jwt}`).
  7. Al abrir el enlace, el usuario ingresa su nueva contraseña cumpliendo las políticas de seguridad (mínimo 8 caracteres, mayúscula, número, carácter especial).
  8. El usuario confirma el restablecimiento y el sistema actualiza la contraseña con hasheo seguro.
* **Excepciones:**
  * *Correo Inexistente:* El sistema muestra el mismo mensaje de éxito por seguridad (evitando la enumeración de usuarios).
  * *Token Expirado:* Si accede al enlace después de 15 minutos, el sistema deniega el acceso y le solicita generar una nueva petición de recuperación.
* **Postcondiciones:** La contraseña se actualiza en la base de datos y se invalidan las anteriores sesiones activas del usuario.

#### CU-04: Configurar Roles y Privilegios
* **Identificador:** CU-04
* **Descripción:** Permite al administrador definir y personalizar granularmente los permisos correspondientes a cada rol para garantizar la segregación de funciones.
* **Actores:** Administrador del Sistema.
* **Precondiciones:** Inicio de sesión con perfil de administrador con permisos totales.
* **Secuencia Normal:**
  1. El administrador accede a "Administración" -> "Roles y Privilegios".
  2. El sistema muestra la lista de roles existentes.
  3. El administrador selecciona un rol y hace clic en "Editar Permisos".
  4. Se muestra una matriz interactiva con todos los módulos y opciones del sistema organizados con switches/checkboxes.
  5. El administrador modifica los privilegios (ej. desactiva "Extornos" para tesoreros y los activa exclusivamente para contadores).
  6. El administrador guarda los cambios. El sistema valida las reglas lógicas (ej. el rol "Administrador" no puede quedarse sin permisos mínimos de administración).
  7. Se actualizan los permisos en la base de datos y se registra la modificación.
* **Excepciones:**
  * *Modificación no autorizada:* Si un usuario con rol insuficiente intenta forzar un PUT, el backend deniega la operación con código HTTP 403.
* **Postcondiciones:** Los cambios se aplican inmediatamente sobre las sesiones activas en el próximo llamado al backend, ajustando los accesos de los usuarios afectados.

#### CU-05: Consultar Información Financiera
* **Identificador:** CU-05
* **Descripción:** Permite la búsqueda y filtrado interactivo en tiempo real de transacciones, estados de cuentas, egresos, ingresos y presupuestos para la toma de decisiones.
* **Actores:** Todos los roles (con permisos de lectura habilitados).
* **Precondiciones:** Acceso de lectura parametrizado sobre el módulo consultado.
* **Secuencia Normal:**
  1. El usuario accede a "Consultas Financieras".
  2. El sistema carga la pantalla con los filtros disponibles (Fechas, Partidas, Centros de Costo, Proveedores, etc.).
  3. El usuario define sus criterios de búsqueda y hace clic en "Consultar".
  4. El sistema envía un GET con parámetros de consulta a `/api/consultas/financieras`.
  5. Se validan los alcances de visualización (ej. un usuario de Tesorería Trujillo solo puede visualizar datos de Trujillo).
  6. El sistema extrae los datos y los renderiza en una tabla paginada.
  7. Se calculan y muestran tarjetas de resumen estadístico (total acumulado, transacciones procesadas).
  8. El usuario puede ordenar columnas o exportar el reporte a Excel o PDF.
* **Excepciones:**
  * *Sin resultados:* El sistema muestra una tabla vacía con la leyenda informativa "No se encontraron transacciones que coincidan con los criterios de búsqueda".
  * *Timeout:* Si la consulta es muy pesada, se interrumpe y se le notifica al usuario que acote más sus filtros de fecha.
* **Postcondiciones:** La información se muestra en pantalla respetando las restricciones de privacidad y rol del usuario.

#### CU-06: Emitir Certificación Presupuestal
* **Identificador:** CU-06
* **Descripción:** Permite al analista comprobar el saldo de una partida e inmovilizar/comprometer los fondos necesarios para respaldar una adquisición o gasto futuro.
* **Actores:** Analista de Presupuesto.
* **Precondiciones:** Rol autorizado para la gestión presupuestaria. Existencia de la partida presupuestal en el año fiscal activo.
* **Secuencia Normal:**
  1. El analista accede al formulario "Emitir Certificación".
  2. Selecciona la partida presupuestal mediante el buscador o clasificador.
  3. El sistema carga dinámicamente el saldo disponible en pantalla.
  4. El analista ingresa el monto a certificar, el área solicitante y el concepto.
  5. El sistema comprueba localmente y en base de datos que el saldo de la partida es mayor o igual al monto solicitado.
  6. Al guardar, el backend descuenta el monto del saldo disponible y lo registra como saldo pre-comprometido.
  7. Se genera un certificado único codificado (ej. `CERT-2026-00124`) y se habilita la opción de descarga en PDF.
* **Excepciones:**
  * *Saldo Insuficiente:* El sistema bloquea el registro emitiendo una alerta visible en color rojo destacando que el saldo es insuficiente para procesar la transacción.
* **Postcondiciones:** El saldo de la partida presupuestal disminuye por el valor certificado, impidiendo sobregiros o duplicidad en los compromisos.

#### CU-07: Registrar Documentación Sustentatoria de Bienes
* **Identificador:** CU-07
* **Descripción:** Permite al administrador de activos cargar de manera digital los comprobantes, facturas u órdenes que sustentan la adquisición de bienes institucionales.
* **Actores:** Administrador de Bienes, Contador.
* **Precondiciones:** El activo fijo o bien institucional debe estar pre-registrado en el sistema.
* **Secuencia Normal:**
  1. El usuario navega a la sección de "Bienes Institucionales" y busca el activo correspondiente.
  2. El sistema carga la ficha del bien y su historial de documentos.
  3. El usuario hace clic en "Agregar Documento", selecciona el tipo (Factura, Acta de Recepción, etc.) y arrastra el archivo digital (PDF o imagen).
  4. El frontend valida el tamaño máximo (10 MB) y que la extensión de archivo sea permitida.
  5. Al confirmar la carga, se envía el payload vía POST `/api/bienes/{id}/documentos`.
  6. El sistema almacena el documento físico en un repositorio seguro y guarda los metadatos y ruta de enlace en la base de datos.
  7. Se muestra un toast indicando que la documentación se cargó correctamente.
* **Excepciones:**
  * *Formato Inválido:* El sistema muestra una alerta rechazando el archivo en caso de ser de un formato no soportado (ej. ejecutable).
  * *Fallo de Almacenamiento:* El sistema indica que hay un error de conexión con el repositorio de archivos.
* **Postcondiciones:** Los archivos quedan asociados al bien institucional para futuras revisiones.

#### CU-08: Registrar Pagos a Proveedores y Terceros
* **Identificador:** CU-08
* **Descripción:** Permite al tesorero registrar el pago definitivo de compromisos previos, actualizando la deuda e integrando de manera automática el asiento contable general.
* **Actores:** Tesorero.
* **Precondiciones:** Obligación de pago pre-registrada, con saldo certificado y aprobado. Cuenta bancaria de origen con saldo suficiente.
* **Secuencia Normal:**
  1. El tesorero accede a "Registrar Pago" e introduce el número de expediente de la orden de compra/servicio.
  2. El sistema recupera los datos del proveedor, monto de la obligación, partidas afectadas y cuentas de abono registradas.
  3. El tesorero ingresa el monto a pagar (puede ser pago total o parcial), la cuenta bancaria de EsSalud desde donde transferirá y el número de comprobante de la transferencia.
  4. Al confirmar, el sistema verifica nuevamente la disponibilidad de fondos.
  5. Se registra la operación de egreso.
  6. El backend genera de manera automática el asiento contable de partida doble afectando la cuenta de egresos y banco de forma sincronizada.
  7. El estado del expediente cambia a "cancelado" (o "parcialmente cancelado" si es parcial).
  8. Se muestra el comprobante generado con la opción de exportar a PDF.
* **Excepciones:**
  * *Cuenta de Banco sin Fondos:* El sistema alerta al tesorero que la cuenta origen no dispone de fondos suficientes para consolidar la transacción.
  * *Fallo de Integración Contable:* Se registra el egreso y se encola la contabilización automática, alertando al área técnica para su reprocesamiento en lote.
* **Postcondiciones:** La obligación de pago queda saldada y la contabilidad sincronizada en tiempo real.

#### CU-09: Registrar Asientos de Ajuste y Extorno
* **Identificador:** CU-09
* **Descripción:** Permite a los contadores autorizados registrar ajustes contables o extornos totales de operaciones, respetando el principio de inmutabilidad y partida doble.
* **Actores:** Contador, Administrador.
* **Precondiciones:** El asiento contable original a modificar debe existir. El período contable debe estar abierto.
* **Secuencia Normal:**
  1. El contador busca y visualiza el asiento contable original que contiene el error.
  2. Hace clic en "Ajustar/Extornar". El sistema bloquea la edición directa sobre el asiento original.
  3. El usuario selecciona el método correctivo:
     * *Extorno:* El sistema genera automáticamente el asiento inverso de partida doble cancelando los efectos del original.
     * *Asiento de Ajuste:* El sistema carga un formulario nuevo para registrar débitos y créditos manuales correctores.
  4. El contador introduce una justificación obligatoria y detallada del ajuste (mínimo 20 caracteres).
  5. El sistema valida la igualdad matemática entre débitos y créditos.
  6. Al guardar, el backend vincula relacionalmente el nuevo asiento corrector con el original, actualiza saldos contables de las cuentas afectadas y escribe en la bitácora de auditoría.
* **Excepciones:**
  * *Período Contable Cerrado:* El sistema muestra una alerta impidiendo el ajuste a menos que el Jefe de Finanzas autorice una reapertura temporal.
* **Postcondiciones:** El asiento original permanece intacto, el nuevo asiento de ajuste compensa contablemente el error y queda vinculada una pista de auditoría inmutable.

#### CU-10: Controlar Documentación Sustentatoria de Bienes
* **Identificador:** CU-10
* **Descripción:** Permite a auditores y contadores validar la existencia, legibilidad e integridad de todos los soportes documentales de los activos fijos institucionales.
* **Actores:** Contador, Auditor.
* **Precondiciones:** Existencia de documentos cargados sobre los bienes.
* **Secuencia Normal:**
  1. El auditor accede a "Control de Documentación".
  2. El sistema carga un panel resumen con indicadores de control: bienes con documentación completa, incompleta o documentos observados.
  3. El auditor hace clic en un bien en estado "Pendiente de Verificación".
  4. El sistema despliega el visualizador interno de PDFs e imágenes con los documentos cargados.
  5. El auditor revisa la validez legal, montos, firmas e ingresa comentarios.
  6. Marca la documentación del bien como "Verificada" (aprobada) o la rechaza marcándola como "Observada" con su justificación.
  7. El estatus del expediente se actualiza en el panel de control.
* **Excepciones:**
  * *Documento ilegible:* El auditor marca la opción "Observado", requiriendo de inmediato la recarga del archivo por parte del administrador de bienes.
* **Postcondiciones:** La documentación se actualiza con marcas de control y firmas digitales de verificación que respaldan el cumplimiento de auditoría institucional.

---

## 10. Diseñó Estático del Sistema: Diagramas de Clase
La arquitectura relacional del sistema unificado de finanzas se estructura sobre entidades que vinculan directamente los procesos de egresos e ingresos con su respectivo impacto presupuestal y contable:

* **Usuario / Empleado:** Almacena los metadatos de los colaboradores, su cargo, correo corporativo e integra la relación con el **Rol** y los **Permisos**.
* **CertificacionPresupuestal:** Registra las asignaciones presupuestarias inmovilizadas. Se vincula de forma directa con las **PartidasPresupuestarias** (códigos de gastos MEF) y con la **ObligacionPago** que se derivará de ella.
* **ObligacionPago (Expediente):** Vincula la información de compras o planillas con los proveedores, el saldo certificado y su estado (Pendiente, Parcial o Cancelado).
* **Pago (OperacionFinanciera):** Registra los detalles del desembolso (monto, fecha, cuenta bancaria origen, comprobante de transferencia), relacionándolo directamente con la **ObligacionPago** y el **AsientoContable** generado.
* **AsientoContable:** Centraliza la información del diario general contable (glosa, periodo, estado, referencia). Cada asiento se compone de múltiples **LineasAsiento** que debitan o acreditan cuentas específicas del **PlanCuentas**.
* **LogAuditoria:** Registra de forma inmutable todas las transacciones, modificaciones de roles, accesos fallidos, ajustes y extornos (Usuario, Timestamp, IP, Acción, Estado Anterior, Estado Nuevo).

---

## 11. Realización de Casos de Uso
La integración entre los sub-módulos operativos se realiza de manera coordinada por la capa de lógica de negocio (servicios):

```
+------------------+         Petición de Pago (Monto, OC, Banco)         +----------------------+
|  Módulo          | --------------------------------------------------> |   Controlador        |
|  Tesorería       |                                                     |   de Pagos           |
+------------------+                                                     +----------------------+
                                                                                    |
                                                                       1. Validar Certificación (CU-06)
                                                                       2. Verificar saldo bancario
                                                                                    v
+------------------+             Asiento Contable Generado               +----------------------+
|  Módulo          | <-------------------------------------------------- |   Servicio de        |
|  Contabilidad    |                                                     |   Contabilización    |
+------------------+                                                     +----------------------+
```

1. El usuario de tesorería aprueba el desembolso sobre una orden de compra verificada.
2. El servicio de cobros/pagos valida la existencia de una certificación presupuestaria (`CertificacionPresupuestal`) activa con recursos disponibles.
3. El motor financiero ejecuta el registro de la transacción bancaria.
4. De forma síncrona, el servicio llama al creador de asientos contables (`AsientoContableService`), el cual genera un asiento contable de partida doble: debita la cuenta de gastos/pasivo y acredita la cuenta auxiliar de bancos asociada, cerrando el ciclo transaccional con total trazabilidad.

---

## 12. Base de Datos MER (Modelo Entidad-Relación)
El diseño lógico-relacional propuesto se basa en una base de datos centralizada de alta integridad:

* **PARTIDA_PRESUPUESTARIA** (`id_partida`, `codigo_clasificador`, `nombre`, `monto_aprobado`, `monto_disponible`, `periodo_fiscal`)
* **CERTIFICACION_PRESUPUESTARIA** (`id_certificacion`, `numero_certificado`, `fk_partida`, `monto_certificado`, `fecha_emision`, `estado`, `fk_empleado`)
* **PROVEEDOR** (`id_proveedor`, `ruc`, `razon_social`, `correo`, `cuenta_bancaria`, `cci`)
* **OBLIGACION_PAGO** (`id_obligacion`, `numero_expediente`, `fk_proveedor`, `fk_certificacion`, `monto_total`, `monto_pendiente`, `estado`)
* **PAGO** (`id_pago`, `fk_obligacion`, `fecha_pago`, `monto_pagado`, `cuenta_origen`, `comprobante_transferencia`, `fk_empleado`)
* **ASIENTO_CONTABLE** (`id_asiento`, `numero_voucher`, `fecha_contable`, `periodo_contable`, `glosa`, `tipo`, `fk_pago`, `estado_cierre`)
* **DETALLE_ASIENTO** (`id_detalle`, `fk_asiento`, `fk_cuenta_contable`, `tipo_movimiento` [Debe/Haber], `monto`)
* **PLAN_CUENTAS** (`id_cuenta`, `codigo_cuenta`, `nombre_cuenta`, `tipo_cuenta` [Activo/Pasivo/Patrimonio/Ingreso/Gasto])
* **LOG_AUDITORIA** (`id_log`, `fk_empleado`, `timestamp`, `ip_origen`, `accion`, `detalle_cambios`)

---

## 13. Modelo Relacional (MR)
A nivel de implementación física, se establecen las llaves primarias (PK) y llaves foráneas (FK) con restricciones de integridad referencial:

* `CERTIFICACION_PRESUPUESTARIA (fk_partida) REFERENCES PARTIDA_PRESUPUESTARIA (id_partida)`
* `OBLIGACION_PAGO (fk_proveedor) REFERENCES PROVEEDOR (id_proveedor)`
* `OBLIGACION_PAGO (fk_certificacion) REFERENCES CERTIFICACION_PRESUPUESTARIA (id_certificacion)`
* `PAGO (fk_obligacion) REFERENCES OBLIGACION_PAGO (id_obligacion)`
* `ASIENTO_CONTABLE (fk_pago) REFERENCES PAGO (id_pago) ON DELETE RESTRICT`
* `DETALLE_ASIENTO (fk_asiento) REFERENCES ASIENTO_CONTABLE (id_asiento) ON DELETE CASCADE`
* `DETALLE_ASIENTO (fk_cuenta_contable) REFERENCES PLAN_CUENTAS (id_cuenta)`

---

## 14. Tabla de Permisos
El acceso a los recursos y endpoints de la API del sistema está regido por la siguiente matriz de control de acceso basada en roles (RBAC):

| Módulo / Operación | Administrador | Analista Presupuesto | Tesorero | Contador | Jefe Finanzas | Auditor |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Gestión de Usuarios** | CRUD | | | | | |
| **Configurar Permisos** | CRUD | | | | | |
| **Certificación Presupuestal** | R | CRUD | R | R | R | R |
| **Registrar Ingresos** | | | CRUD | R | R | R |
| **Registrar Pagos** | | | CRUD | R | R | R |
| **Crear Asientos Contables** | | | | CRUD | CRUD | R |
| **Ajustes y Extornos** | | | | CRUD | CRUD | R |
| **Apertura / Cierre Período** | | | | CRUD | CRUD | R |
| **Reapertura de Período** | | | | | CRUD | R |
| **Consultar Reportes** | R | R | R | R | R | R |
| **Ver Bitácora (Logs)** | R | | | | | R |

* *CRUD: Permisos completos de Creación, Lectura, Actualización y Eliminación (bajo reglas inmutables).*
* *R: Permisos de Solo Lectura.*

---

## 15. Metodología y Ciclo de Vida del Producto Software
Se implementará una metodología híbrida que combina el rigor del modelo estructurado y la flexibilidad ágil:

* **Ciclo de Vida:** Desarrollo iterativo e incremental basado en **Agile / Scrum** con entregables funcionales cada 2 semanas (Sprints).
* **Fase de Planificación e Ingeniería de Requisitos:** Aplicación de la norma IEEE 830 para asegurar que las especificaciones institucionales de EsSalud Trujillo queden correctamente documentadas y firmadas mediante actas (Business Blueprint).
* **Modelamiento e Integración:** Implementación del modelo relacional validado en pruebas locales, asegurando la consistencia e inmutabilidad de los datos financieros.

---

## 16. Visión Empresarial

### 16.1. Arquitectura y Rendimiento (Performance) (ASISTENCIAL)
Garantizar la escalabilidad del sistema para dar soporte a los picos de transaccionalidad operativa en la Red Trujillo, aislando la lógica de negocio mediante microservicios contenerizados y bases de datos con réplicas de lectura.

### 16.2. Calidad de Código y Estabilidad (Code Quality) (SUMINISTRO)
Adopción de estándares rigurosos de desarrollo mediante análisis estático de código (SonarQube) y cobertura de pruebas unitarias y de integración mínima del 85%, asegurando la confiabilidad del cálculo del costo de los suministros asistenciales.

### 16.3. Experiencia de Usuario y Frontend (UX/UI) (Control y Talento Humano)
Diseño de interfaces limpias basadas en componentes reutilizables que optimicen los tiempos de registro del personal y reduzcan drásticamente la curva de aprendizaje de los operarios de la Oficina de Finanzas.

### 16.4. Agilidad y Entrega Continua (CI/CD) (SEGUROS)
Implementación de canalizaciones automatizadas de despliegue continuo (CI/CD) que permitan realizar actualizaciones sin interrupciones del servicio, garantizando la continuidad de la validación contable de los seguros médicos asistenciales.

### 16.5. Eficiencia del Entorno de Ejecución (Backend Optimization) (ASISTENCIAL)
Optimización del tiempo de respuesta del servidor mediante procesos asíncronos y colas de mensajes en segundo plano para operaciones de alta computación como generación masiva de reportes contables mensuales.

### 16.6. Seguridad "Zero Trust" y Gestión de Accesos (Security & IAM) (SOPORTE)
Aplicación de una estrategia de seguridad de "confianza cero": toda comunicación debe estar cifrada y los usuarios autenticados mediante tokens de corta duración e inmutables, protegiendo los datos confidenciales de la institución contra accesos no autorizados.

### 16.7. Interoperabilidad y Ecosistema de APIs (Integrations) (FINANZAS)
Arquitectura orientada a APIs REST con documentación interactiva (OpenAPI) para agilizar y estandarizar el consumo de información contable por parte de otros módulos institucionales (Logística, RRHH) o externos (SIAF - MEF).

### 16.8. Resiliencia Operativa y Sincronización en Segundo Plano (Offline-First) (SUMINISTRO)
Mecanismos de cola local y almacenamiento en memoria para el registro de movimientos en almacén o auditorías, permitiendo la continuidad operativa aun frente a pérdidas temporales de conexión con el servidor central de finanzas.

### 16.9. Optimización Transaccional y Estrategia de Caché (Data Performance) (SOPORTE)
Estrategia de almacenamiento en caché para datos de catálogo e históricos financieros que sufran de nulas modificaciones (como plan de cuentas o partidas presupuestales anuales aprobadas), disminuyendo en un 50% las consultas directas sobre la base de datos principal.

### 16.10. Gestión de Cambios y Despliegues Seguros (Release & Change Governance) (SEGUROS)
Gobierno claro de cambios y control de versiones con revisiones de código exhaustivas por pares antes de la integración en la rama principal, eliminando la introducción de vulnerabilidades u obsolescencias en procesos financieros de seguros de salud.

### 16.11. Mantenimiento Autónomo y Arquitectura Auto-Reparable (Self-Healing & Zero-Downtime Maintenance) (Control y Talento Humano)
Configuración de orquestadores de contenedores con políticas de auto-recuperación ante caídas imprevistas de los servicios del ERP, garantizando disponibilidad y mitigación del mantenimiento presencial del área de soporte técnico de TI.

### 16.12. Accesibilidad Universal e Internacionalización (Inclusivity & A11y - ISO/IEC 25010:2023) (FINANZAS)
Desarrollo de las interfaces web adaptadas a los estándares de accesibilidad internacional, permitiendo que cualquier colaborador, independientemente de sus capacidades físicas, pueda interactuar eficazmente con el módulo de finanzas de EsSalud Trujillo.

---

## 17. Referencias Bibliográficas
* **IEEE Standard 830-1998:** IEEE Recommended Practice for Software Requirements Specifications. IEEE Computer Society.
* **ISO/IEC 25010:2023:** Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models.
* **Resolución de Gerencia General N° 1458-GG-ESSALUD-2024:** Manual de Macroprocesos y ROF institucional para la Red Prestacional.
* **EsSalud Trujillo (2026):** Manual de Procedimientos y Funciones (MAPRO) de la Oficina de Finanzas, Unidad de Tesorería y Presupuesto, y Unidad de Contabilidad y Costos.
