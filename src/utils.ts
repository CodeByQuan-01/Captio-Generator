import { moods } from './data/moods'

export const getEmojiForMood = (mood: string): string => {
  const moodEmojis: { [key: string]: string } = {
    happy: '😊',
    sad: '😢',
    excited: '🎉',
    angry: '😠',
    calm: '😌',
    // Add more moods and emojis as needed
  }
  return moodEmojis[mood.toLowerCase()] || '😐'
}

export const getRandomLyric = (mood: string): string => {
  const moodLyrics = moods[mood]?.lyrics
  if (!moodLyrics || moodLyrics.length === 0) {
    console.error(`No lyrics found for mood: ${mood}`)
    return "No lyrics found for this mood."
  }
  return moodLyrics[Math.floor(Math.random() * moodLyrics.length)]
}

