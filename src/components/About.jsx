import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHandshake, FaGraduationCap, FaUsers, FaLeaf, FaBalanceScale, FaFemale, FaFlag } from 'react-icons/fa'
import { HiLightBulb } from 'react-icons/hi'

const stats = [
  { value: 15,    suffix: '+',  label: 'Years of Service',   color: 'text-white' },
  { value: 50000, suffix: '+',  label: 'People Connected',   color: 'text-[#FF9933]' },
  { value: 100,   suffix: '+',  label: 'Social Campaigns',   color: 'text-[#D4AF37]' },
  { value: 500,   suffix: '+',  label: 'Events Organized',   color: 'text-white' },
  { value: 10,    suffix: 'K+', label: 'Followers',          color: 'text-[#FF9933]' },
]

const values = [
  { Icon: FaGraduationCap, title: 'Education',           desc: 'Quality education for every child in the community.' },
  { Icon: FaFemale,        title: "Women's Empowerment", desc: 'Championing rights and opportunities for women.' },
  { Icon: FaHandshake,     title: 'Social Harmony',      desc: 'Building bridges across communities.' },
  { Icon: FaUsers,         title: 'Youth Vision',        desc: 'Empowering the next generation with leadership.' },
  { Icon: FaLeaf,          title: 'Rural Development',   desc: 'Bringing development to villages and rural areas.' },
  { Icon: FaBalanceScale,  title: 'Justice for All',     desc: 'Equal rights and fair representation for everyone.' },
  { Icon: HiLightBulb,     title: 'Digital India',       desc: 'Promoting digital literacy and technology growth.' },
  { Icon: FaFlag,          title: 'National Pride',      desc: 'Dedicated to national development and cultural values.' },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
}

// Simple animated counter — no external lib, no crash
function AnimatedNumber({ value, suffix, color, start }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    const duration = 2000
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setDisplay(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, value])

  return (
    <span className={`text-3xl font-black font-[Poppins] ${color}`}>
      {display.toLocaleString()}{suffix}
    </span>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#FF9933] text-xs font-bold font-[Poppins] tracking-widest uppercase px-5 py-2 rounded-full mb-4">
            About
          </span>
          <h2 className="text-4xl lg:text-5xl font-black font-[Poppins] text-[#003366]">
            Who is{' '}
            <span className="bg-gradient-to-r from-[#FF9933] to-[#D4AF37] bg-clip-text text-transparent">
              Savinder Bhati?
            </span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base font-[Inter] leading-relaxed">
            A dedicated social leader from Murshadpur, Greater Noida — serving society with unwavering dedication, vision, and integrity.
          </p>
        </motion.div>

        {/* Bio + Values */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#003366] to-[#0055AA] rounded-3xl p-8 text-white shadow-2xl shadow-blue-900/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#FF9933]/60 shrink-0 shadow-lg">
                  <img
                    src="/Savi image.png"
                    alt="Savinder Bhati"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-bold font-[Poppins] text-lg leading-tight">Savinder Bhati Murshadpur</p>
                  <p className="text-white/60 text-sm font-[Inter]">राष्ट्रीय उपाध्यक्ष – अखिल भारतीय गुर्जर महासभा</p>
                </div>
              </div>
              <p className="text-white/80 font-[Inter] leading-relaxed text-sm mb-4">
                Savinder Bhati Murshadpur is a respected social leader and the National Vice President of Akhil Bharatiya Gurjar Mahasabha. With over 15 years of public service, he has been the voice of thousands across Greater Noida and beyond.
              </p>
              <p className="text-white/80 font-[Inter] leading-relaxed text-sm">
                His leadership philosophy is rooted in inclusive growth — believing that a society rises when every individual, regardless of background, has access to education, opportunity, and dignity.
              </p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-[#D4AF37] font-semibold font-[Poppins] italic">
                  "Serving society is not a duty, it is a devotion."
                </p>
                <p className="text-white/40 text-xs mt-1 font-[Inter]">— Savinder Bhati Murshadpur</p>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:border-[#FF9933]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#003366] to-[#0055AA] flex items-center justify-center text-white mb-3 shadow-lg">
                  <v.Icon size={18} />
                </div>
                <p className="font-bold font-[Poppins] text-[#003366] text-sm mb-1">{v.title}</p>
                <p className="text-gray-500 text-xs font-[Inter] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gradient-to-br from-[#003366] to-[#001a33] rounded-2xl p-6 text-center shadow-xl"
            >
              <AnimatedNumber
                value={s.value}
                suffix={s.suffix}
                color={s.color}
                start={inView}
              />
              <p className="text-white/60 text-xs mt-2 font-[Inter] leading-tight">{s.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
