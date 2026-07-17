import os
import glob
import re

html_files = glob.glob('*.html')

pattern = re.compile(r'            <!-- El menú de Finanzas está expandido o destacado según el diseño -->\s*<div class="space-y-1">\s*<a href="#" class="flex items-center gap-3 px-3 py-2\.5 rounded-lg bg-essalud-blue text-white shadow-md shadow-blue-900/20 transition-all text-sm font-medium">\s*<i class="ph ph-money text-lg"></i> Finanzas\s*</a>\s*<div class="pl-9 pr-3 py-1 space-y-1 border-l-2 border-gray-100 ml-4">.*?</div>\s*</div>', re.DOTALL)

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check what file this is to apply active states
    is_tesoreria = 'tesoreria.html' in file
    is_ingresos = 'ingresos_egresos.html' in file
    is_contabilidad = 'contabilidad.html' in file
    
    active_class = "sidebar-menu-item flex items-center gap-3 px-3 py-2.5 rounded-lg bg-essalud-blue text-white shadow-md shadow-blue-900/20 transition-all text-sm font-medium"
    inactive_class = "sidebar-menu-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-essalud-blue transition-colors text-sm font-medium"
    
    c_tesoreria = active_class if is_tesoreria else inactive_class
    c_ingresos = active_class if is_ingresos else inactive_class
    c_contabilidad = active_class if is_contabilidad else inactive_class
    
    replacement = f"""            <a href="tesoreria.html" class="{c_tesoreria}">
                <i class="ph ph-bank text-lg"></i> Tesorería y Presup.
            </a>
            <a href="ingresos_egresos.html" class="{c_ingresos}">
                <i class="ph ph-arrows-left-right text-lg"></i> Ingresos / Egresos
            </a>
            <a href="contabilidad.html" class="{c_contabilidad}">
                <i class="ph ph-calculator text-lg"></i> Contabilidad
            </a>"""
            
    # Some files might not have the active class for "Finanzas", let's use a simpler pattern just in case
    pattern_generic = re.compile(r'            <!-- El menú de Finanzas.*?<div class="space-y-1">.*?<div class="pl-9 pr-3 py-1 space-y-1 border-l-2 border-gray-100 ml-4">.*?</div>\s*</div>', re.DOTALL)
    
    content = re.sub(pattern_generic, replacement, content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Flattened sidebar.")
