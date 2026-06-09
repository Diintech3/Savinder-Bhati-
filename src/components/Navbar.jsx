import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Vision', href: '#vision' },
  { name: 'Journey', href: '#journey' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Social Work', href: '#socialwork' },
  { name: 'News', href: '#news' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top,0px)] ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm shadow-black/8 border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => handleNav('#home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF9933] shadow-md">
              <img src="/Savi image.png" alt="Savinder Bhati" className="w-full h-full object-cover object-top" />
            </div>
            <div className="leading-tight">
              <p className={`font-bold text-sm font-[Poppins] transition-colors duration-300 ${scrolled ? 'text-[#003366]' : 'text-white'}`}>
                Savinder Bhati
              </p>
              <p className="text-[10px] text-[#FF9933] font-semibold tracking-widest uppercase">
                Murshadpur
              </p>
            </div>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.href)}
                className={`relative px-3 py-2 text-[13px] font-medium font-[Inter] rounded-lg transition-all duration-200 cursor-pointer ${
                  active === link.href
                    ? 'text-[#FF9933]'
                    : scrolled
                    ? 'text-[#003366]/80 hover:text-[#FF9933]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {active === link.href && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FF9933] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleNav('#contact')}
              className="hidden lg:flex items-center bg-gradient-to-r from-[#FF9933] to-[#E07000] text-white px-5 py-2 rounded-full text-[13px] font-semibold font-[Poppins] shadow-md shadow-orange-500/25 cursor-pointer"
            >
              Connect Now
            </motion.button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className={`lg:hidden p-3 -mr-1 rounded-lg transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center ${
                scrolled ? 'text-[#003366]' : 'text-white'
              }`}
            >
              {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNav(link.href)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium font-[Inter] transition-all cursor-pointer ${
                    active === link.href
                      ? 'bg-[#FF9933]/10 text-[#FF9933]'
                      : 'text-[#003366]/70 hover:bg-gray-50 hover:text-[#003366]'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNav('#contact')}
                className="mt-2 bg-gradient-to-r from-[#FF9933] to-[#E07000] text-white py-2.5 rounded-xl text-sm font-semibold font-[Poppins] cursor-pointer"
              >
                Connect Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
