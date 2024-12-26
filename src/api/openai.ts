import axios from 'axios';

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const generateAICaption = async (lyric: string, mood: string): Promise<string> => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-002/completions',
      {
        prompt: `Generate a caption based on the lyric "${lyric}" that matches the mood "${mood}":`,
        max_tokens: 50,
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const generatedText = response.data.choices[0]?.text?.trim();
    return generatedText || 'Failed to generate AI caption.';
  } catch (error) {
    console.error('Error generating AI caption:', error);
    return 'Error: Unable to generate AI caption.';
  }
};

