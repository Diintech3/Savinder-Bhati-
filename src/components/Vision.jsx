import { motion } from 'framer-motion'
import { FaBullseye, FaEye, FaGraduationCap, FaBriefcase, FaUsers, FaHome, FaMobile, FaGlobe } from 'react-icons/fa'

const mission = [
  { Icon: FaGraduationCap, text: 'हर बच्चे को गुणवत्तापूर्ण शिक्षा मिले' },
  { Icon: FaBriefcase,    text: 'युवाओं को रोजगार और स्वरोजगार के अवसर' },
  { Icon: FaUsers,        text: 'युवा नेतृत्व और सामाजिक भागीदारी' },
  { Icon: FaHome,         text: 'ग्रामीण क्षेत्रों का सर्वांगीण विकास' },
  { Icon: FaMobile,       text: 'डिजिटल इंडिया — तकनीक से जन-जन तक' },
  { Icon: FaBullseye,     text: 'समाज की नि:स्वार्थ सेवा प्रतिदिन' },
]

const vision = [
  { Icon: FaGlobe,         text: 'एक समावेशी और विकसित भारत का निर्माण' },
  { Icon: FaUsers,         text: 'सशक्त समुदाय, आत्मनिर्भर परिवार' },
  { Icon: FaEye,           text: 'हर बच्चे के लिए बेहतर भविष्य' },
  { Icon: FaGraduationCap, text: 'आधुनिक और प्रगतिशील नेतृत्व' },
  { Icon: FaHome,          text: 'पारदर्शी और जवाबदेह शासन व्यवस्था' },
  { Icon: FaBriefcase,     text: 'ईमानदार और समर्पित लोक सेवा' },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 25 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.4 } }),
}

export default function Vision() {
  return (
    <section id="vision" className="py-16 sm:py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#FF9933] text-xs font-bold font-[Poppins] tracking-widest uppercase px-5 py-2 rounded-full mb-4">
            मिशन और विजन
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-[Poppins] text-[#003366]">
            हमारे{' '}
            <span className="bg-gradient-to-r from-[#FF9933] to-[#D4AF37] bg-clip-text text-transparent">
              संकल्प
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-base font-[Inter] max-w-xl mx-auto">
            सविंदर भाटी जी की सोच — एक बेहतर समाज, एक मजबूत राष्ट्र।
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#003366] to-[#001a33] rounded-3xl p-5 sm:p-8 shadow-2xl shadow-blue-900/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                <FaBullseye size={26} className="text-[#FF9933]" />
              </div>
              <div>
                <h3 className="text-2xl font-black font-[Poppins] text-white">हमारा मिशन</h3>
                <p className="text-white/50 text-sm font-[Inter]">जो हम हर दिन करते हैं</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {mission.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF9933] to-[#E07000] flex items-center justify-center text-white shrink-0">
                    <item.Icon size={16} />
                  </div>
                  <span className="text-white/80 font-[Inter] text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-[#FF9933]/15 rounded-3xl p-5 sm:p-8 shadow-xl shadow-orange-100/50"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#FF9933]/10 flex items-center justify-center shrink-0">
                <FaEye size={26} className="text-[#FF9933]" />
              </div>
              <div>
                <h3 className="text-2xl font-black font-[Poppins] text-[#003366]">हमारा विजन</h3>
                <p className="text-gray-400 text-sm font-[Inter]">जो भविष्य हम बना रहे हैं</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {vision.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center gap-4 bg-gray-50 hover:bg-[#FF9933]/5 border border-gray-100 hover:border-[#FF9933]/20 rounded-xl px-4 py-3 transition-all duration-300 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#003366] to-[#0055AA] flex items-center justify-center text-white shrink-0">
                    <item.Icon size={16} />
                  </div>
                  <span className="text-[#003366]/80 font-[Inter] text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
