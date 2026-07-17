import glob
import re

html_files = glob.glob('*.html')

# We want to replace the current logo in the sidebar:
pattern_to_replace = r'        <div class="p-4 border-b border-essalud-border flex items-center justify-center gap-3 h-\[73px\]">\s*<img src="https://upload\.wikimedia\.org.*?class="h-8">\s*</div>'

new_logo_html = """        <div class="p-4 border-b border-essalud-border flex items-center justify-center h-[73px]">
            <div class="flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/EsSalud_logo.svg/2560px-EsSalud_logo.svg.png" alt="EsSalud" class="h-6">
                <span class="text-xl font-bold text-[#003865] tracking-tight ml-1">ERP</span>
            </div>
        </div>"""

for file in html_files:
    if file == 'index.html':
        continue # Ignore index.html since it has a different layout structure
    
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    content = re.sub(pattern_to_replace, new_logo_html, content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated top left corner.")
