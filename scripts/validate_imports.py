import pathlib
import re

root = pathlib.Path('src')
issues = []

for path in root.rglob('*.*'):
    if path.suffix not in {'.js', '.jsx', '.ts', '.tsx'}:
        continue
    text = path.read_text(encoding='utf-8')
    for m in re.finditer(r'^(?:\s*import\s+(?:[^\n]+?)\s+from\s+|\s*import\s+)(["\'])([^"\']+)\1', text, flags=re.MULTILINE):
        spec = m.group(2)
        if spec.startswith('.'):
            base = path.parent
            candidate = None
            if spec.endswith('/'):
                spec = spec[:-1]
            for ext in ['.js', '.jsx', '.ts', '.tsx', '/index.js', '/index.jsx', '/index.ts', '/index.tsx', '']:
                p = (base / (spec + ext)).resolve()
                if p.exists():
                    candidate = p
                    break
            if not candidate:
                issues.append((str(path), spec))

print('FOUND', len(issues), 'BROKEN IMPORTS')
for f, s in issues:
    print(f, '->', s)
