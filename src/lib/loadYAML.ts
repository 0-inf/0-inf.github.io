import yaml from 'js-yaml';

export default async function loadYAML<T>(filePath: string, setStateCallback: (data: T | null) => void): Promise<void> {
  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      console.error(`Failed to fetch YAML file: ${filePath}`, response.status, response.statusText);
      setStateCallback(null);
      return;
    }

    const yamlText = await response.text();
    const parsedData = yaml.load(yamlText) as T;

    setStateCallback(parsedData);
  } catch (error) {
    console.error(`YAML Loading Error for file ${filePath}:`, error);
    setStateCallback(null);
  }
}
