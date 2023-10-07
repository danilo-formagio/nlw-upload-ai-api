import fs from 'node:fs';
import path from 'node:path';

export function getVideoDirectoryPath(): string {
  const videoDirectoryPath = path.resolve(__dirname, '../../tmp');

  if (!fs.existsSync(videoDirectoryPath)) {
    fs.mkdirSync(videoDirectoryPath);
  }

  return videoDirectoryPath;
}
