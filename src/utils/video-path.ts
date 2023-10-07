import fs from 'node:fs';
import path from 'node:path';

export function videoPath(): string {
  const videoPath = path.resolve(__dirname, '../../tmp');

  if (!fs.existsSync(videoPath)) {
    fs.mkdirSync(videoPath);
  }

  return videoPath;
}
