import axios from 'axios';

const API_BASE_URL = 'https://rapid-translate-multi-traduction.p.rapidapi.com';
const API_KEY = '1f187a22d6mshd2a0ec78bc4e3f2p17d1fdjsnc0011208afbb';

export const translateText = async (
  texts: string[],
  targetLanguages: string | string[],
  sourceLanguage: string = 'en'
): Promise<any> => {
  const targetLangs = Array.isArray(targetLanguages) ? targetLanguages : [targetLanguages];

  const options = {
    method: 'POST',
    url: `${API_BASE_URL}/t`,
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
    },
    data: {
      from: sourceLanguage,
      to: targetLangs.join(','),
      e: '',
      q: texts
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Translation API Error:');
    throw error;
  }
};