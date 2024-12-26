import React from 'react'
import CaptionGenerator from '../components/CaptionGenerator'

const Home: React.FC = () => {

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Caption Generator 🎵✨
      </h1>
      <CaptionGenerator />
    </div>
  )
}

export default Home




// import React, { useState } from 'react'
// import { Smile, Zap, Loader } from 'lucide-react'
// import MoodSelector from '../components/MoodSelector'
// import CaptionDisplay from '../components/CaptionDisplay'
// import ToggleSwitch from '../components/ToggleSwitch'
// import { fetchLyrics } from '../api/genius'
// import { generateAICaption } from '../api/openai'
// import { getRandomLyric } from '../utils'

// const Home: React.FC = () => {
//   const [mood, setMood] = useState<string>('')
//   const [caption, setCaption] = useState('')
//   const [isAIMode, setIsAIMode] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)

//   const generateCaption = async () => {
//     if (!mood) {
//       setCaption('Please select a mood first.')
//       return
//     }
//     setIsLoading(true)
//     try {
//       let lyric = await fetchLyrics(mood)
//       if (!lyric) {
//         lyric = getRandomLyric(mood)
//       }

//       if (isAIMode) {
//         const aiCaption = await generateAICaption(lyric, mood)
//         setCaption(aiCaption || 'Failed to generate AI caption.')
//       } else {
//         setCaption(lyric)
//       }
//     } catch (error) {
//       console.error('Error generating caption:', error)
//       setCaption('Oops! Something went wrong. Please try again.')
//     }
//     setIsLoading(false)
//   }

//   return (
//     <div className="max-w-2xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
//         Caption Generator <Smile className="inline-block ml-2" />
//       </h1>
//       <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
//         <div className="mb-4">
//           <MoodSelector onMoodSelect={setMood} />
//         </div>
//         <div className="flex items-center justify-between mb-4">
//           <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Mode</span>
//           <ToggleSwitch
//             isOn={isAIMode}
//             handleToggle={() => setIsAIMode(!isAIMode)}
//             onLabel="ON"
//             offLabel="OFF"
//           />
//         </div>
//         <button
//           onClick={generateCaption}
//           disabled={!mood || isLoading}
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center"
//         >
//           {isLoading ? (
//             <>
//               <Loader className="animate-spin mr-2" />
//               Generating...
//             </>
//           ) : (
//             <>
//               <Zap className="mr-2" />
//               Generate Caption
//             </>
//           )}
//         </button>
//         <CaptionDisplay caption={caption} mood={mood} />
//       </div>
//     </div>
//   )
// }

// export default Home

