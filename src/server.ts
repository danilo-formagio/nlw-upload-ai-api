import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRoute } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";
import { downloadYoutubeVideoRoute } from "./routes/download-youtube-video";

const app = fastify();

app.register(fastifyCors, {
  origin: '*'
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);
app.register(downloadYoutubeVideoRoute);

app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP Server Running')
});