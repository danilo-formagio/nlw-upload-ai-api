import { FastifyInstance } from 'fastify';
import ytdl from 'ytdl-core';
import { z } from 'zod';
import fs from 'node:fs';
import path from 'node:path';

export async function downloadYoutubeVideoRoute(app: FastifyInstance): Promise<void> {
  app.get('/download/:videoId', async (request, reply) => {
    const bodySchema = z.object({
      videoId: z.string()
    });

    const { videoId } = bodySchema.parse(request.params);
    const video = await downloadVideo(videoId);

    reply.send(video);
  });
}

function downloadVideo(videoId: string): Promise<Buffer> {
  const videoURL = `https://www.youtube.com/watch?v=${videoId}`;
  const videoPathDestination = path.resolve(__dirname, '../../tmp', 'video.mp4');

  return new Promise<Buffer>((resolve, reject) => {
    ytdl(videoURL, { quality: 'lowestaudio', filter: 'audioonly' })
      .on('end', () => {
        const stream = fs.readFileSync(videoPathDestination);
        resolve(stream);
      })
      .on('error', error => {
        reject(error);
      })
      .pipe(fs.createWriteStream(videoPathDestination));
  });
}
