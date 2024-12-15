import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

export default function loadYAML<T>(filePath: string): T | null {
  try {
    // For server-side, use Node.js fs to read the file
    const fullPath = path.join(process.cwd(), filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return yaml.load(fileContents) as T;
  } catch (error) {
    console.error(`YAML Loading Error for file ${filePath}:`, error);
    return null;
  }
}

// // lib/loadYAML.ts
// import yaml from 'js-yaml';
// import path from 'path';

// export async function loadYAML<T>(filePath: string): Promise<T | null> {
//   // 서버 사이드에서 실행될 때
//   if (typeof window === 'undefined') {
//     const fs = await import('fs');

//     try {
//       const fullPath = path.join(process.cwd(), 'public', filePath);
//       const fileContents = fs.readFileSync(fullPath, 'utf8');
//       return yaml.load(fileContents) as T;
//     } catch (error) {
//       console.error(`YAML Loading Error for file ${filePath}:`, error);
//       return null;
//     }
//   }

//   // 클라이언트 사이드에서 실행될 때
//   try {
//     const response = await fetch(`/${filePath}`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch');
//     }
//     const yamlText = await response.text();
//     return yaml.load(yamlText) as T;
//   } catch (error) {
//     console.error(`YAML Loading Error for file ${filePath}:`, error);
//     return null;
//   }
// }

// import yaml from 'js-yaml';
// import fs from 'fs';
// import path from 'path';

// export default function loadYAML<T>(filePath: string): T | null {
//   try {
//     const fullPath = path.join(process.cwd(), filePath);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
//     return yaml.load(fileContents) as T;
//   } catch (error) {
//     console.error(`YAML Loading Error for file ${filePath}:`, error);
//     return null;
//   }
// }

// import yaml from 'js-yaml';

// export default async function loadYAML<T>(filePath: string, setStateCallback: (data: T | null) => void): Promise<void> {
//   try {
//     const response = await fetch(filePath);

//     if (!response.ok) {
//       console.error(`Failed to fetch YAML file: ${filePath}`, response.status, response.statusText);
//       setStateCallback(null);
//       return;
//     }

//     const yamlText = await response.text();
//     const parsedData = yaml.load(yamlText) as T;

//     setStateCallback(parsedData);
//   } catch (error) {
//     console.error(`YAML Loading Error for file ${filePath}:`, error);
//     setStateCallback(null);
//   }
// }
