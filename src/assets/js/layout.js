document.addEventListener('DOMContentLoaded', () => {
    // Lógica para inicializar componentes del layout (sidebar, topbar, tooltips)
    console.log("Layout de Finanzas cargado correctamente.");
    
    // Ejemplo: Marcar el menú activo en el sidebar
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll('.sidebar-menu-item');
    menuItems.forEach(item => {
        if (currentPath.includes(item.getAttribute('href'))) {
            item.classList.add('bg-essalud-blue', 'text-white');
            item.classList.remove('text-gray-600', 'hover:bg-gray-100');
        }
    });
});
