import re
import os

tesoreria_path = "tesoreria.html"
with open(tesoreria_path, 'r', encoding='utf-8') as f:
    tesoreria_content = f.read()

# Extract Sidebar
sidebar_match = re.search(r'(    <!-- Sidebar -->\s*<aside.*?</aside>)', tesoreria_content, re.DOTALL)
sidebar_html = sidebar_match.group(1) if sidebar_match else ""

# Extract Topbar
topbar_match = re.search(r'(        <!-- Topbar -->\s*<header.*?</header>)', tesoreria_content, re.DOTALL)
topbar_html = topbar_match.group(1) if topbar_match else ""

active_class = "sidebar-menu-item flex items-center gap-3 px-3 py-2.5 rounded-lg bg-essalud-blue text-white shadow-md shadow-blue-900/20 transition-all text-sm font-medium"
inactive_class = "sidebar-menu-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-essalud-blue transition-colors text-sm font-medium"

def update_file(filename, active_item):
    if not os.path.exists(filename):
        return
        
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Check if it already has Sidebar
    if "<!-- Sidebar -->" not in content:
        # Insert Sidebar after <body ...>
        content = re.sub(r'(<body.*?>)', r'\1\n\n' + sidebar_html, content)
        
    # Check if it already has Topbar
    if "<!-- Topbar -->" not in content:
        # Insert Topbar after <div class="flex-1 ...">
        content = re.sub(r'(<div class="flex-1 flex flex-col h-full overflow-hidden">)', r'\1\n' + topbar_html, content)
        
    # Now set the correct active class
    # First, make everything inactive
    content = content.replace(active_class, inactive_class)
    
    # Then make the target item active
    if active_item == 'contabilidad':
        content = content.replace(f'href="contabilidad.html" class="{inactive_class}"', f'href="contabilidad.html" class="{active_class}"')
    elif active_item == 'reportes':
        content = content.replace(f'href="reportes.html" class="{inactive_class}"', f'href="reportes.html" class="{active_class}"')

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

update_file("contabilidad.html", "contabilidad")
update_file("reportes.html", "reportes")

# Also let's fix tesoreria just in case it has multiple active classes now
update_file("tesoreria.html", "tesoreria")
update_file("ingresos_egresos.html", "ingresos")

print("Layout injected to contabilidad and reportes.")
