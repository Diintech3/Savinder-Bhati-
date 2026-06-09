import { motion } from 'framer-motion'
import { FaGraduationCap, FaHeartbeat, FaFemale, FaTree, FaHandsHelping, FaTint, FaHome, FaBolt } from 'react-icons/fa'

const works = [
  { icon: <FaGraduationCap size={32} />, title: 'Education Support', desc: 'Free coaching, scholarships, and school supplies for underprivileged children.', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30', iconBg: 'bg-[#003366]' },
  { icon: <FaHeartbeat size={32} />, title: 'Health Camps', desc: 'Free medical checkups, medicines, and health awareness in rural areas.', color: 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800/30', iconBg: 'bg-red-500' },
  { icon: <FaFemale size={32} />, title: "Women's Welfare", desc: 'Self-help groups, skill training, and safety programs for women.', color: 'bg-pink-50 dark:bg-pink-900/20 border-pink-100 dark:border-pink-800/30', iconBg: 'bg-pink-500' },
  { icon: <FaBolt size={32} />, title: 'Youth Empowerment', desc: 'Sports, leadership, and career guidance programs for young people.', color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800/30', iconBg: 'bg-[#FF9933]' },
  { icon: <FaTree size={32} />, title: 'Tree Plantation', desc: 'Environmental drives planting thousands of trees across the region.', color: 'bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800/30', iconBg: 'bg-green-600' },
  { icon: <FaHome size={32} />, title: 'Community Development', desc: 'Infrastructure, cleanliness, and development of local community areas.', color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800/30', iconBg: 'bg-purple-600' },
  { icon: <FaTint size={32} />, title: 'Blood Donation', desc: 'Regular blood donation camps organized to help hospitals and patients.', color: 'bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800/30', iconBg: 'bg-red-600' },
  { icon: <FaHandsHelping size={32} />, title: 'Relief Work', desc: 'Disaster relief and support for flood, drought, and crisis-affected families.', color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-100 dark:border-yellow-800/30', iconBg: 'bg-[#D4AF37]' },
]

export default function SocialWork() {
  return (
    <section id="socialwork" className="py-24 bg-white dark:bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#FF9933] text-xs font-bold font-[Poppins] tracking-widest uppercase px-5 py-2 rounded-full mb-4">
            Social Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-black font-[Poppins] text-[#003366] dark:text-white">
            Serving{' '}
            <span className="bg-gradient-to-r from-[#FF9933] to-[#D4AF37] bg-clip-text text-transparent">
              Society
            </span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-base font-[Inter] max-w-xl mx-auto">
            Every initiative is driven by the belief that social service is the highest form of leadership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -8 }}
              className={`${w.color} border rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl cursor-default`}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`w-16 h-16 rounded-2xl ${w.iconBg} flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}
              >
                {w.icon}
              </motion.div>
              <h3 className="font-bold font-[Poppins] text-[#003366] dark:text-white text-base mb-2">{w.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-[Inter] leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
