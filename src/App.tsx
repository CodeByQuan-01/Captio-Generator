import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Home, Music, Info } from 'lucide-react'
import HomePage from './pages/Home'
import About from './pages/About'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
        <nav className="bg-white dark:bg-gray-800 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Music className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">Caption Generator</span>
              </div>
              <div className="flex">
                <Link to="/" className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                  <Home className="h-5 w-5 mr-1" />
                  <span className="hidden sm:inline">Home</span>
                </Link>
                <Link to="/about" className="flex items-center ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                  <Info className="h-5 w-5 mr-1" />
                  <span className="hidden sm:inline">About</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </ErrorBoundary>
        </main>

        <footer className="bg-white dark:bg-gray-800 shadow-md mt-8">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
              © 2023 Caption Generator. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App

