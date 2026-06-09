import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaHeart, FaMapMarkerAlt } from 'react-icons/fa'

const quickLinks = ['Home', 'About', 'Vision', 'Journey', 'Achievements', 'Gallery', 'Social Work', 'News', 'Contact']

const socialLinks = [
  { icon: <FaFacebook size={18} />, href: '#', color: 'hover:bg-blue-600' },
  { icon: <FaInstagram size={18} />, href: '#', color: 'hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400' },
  { icon: <FaTwitter size={18} />, href: '#', color: 'hover:bg-sky-500' },
  { icon: <FaEnvelope size={18} />, href: 'mailto:savinderbhati@gmail.com', color: 'hover:bg-red-500' },
]

export default function Footer() {
  const scrollTo = (id) => document.querySelector(`#${id.toLowerCase().replace(' ', '')}`)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-gradient-to-b from-[#001a33] to-[#000D1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FF9933]/50 shadow-xl">
                <img src="/Savi image.png" alt="Savinder Bhati" className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="font-black text-lg font-[Poppins]">Savinder Bhati</p>
                <p className="text-[#FF9933] text-xs font-semibold tracking-wider">Murshadpur</p>
              </div>
            </div>
            <p className="text-white/60 text-sm font-[Inter] leading-relaxed mb-4 max-w-xs">
              राष्ट्रीय उपाध्यक्ष – अखिल भारतीय गुर्जर महासभा. Dedicated to serving society with commitment, vision, and integrity.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-xs font-[Inter] mb-6">
              <FaMapMarkerAlt size={12} className="text-[#FF9933]" />
              <span>Murshadpur, Greater Noida, India</span>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  whileHover={{ scale: 1.15, y: -3 }}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white ${s.color} transition-all duration-200 cursor-pointer`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-[Poppins] text-sm uppercase tracking-widest text-[#FF9933] mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-white/60 hover:text-[#FF9933] text-sm font-[Inter] transition-colors duration-200 text-left cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold font-[Poppins] text-sm uppercase tracking-widest text-[#FF9933] mb-5">Contact</h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-white/40 text-xs font-[Inter] mb-1">Email</p>
                <a href="mailto:savinderbhati@gmail.com" className="text-white/70 hover:text-[#FF9933] text-sm font-[Inter] transition-colors">
                  savinderbhati@gmail.com
                </a>
              </div>
              <div>
                <p className="text-white/40 text-xs font-[Inter] mb-1">Location</p>
                <p className="text-white/70 text-sm font-[Inter]">Murshadpur, Greater Noida<br />Uttar Pradesh, India</p>
              </div>
              <div className="bg-white/5 border border-[#FF9933]/20 rounded-xl p-4">
                <p className="text-[#D4AF37] font-semibold font-[Poppins] text-sm italic">
                  "Serving Society With Dedication"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-[Inter]">
            © 2024 Savinder Bhati Murshadpur. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-[Inter] flex items-center gap-1">
            Designed with <FaHeart size={10} className="text-[#FF9933]" /> Excellence
          </p>
        </div>
      </div>
    </footer>
  )
}
