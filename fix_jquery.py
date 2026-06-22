import os, re

root = r'f:/knmcassociates.com'

fixed = 0
for dirpath, _, files in os.walk(root):
    for fname in files:
        if fname.lower().endswith('.html'):
            path = os.path.join(dirpath, fname)
            try:
                with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                # Fix paths like: ../../../../code.jquery.com/jquery-3.7.1.min.js
                #              or /code.jquery.com/jquery-3.7.1.min.js
                new = re.sub(
                    r'src="((?:\.\./)*|/)code\.jquery\.com/(jquery[^"]+)"',
                    r'src="https://code.jquery.com/\2"',
                    content
                )
                new = re.sub(
                    r"src='((?:\.\./)*|/)code\.jquery\.com/(jquery[^']+)'",
                    r"src='https://code.jquery.com/\2'",
                    new
                )
                if new != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new)
                    print('Fixed:', path)
                    fixed += 1
            except Exception as e:
                print('Error:', path, e)

print(f'Done. {fixed} files updated.')
