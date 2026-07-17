import os
import glob
import re

html_files = glob.glob('*.html')

sidebar_target = """        <div class="p-4 border-b border-essalud-border flex items-center gap-3">
            <div class="bg-blue-50 p-2 rounded-lg text-essalud-blue">
                <i class="ph ph-buildings text-2xl"></i>
            </div>
            <div>
                <h2 class="font-bold text-sm text-gray-800">Sede Central</h2>
                <p class="text-[11px] text-gray-500">Red Prestacional Sabogal</p>
            </div>
        </div>"""

sidebar_replacement = """        <div class="p-4 border-b border-essalud-border flex items-center justify-center gap-3 h-[73px]">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/EsSalud_logo.svg/2560px-EsSalud_logo.svg.png" alt="EsSalud" class="h-8">
        </div>"""

sidebar_target2 = """        <div class="p-4 border-b border-essalud-border flex items-center gap-3">
            <div class="bg-blue-50 p-2 rounded-lg text-essalud-blue">
                <i class="ph ph-buildings text-2xl"></i>
            </div>
            <div>
                <h2 class="font-bold text-sm text-gray-800">Sede Central</h2>
                <p class="text-[11px] text-gray-500">Red Prestacional Sabogal</p>
            </div>
        </div>"""

sidebar_menu_target = """            <a href="#" class="sidebar-menu-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-essalud-blue transition-colors text-sm font-medium">
                <i class="ph ph-package text-lg"></i> Logística
            </a>
            <a href="#" class="sidebar-menu-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-essalud-blue transition-colors text-sm font-medium">
                <i class="ph ph-users text-lg"></i> Admisión
            </a>
            <a href="#" class="sidebar-menu-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-essalud-blue transition-colors text-sm font-medium">
                <i class="ph ph-pill text-lg"></i> Farmacia
            </a>"""

topbar_nav_target_finanzas = """                <nav class="hidden md:flex gap-6 text-sm font-medium h-full items-center">
                    <a href="#" class="text-gray-500 hover:text-gray-800 transition-colors py-5">DASHBOARD</a>
                    <a href="#" class="text-essalud-blue border-b-2 border-essalud-blue py-5">FINANZAS</a>
                    <a href="#" class="text-gray-500 hover:text-gray-800 transition-colors py-5">LOGÍSTICA</a>
                </nav>"""
topbar_nav_replacement_finanzas = """                <nav class="hidden md:flex gap-6 text-sm font-medium h-full items-center">
                    <a href="#" class="text-gray-500 hover:text-gray-800 transition-colors py-5">DASHBOARD</a>
                    <a href="#" class="text-essalud-blue border-b-2 border-essalud-blue py-5">FINANZAS</a>
                </nav>"""

topbar_nav_target_dashboard = """                <nav class="hidden md:flex gap-6 text-sm font-medium h-full items-center">
                    <a href="#" class="text-essalud-blue border-b-2 border-essalud-blue py-5">DASHBOARD</a>
                    <a href="#" class="text-gray-500 hover:text-gray-800 transition-colors py-5">FINANZAS</a>
                    <a href="#" class="text-gray-500 hover:text-gray-800 transition-colors py-5">LOGÍSTICA</a>
                </nav>"""
topbar_nav_replacement_dashboard = """                <nav class="hidden md:flex gap-6 text-sm font-medium h-full items-center">
                    <a href="#" class="text-essalud-blue border-b-2 border-essalud-blue py-5">DASHBOARD</a>
                    <a href="#" class="text-gray-500 hover:text-gray-800 transition-colors py-5">FINANZAS</a>
                </nav>"""


for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update top left corner
    content = content.replace(sidebar_target, sidebar_replacement)
    
    # Remove logistics, admission, pharmacy from sidebar
    content = content.replace(sidebar_menu_target, "")
    
    # Remove logistics from topbar
    content = content.replace(topbar_nav_target_finanzas, topbar_nav_replacement_finanzas)
    content = content.replace(topbar_nav_target_dashboard, topbar_nav_replacement_dashboard)
    # Generic replacement just in case
    if "LOGÍSTICA</a>" in content:
        content = re.sub(r'<a href="#" class="text-gray-500 hover:text-gray-800 transition-colors py-5">LOGÍSTICA</a>', '', content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updates completed.")
