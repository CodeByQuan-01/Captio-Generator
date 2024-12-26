import React from 'react'
import { moods } from '../data/moods'

interface MoodSelectorProps {
  onMoodSelect: (mood: string) => void
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ onMoodSelect }) => {
  return (
    <select
      onChange={(e) => onMoodSelect(e.target.value)}
      defaultValue=""
      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <option value="" disabled>Select a mood</option>
      {Object.keys(moods).map((mood) => (
        <option key={mood} value={mood}>
          {mood} {moods[mood].emoji}
        </option>
      ))}
    </select>
  )
}

export default MoodSelector

