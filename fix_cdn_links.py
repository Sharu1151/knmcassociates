import os
import re

# Define the root directory containing the HTML files
ROOT_DIR = r"f:/knmcassociates.com/resources"

# Mapping of broken relative patterns to correct CDN URLs
REPLACEMENTS = {
    r"(?:\.\./)+jquery-3\.7\.1\.min\.js": "https://code.jquery.com/jquery-3.7.1.min.js",
    r"(?:\.\./)+bootstrap\.min\.css": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
    r"(?:\.\./)+bootstrap\.bundle\.min\.js": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
    r"(?:\.\/.+)?fontawesome\.css": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
    # Add additional patterns if needed
}

def fix_file(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    original = content
    for pattern, replacement in REPLACEMENTS.items():
        content = re.sub(pattern, replacement, content)
    if content != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {path}")

def main():
    for dirpath, _, filenames in os.walk(ROOT_DIR):
        for filename in filenames:
            if filename.lower().endswith('.html'):
                full_path = os.path.join(dirpath, filename)
                fix_file(full_path)

if __name__ == "__main__":
    main()
