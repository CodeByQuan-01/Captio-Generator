import React from 'react'
import { moods } from '../data/moods'
import { getEmojiForMood } from '../utils'

interface CaptionDisplayProps {
  caption: string
  mood: string
}

const CaptionDisplay: React.FC<CaptionDisplayProps> = ({ caption, mood }) => {
  if (!caption) return null

  return (
    <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
      <p className="text-lg text-gray-800 dark:text-white font-medium">
        {caption} {getEmojiForMood(mood)}
      </p>
    </div>
  )
}

export default CaptionDisplay

