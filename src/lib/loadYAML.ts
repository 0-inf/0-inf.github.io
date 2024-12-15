import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

export default function loadYAML<T>(filePath: string): T | null {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return yaml.load(fileContents) as T;
  } catch (error) {
    console.error(`YAML Loading Error for file ${filePath}:`, error);
    return null;
  }
}
