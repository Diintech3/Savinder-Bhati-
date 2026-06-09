import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa'
import Navbar from './components/Navbar'

import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import Journey from './components/Journey'
import Achievements from './components/Achievements'
import Gallery from './components/Gallery'
import SocialWork from './components/SocialWork'
import News from './components/News'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showTop, setShowTop] = useState(false)

  // Loader
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(t)
  }, [])

  // Scroll Progress + Back to Top
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((window.scrollY / total) * 100)
      setShowTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="overflow-x-hidden">

      {/* Page Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[99999] bg-gradient-to-br from-[#001a33] via-[#003366] to-[#001a33] flex flex-col items-center justify-center"
          >
            <div className="relative w-20 h-20 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-4 border-white/10 border-t-[#FF9933]"
              />
              <div className="absolute inset-[5px] rounded-full overflow-hidden">
                <img src="/Savi image.png" alt="Savinder Bhati" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white font-bold font-[Poppins] text-xl"
            >
              Savinder Bhati
            </motion.p>
            <p className="text-[#FF9933] text-sm font-[Inter] mt-1">Murshadpur</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#003366] via-[#FF9933] to-[#D4AF37] z-[9999] transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Content */}
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Journey />
      <Achievements />
      <Gallery />
      <SocialWork />
      <News />
      <Testimonials />
      <Contact />
      <Footer />

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        className={`fixed right-4 sm:right-5 z-50 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/40 cursor-pointer transition-all duration-300 ${
          showTop ? 'bottom-[5.5rem] sm:bottom-24' : 'bottom-5 sm:bottom-6'
        }`}
        style={{ width: 52, height: 52, marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </motion.a>

      {/* Back to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-5 sm:bottom-6 right-4 sm:right-5 z-50 w-11 h-11 bg-gradient-to-br from-[#003366] to-[#0055AA] text-white rounded-full flex items-center justify-center shadow-xl shadow-blue-900/40 cursor-pointer"
            style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
            aria-label="Back to top"
          >
            <FaArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
