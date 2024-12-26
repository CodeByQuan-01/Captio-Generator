import React from 'react'
import { MessageCircle, Zap, Smile } from 'lucide-react'

const About: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        About Caption Generator
      </h1>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Caption Generator is a tool that helps you create impactful captions for your social media posts. It uses song lyrics and AI to generate captions based on your selected mood.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="text-center">
            <MessageCircle className="mx-auto h-12 w-12 text-blue-500" />
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Mood-based</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Select your mood and get relevant captions</p>
          </div>
          <div className="text-center">
            <Zap className="mx-auto h-12 w-12 text-blue-500" />
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">AI-powered</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Use AI to enhance your captions</p>
          </div>
          <div className="text-center">
            <Smile className="mx-auto h-12 w-12 text-blue-500" />
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Easy to use</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Simple interface for quick caption generation</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

