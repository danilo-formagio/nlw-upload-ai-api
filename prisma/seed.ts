import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.prompt.deleteMany()

  await prisma.prompt.create({
    data: {
      language: 'pt',
      title: 'Título YouTube',
      template: `Seu papel é gerar três títulos para um vídeo do YouTube.

Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar os títulos.
Abaixo você também receberá uma lista de títulos, use essa lista como referência para os títulos a serem gerados.

Os títulos devem ter no máximo 60 caracteres.
Os títulos devem ser chamativos e atrativos para maximizar os cliques.

Retorne APENAS os três títulos em formato de lista como no exemplo abaixo:
'''
- Título 1
- Título 2
- Título 3
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  });

  await prisma.prompt.create({
    data: {
      language: 'en',
      title: 'Youtube title',
      template: `Your role is to generate three titles for a YouTube video.

Below you will receive a transcription of this video, use this transcription to generate the titles.
Below you will also receive a list of titles, use this list as a reference for the titles to be generated.

The titles must have a maximum of 60 characters.
The titles should be catchy and attractive to maximize clicks.

Return ONLY the three titles in list format as in the example below:
'''
- Title 1
- Title 2
- Title 3
'''

Transcription:
'''
{transcription}
'''`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      language: 'pt',
      title: 'Descrição YouTube',
      template: `Seu papel é gerar uma descrição sucinta para um vídeo do YouTube.
  
Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar a descrição.

A descrição deve possuir no máximo 80 palavras em primeira pessoa contendo os pontos principais do vídeo.

Use palavras chamativas e que cativam a atenção de quem está lendo.

Além disso, no final da descrição inclua uma lista de 3 até 10 hashtags em letra minúscula contendo palavras-chave do vídeo.

O retorno deve seguir o seguinte formato:
'''
Descrição.

#hashtag1 #hashtag2 #hashtag3 ...
'''

Transcrição:
'''
{transcription}
'''`.trim()
    }
  });

  await prisma.prompt.create({
    data: {
      language: 'en',
      title: 'YouTube description',
      template: `Your role is to generate a concise description for a YouTube video.

Below you will receive a transcription of this video, use this transcription to generate the description.

The description should have a maximum of 80 words in the first person, including the main points of the video.

Use compelling words that capture the reader's attention.

Additionally, at the end of the description, include a list of 3 to 10 hashtags in lowercase containing video-related keywords.

The return should follow the following format:
  '''
  Description.

  #hashtag1 #hashtag2 #hashtag3 ...
  '''

  Transcription:
  '''
  {transcription}
  '''`.trim()
    }
  });

  await prisma.prompt.create({
    data: {
      language: 'pt',
      title: 'Transcrição do vídeo',
      template: `Exiba a transcrição do vídeo:
'''
{transcription}
'''`.trim()
    }
  });

  await prisma.prompt.create({
    data: {
      language: 'en',
      title: 'Video transcription',
      template: `Display the video transcription:
'''
{transcription}
'''`.trim()
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })