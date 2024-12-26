import React, { useState } from 'react'
import { Smile, Zap, Loader } from 'lucide-react'
import { fetchLyrics } from '../api/genius'
import { generateAICaption } from '../api/openai'
import { getRandomLyric } from '../utils'

const CaptionGenerator: React.FC = () => {
  const [mood, setMood] = useState('')
  const [caption, setCaption] = useState('')
  const [isAIMode, setIsAIMode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerateCaption = async () => {
    if (!mood) return
    setIsLoading(true)
    try {
      let lyric = await fetchLyrics(mood)
      if (!lyric) {
        lyric = getRandomLyric(mood)
      }

      if (isAIMode) {
        const aiCaption = await generateAICaption(lyric, mood)
        setCaption(aiCaption || 'Failed to generate AI caption.')
      } else {
        setCaption(lyric)
      }
    } catch (error) {
      console.error('Error generating caption:', error)
      setCaption('Oops! Something went wrong. Please try again.')
    }
    setIsLoading(false)
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <div className="space-y-4">
        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select a mood</option>
          <option value="happy">Happy 😊</option>
          <option value="sad">Sad 😢</option>
          <option value="excited">Excited 🎉</option>
        </select>

        <div className="flex items-center justify-between">
          <span>AI Mode</span>
          <button
            onClick={() => setIsAIMode(!isAIMode)}
            className={`px-4 py-2 rounded-md ${
              isAIMode ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {isAIMode ? 'ON' : 'OFF'}
          </button>
        </div>

        <button
          onClick={handleGenerateCaption}
          disabled={!mood || isLoading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader className="animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Zap />
              Generate Caption
            </>
          )}
        </button>

        {caption && (
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
            <p className="text-lg">{caption}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CaptionGenerator

