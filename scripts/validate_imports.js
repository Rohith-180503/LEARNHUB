import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '../src');
const issues = [];
const validExtensions = ['.js', '.jsx', '.ts', '.tsx'];
const extensionsToCheck = ['.js', '.jsx', '.ts', '.tsx', '/index.js', '/index.jsx', '/index.ts', '/index.tsx', ''];

function walkDir(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(fullPath));
        } else {
            if (validExtensions.includes(path.extname(fullPath))) {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = walkDir(rootDir);
const importRegex = /^(?:\s*import\s+(?:[^\n]+?)\s+from\s+|\s*import\s+)(["'])([^"']+)\1/gm;

files.forEach(filePath => {
    const text = fs.readFileSync(filePath, 'utf-8');
    let match;
    
    // Reset regex index
    importRegex.lastIndex = 0;
    while ((match = importRegex.exec(text)) !== null) {
        let spec = match[2];
        if (spec.startsWith('.')) {
            const baseDir = path.dirname(filePath);
            let candidateFound = false;
            
            if (spec.endsWith('/')) {
                spec = spec.slice(0, -1);
            }
            
            for (const ext of extensionsToCheck) {
                const checkPath = path.resolve(baseDir, spec + ext);
                if (fs.existsSync(checkPath) && fs.statSync(checkPath).isFile()) {
                    candidateFound = true;
                    break;
                }
            }
            
            if (!candidateFound) {
                issues.push({ file: filePath, spec: spec });
            }
        }
    }
});

console.log(`FOUND ${issues.length} BROKEN IMPORTS`);
issues.forEach(issue => {
    console.log(`${issue.file} -> ${issue.spec}`);
});
