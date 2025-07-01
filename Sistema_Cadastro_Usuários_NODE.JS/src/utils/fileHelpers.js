import fs from 'fs/promises';
import path from 'path';

const ensureDataDir = async () => {
  const dir = path.dirname(DB_PATH);
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(DB_PATH, '[]');
  }
};

export const readFile = async (path) => {
  await ensureDataDir();
  try {
    return await fs.readFile(path, 'utf-8');
  } catch {
    return '[]';
  }
};

export const writeFile = async (path, data) => {
  await ensureDataDir();
  await fs.writeFile(path, data);
};