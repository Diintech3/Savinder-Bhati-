import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPlay, FaChevronDown } from 'react-icons/fa'

const socialLinks = [
  { Icon: FaFacebook, href: '#', bg: 'bg-[#1877F2]' },
  { Icon: FaInstagram, href: '#', bg: 'bg-gradient-to-br from-[#E1306C] to-[#F77737]' },
  { Icon: FaTwitter, href: '#', bg: 'bg-[#1DA1F2]' },
  { Icon: FaEnvelope, href: 'mailto:savinderbhati@gmail.com', bg: 'bg-[#EA4335]' },
]

export default function Hero() {
  const scrollToAbout = () => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero section reels.mp4" type="video/mp4" />
      </video>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#001830]/75 z-[1]" />

      {/* Soft Glow Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-[500px] h-[500px] rounded-full bg-[#FF9933] opacity-[0.06] blur-[120px] pointer-events-none z-[2]" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full bg-[#003366] opacity-[0.12] blur-[120px] pointer-events-none z-[2]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#D4AF37] opacity-[0.04] blur-[100px] pointer-events-none z-[2]" />

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-[2]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-5 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-[#FF9933]/40 rounded-full px-4 py-2 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF9933] animate-pulse shrink-0" />
              <span className="text-[#FF9933] text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                राष्ट्रीय उपाध्यक्ष
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="font-black leading-[1.1]" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl block text-white">Savinder</span>
                <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl block bg-gradient-to-r from-[#FF9933] to-[#D4AF37] bg-clip-text text-transparent">
                  Bhati
                </span>
                <span className="text-xl sm:text-2xl lg:text-2xl block text-white/50 font-semibold mt-2 tracking-widest uppercase" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Murshadpur
                </span>
              </h1>
            </motion.div>

            {/* Org Line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/70 text-sm border-l-2 border-[#FF9933] pl-4" style={{ fontFamily: 'Inter, sans-serif' }}
            >
              अखिल भारतीय गुर्जर महासभा
            </motion.p>

            {/* Typing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-base lg:text-lg font-semibold text-[#D4AF37] h-7" style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <TypeAnimation
                sequence={[
                  'Social Leader', 2000,
                  'Community Visionary', 2000,
                  'Public Representative', 2000,
                  'Serving Society With Dedication', 2500,
                ]}
                wrapper="span"
                repeat={Infinity}
                cursor
              />
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mt-1"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector('#journey')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#003366] hover:bg-[#004080] text-white px-7 py-3 rounded-full font-semibold text-sm shadow-lg shadow-blue-900/40 cursor-pointer transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                View Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#FF9933] hover:bg-[#e07000] text-white px-7 py-3 rounded-full font-semibold text-sm shadow-lg shadow-orange-500/30 cursor-pointer transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Connect Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 border border-white/25 text-white px-5 py-3 rounded-full font-semibold text-sm cursor-pointer hover:bg-white/10 transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span className="w-7 h-7 rounded-full bg-[#FF9933] flex items-center justify-center shrink-0">
                  <FaPlay size={9} />
                </span>
                Watch Message
              </motion.button>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 pt-1"
            >
              <span className="text-white/40 text-xs uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>Follow</span>
              <div className="w-6 h-px bg-white/15" />
              {socialLinks.map(({ Icon, href, bg }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className={`w-9 h-9 rounded-full ${bg} flex items-center justify-center text-white shadow-md cursor-pointer`}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right — Portrait ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end relative order-1 lg:order-2"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer spinning ring */}
              <div className="absolute w-72 h-72 lg:w-80 lg:h-80 rounded-full border border-[#FF9933]/25 animate-[spin_20s_linear_infinite]" />
              {/* Inner spinning ring */}
              <div className="absolute w-64 h-64 lg:w-72 lg:h-72 rounded-full border border-[#D4AF37]/20 animate-[spin_14s_linear_infinite_reverse]" />

              {/* Glow behind circle */}
              <div className="absolute w-56 h-56 lg:w-64 lg:h-64 rounded-full bg-[#FF9933]/10 blur-2xl" />

              {/* Circle image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-56 h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#FF9933]/60 shadow-2xl shadow-[#FF9933]/20"
              >
                <img
                  src="/Savi image.png"
                  alt="Savinder Bhati Murshadpur"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </motion.div>

              {/* Badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                className="absolute -bottom-2 -left-10 bg-[#001830]/90 backdrop-blur-xl border border-[#FF9933]/30 rounded-2xl px-4 py-2.5 shadow-xl z-20"
              >
                <p className="text-[#D4AF37] font-black text-xl leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>15+</p>
                <p className="text-white/60 text-[11px] mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>Years of Service</p>
              </motion.div>

              {/* Badge — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 }}
                className="absolute -top-2 -right-10 bg-[#001830]/90 backdrop-blur-xl border border-[#FF9933]/30 rounded-2xl px-4 py-2.5 shadow-xl z-20"
              >
                <p className="text-[#FF9933] font-black text-xl leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>50K+</p>
                <p className="text-white/60 text-[11px] mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>People Connected</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down */}
      <motion.button
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToAbout}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer group"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-widest group-hover:text-white/70 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
          Scroll
        </span>
        <FaChevronDown size={14} className="text-[#FF9933] opacity-70 group-hover:opacity-100 transition-opacity" />
      </motion.button>
    </section>
  )
}
