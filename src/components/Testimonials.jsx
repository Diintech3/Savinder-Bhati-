import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Rajesh Kumar Sharma',
    role: 'Community Leader, Greater Noida',
    review: 'Savinder Bhati ji has always been a pillar of strength for our community. His tireless efforts for education and welfare have changed thousands of lives. A true leader who walks with the people.',
    stars: 5,
    initial: 'R',
    color: 'bg-[#003366]',
  },
  {
    name: 'Sunita Devi',
    role: 'Women Self-Help Group, Murshadpur',
    review: 'Because of Savinder ji\'s support, our women\'s group got the resources and training we needed. He is not just a leader but a guardian of women\'s dignity and empowerment in our region.',
    stars: 5,
    initial: 'S',
    color: 'bg-pink-500',
  },
  {
    name: 'Mohit Gurjar',
    role: 'Youth Leader, Gurjar Mahasabha',
    review: 'I witnessed firsthand how Savinder Bhati ji transformed our youth programs. His vision for young leaders is exceptional. He is an inspiration to every young person in the community.',
    stars: 5,
    initial: 'M',
    color: 'bg-[#FF9933]',
  },
  {
    name: 'Dr. Anil Verma',
    role: 'Social Worker & Physician',
    review: 'Our health camps became a reality because of his unwavering support. Savinder ji brings both leadership and humility — a rare combination that makes him truly exceptional.',
    stars: 5,
    initial: 'A',
    color: 'bg-green-600',
  },
  {
    name: 'Priya Singh',
    role: 'Teacher, Government School',
    review: 'Thanks to Savinder Bhati ji\'s education initiative, many students from poor families received scholarships. His commitment to education is genuine and deeply impactful.',
    stars: 5,
    initial: 'P',
    color: 'bg-purple-600',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1))
  const next = () => setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1))

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gradient-to-br from-[#001a33] via-[#003366] to-[#001a33] relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#FF9933]/10 blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 border border-[#FF9933]/30 text-[#FF9933] text-xs font-bold font-[Poppins] tracking-widest uppercase px-5 py-2 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-[Poppins] text-white">
            What People{' '}
            <span className="bg-gradient-to-r from-[#FF9933] to-[#D4AF37] bg-clip-text text-transparent">
              Say
            </span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-8 lg:p-12 text-center"
            >
              <FaQuoteLeft size={36} className="text-[#FF9933]/40 mx-auto mb-6" />

              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].stars)].map((_, i) => (
                  <FaStar key={i} size={18} className="text-[#D4AF37]" />
                ))}
              </div>

              <p className="text-white/85 font-[Inter] text-base lg:text-lg leading-relaxed mb-8 italic">
                "{testimonials[current].review}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonials[current].color} flex items-center justify-center text-white font-bold font-[Poppins] text-lg shadow-xl`}>
                  {testimonials[current].initial}
                </div>
                <div className="text-left">
                  <p className="text-white font-bold font-[Poppins] text-sm">{testimonials[current].name}</p>
                  <p className="text-white/50 text-xs font-[Inter]">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 cursor-pointer"
            >
              <FaChevronLeft size={16} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    i === current ? 'w-6 h-2.5 bg-[#FF9933]' : 'w-2.5 h-2.5 bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 cursor-pointer"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
