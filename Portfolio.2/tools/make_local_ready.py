import os
import re

def fix_local_execution():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    vendor_dir = os.path.join(root, 'vendor')
    src_dir = os.path.join(root, 'src')
    
    # 1. Convert three.module.js to a global script
    three_module_path = os.path.join(vendor_dir, 'three.module.js')
    three_global_path = os.path.join(vendor_dir, 'three.global.js')
    
    with open(three_module_path, 'r', encoding='utf-8') as f:
        three_code = f.read()
        
    # Find the export block at the end
    export_match = re.search(r'export\s*\{([\s\S]+?)\};?\s*$', three_code)
    if export_match:
        exports = export_match.group(1)
        # Replace the export block with an assignment to window.THREE
        three_global_code = three_code[:export_match.start()] + f'\nwindow.THREE = {{{exports}}};\n'
        with open(three_global_path, 'w', encoding='utf-8') as f:
            f.write(three_global_code)
        print("Created vendor/three.global.js")
    else:
        print("Could not find export block in three.module.js")

    # 2. Modify src/main.js
    main_js_path = os.path.join(src_dir, 'main.js')
    with open(main_js_path, 'r', encoding='utf-8') as f:
        main_code = f.read()
        
    # Remove the import and replace with global
    if 'import * as THREE' in main_code:
        main_code = re.sub(r'import\s+\*\s+as\s+THREE\s+from\s+[\'"]\.\./vendor/three\.module\.js[\'"];?', 'const THREE = globalThis.THREE;', main_code)
        with open(main_js_path, 'w', encoding='utf-8') as f:
            f.write(main_code)
        print("Modified src/main.js to use global THREE")

    # 3. Modify index.html
    index_path = os.path.join(root, 'index.html')
    with open(index_path, 'r', encoding='utf-8') as f:
        index_code = f.read()
        
    if '<script type="module" src="./src/main.js"></script>' in index_code:
        # Add the three.global.js script tag before react
        index_code = index_code.replace('<script src="./vendor/react.production.min.js"></script>',
                                        '<script src="./vendor/three.global.js"></script>\n    <script src="./vendor/react.production.min.js"></script>')
        # Remove type="module" from main.js
        index_code = index_code.replace('<script type="module" src="./src/main.js"></script>',
                                        '<script src="./src/main.js"></script>')
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(index_code)
        print("Modified index.html to use global scripts")

if __name__ == '__main__':
    fix_local_execution()
