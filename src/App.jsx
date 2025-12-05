import './App.css'
import { useState, useEffect } from 'react'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleNavigate = (event) => {
      setCurrentPage(event.detail)
    }

    window.addEventListener('navigate', handleNavigate)
    return () => window.removeEventListener('navigate', handleNavigate)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen w-full relative">
      {/* Starburst background */}
      <div 
        className="fixed inset-0"
        style={{
          backgroundImage: `url('/asyaazkin/stars-bg.png')`,
          backgroundColor: '#1cabb0',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1
        }}
      />
      {renderPage()}
    </div>
  )
}

export default App
