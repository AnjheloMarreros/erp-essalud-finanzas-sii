import os
import glob
import re

html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to match the left part of the topbar
    # It starts with <div class="flex items-center gap-8"> and ends with </nav>\n            </div>
    pattern = re.compile(r'            <div class="flex items-center gap-8">.*?</div>\n', re.DOTALL)
    
    # Actually wait, let's just make it very precise:
    pattern_precise = r'            <div class="flex items-center gap-8">\s*<div class="flex items-center gap-2">.*?<nav.*?<\/nav>\s*<\/div>'
    
    content = re.sub(pattern_precise, '', content, flags=re.DOTALL)

    # Change justify-between to justify-end on the header so the right side stays on the right
    content = content.replace('justify-between px-6', 'justify-end px-6')
    content = content.replace('justify-between px-6 shrink-0 shadow-sm z-0', 'justify-end px-6 shrink-0 shadow-sm z-0')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Top bar left section removed.")
