# 💻 NLW | Upload AI WEB

A web application designed to generate insights for video such as title, description, transcription, questions and translation based on video content using AI.

The system allows users to either upload video or insert the youtube URL, which will be converted into audio format and processed by OpenAI's Whisper model to generate the transcription.

It can be an excellent tool for content creators to automate your work using AI with the potential to expand its use to various other scenarios.

This project was created as part of Rocketseat NLW event: https://www.rocketseat.com.br/nlw.

**NOTE:** This is the back-end part, please find the WEB project here https://github.com/danilo-formagio/nlw-upload-ai-web

## 🧪 Technologies
![OpenAI](https://img.shields.io/badge/OpenAI-412991.svg?style=for-the-badge&logo=OpenAI&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![FFMPEG](https://img.shields.io/badge/FFmpeg-007808.svg?style=for-the-badge&logo=FFmpeg&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)

## ⚡️ Quick start

### Dependencies

To run the application on your local machine, make sure you have Node.js and NPM installed before proceeding with the steps below.

OpenAI API Key is necessary for the AI integration, access or create a new account on https://openai.com/ to generate your API key.

### Install and start API

**1. Clone the API project**
```bash
git clone git@github.com:danilo-formagio/nlw-upload-ai-api.git
```

**2. Setup OpenAI key**

Edit `.env` file replacing `OPENAI_KEY="OPENAI_KEY"` with the generated OpenAI API key.

**3. Install**
```bash
npm install
```

**4. Create database**
```bash
npm run create:db
```

**5. Run API**
```bash
npm run dev
```

### Install and start Web App

**1. Clone the WEB project**
```bash
git clone git@github.com:danilo-formagio/nlw-upload-ai-web.git
```

**2. Install**
```bash
npm install
```

**3. Run Web App**
```bash
npm run dev
```

Access URL: http://localhost:5173/

