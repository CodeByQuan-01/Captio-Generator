import axios from 'axios';

const GENIUS_API_KEY = process.env.REACT_APP_GENIUS_API_KEY;

export const fetchLyrics = async (mood: string): Promise<string> => {
  try {
    const response = await axios.get(`https://api.genius.com/search?q=${mood}`, {
      headers: { 'Authorization': `Bearer ${GENIUS_API_KEY}` }
    });

    const song = response.data.response.hits[0].result;
    return `"${song.title}" by ${song.primary_artist.name}`;
  } catch (error) {
    console.error('Error fetching lyrics:', error);
    return '';
  }
};

