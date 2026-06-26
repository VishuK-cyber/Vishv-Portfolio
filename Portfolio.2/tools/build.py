import os
import shutil
import re

def minify_css(css):
    # Remove comments
    css = re.sub(r'/\*.*?\*/', '', css, flags=re.DOTALL)
    # Remove newlines and compress spaces
    css = re.sub(r'\s+', ' ', css)
    # Remove space around delimiters
    css = re.sub(r'\s*([\{\}\:\;\,\>])\s*', r'\1', css)
    return css.strip()

def build():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    dist_dir = os.path.join(root_dir, 'dist')
    
    print(f"Building project into: {dist_dir}")
    if not os.path.exists(dist_dir):
        os.makedirs(dist_dir)
    
    # 1. Process CSS
    css_path = os.path.join(root_dir, 'styles.css')
    if os.path.exists(css_path):
        with open(css_path, 'r', encoding='utf-8') as f:
            css_content = f.read()
        minified_css = minify_css(css_content)
        with open(os.path.join(dist_dir, 'styles.css'), 'w', encoding='utf-8') as f:
            f.write(minified_css)
        print(" -> Optimized styles.css")

    # 2. Copy HTML
    html_path = os.path.join(root_dir, 'index.html')
    if os.path.exists(html_path):
        shutil.copy(html_path, os.path.join(dist_dir, 'index.html'))
        print(" -> Copied index.html")
        
    # 3. Copy src (JS)
    src_dir = os.path.join(root_dir, 'src')
    if os.path.exists(src_dir):
        shutil.copytree(src_dir, os.path.join(dist_dir, 'src'), dirs_exist_ok=True)
        print(" -> Copied src/ (JS files)")

    # 4. Copy assets
    assets_dir = os.path.join(root_dir, 'assets')
    if os.path.exists(assets_dir):
        shutil.copytree(assets_dir, os.path.join(dist_dir, 'assets'), dirs_exist_ok=True)
        print(" -> Copied assets/ (images, pdfs)")
        
    # 5. Copy vendor
    vendor_dir = os.path.join(root_dir, 'vendor')
    if os.path.exists(vendor_dir):
        shutil.copytree(vendor_dir, os.path.join(dist_dir, 'vendor'), dirs_exist_ok=True)
        print(" -> Copied vendor/ (React, Three.js)")

    print(f"\nBuild complete! The 'dist' folder is now ready to be hosted live.")

if __name__ == '__main__':
    build()
