import { motion } from 'framer-motion'
import { FaCalendarAlt, FaArrowRight, FaNewspaper } from 'react-icons/fa'

const news = [
  {
    tag: 'Leadership',
    tagColor: 'bg-blue-100 dark:bg-blue-900/30 text-[#003366] dark:text-blue-300',
    title: 'Savinder Bhati Elected as National VP of Gurjar Mahasabha',
    desc: 'In a landmark decision, Savinder Bhati Murshadpur was unanimously elected as the National Vice President, representing lakhs of community members.',
    date: 'March 15, 2024',
    readTime: '3 min read',
    accent: 'border-l-[#003366]',
  },
  {
    tag: 'Social Work',
    tagColor: 'bg-orange-100 dark:bg-orange-900/30 text-[#FF9933] dark:text-orange-300',
    title: 'Mega Health Camp Organized for 2000+ Families in Greater Noida',
    desc: 'A landmark free health camp providing medical consultations, medicines, and diagnostics for over 2000 underprivileged families.',
    date: 'February 10, 2024',
    readTime: '4 min read',
    accent: 'border-l-[#FF9933]',
  },
  {
    tag: 'Education',
    tagColor: 'bg-yellow-100 dark:bg-yellow-900/30 text-[#D4AF37] dark:text-yellow-300',
    title: 'New Scholarship Program Launched for Rural Students',
    desc: 'Under Savinder Bhati\'s initiative, a scholarship program was launched supporting 500 meritorious rural students with full financial aid.',
    date: 'January 28, 2024',
    readTime: '3 min read',
    accent: 'border-l-[#D4AF37]',
  },
  {
    tag: 'Community',
    tagColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    title: '10,000 Trees Planted Across Murshadpur Region',
    desc: 'An environmental drive led to the plantation of 10,000 saplings across 25 villages, setting a new benchmark for green community leadership.',
    date: 'December 5, 2023',
    readTime: '2 min read',
    accent: 'border-l-green-500',
  },
  {
    tag: 'Youth',
    tagColor: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    title: 'Youth Leadership Summit Draws 1000+ Young Leaders',
    desc: 'The annual Youth Leadership Summit organized by Savinder Bhati saw record participation from students and young professionals.',
    date: 'November 18, 2023',
    readTime: '5 min read',
    accent: 'border-l-purple-500',
  },
  {
    tag: 'Awards',
    tagColor: 'bg-[#D4AF37]/10 text-[#D4AF37]',
    title: 'National Social Leadership Excellence Award 2023',
    desc: 'Savinder Bhati was honored with the National Social Leadership Excellence Award for his outstanding contributions to community welfare.',
    date: 'October 2, 2023',
    readTime: '2 min read',
    accent: 'border-l-[#D4AF37]',
  },
]

export default function News() {
  return (
    <section id="news" className="py-24 bg-white dark:bg-[#0A0F1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#FF9933] text-xs font-bold font-[Poppins] tracking-widest uppercase px-5 py-2 rounded-full mb-4">
            News & Media
          </span>
          <h2 className="text-4xl lg:text-5xl font-black font-[Poppins] text-[#003366] dark:text-white">
            Latest{' '}
            <span className="bg-gradient-to-r from-[#FF9933] to-[#D4AF37] bg-clip-text text-transparent">
              Updates
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`bg-white dark:bg-[#111827] rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-white/5 border-l-4 ${item.accent} transition-all duration-300 cursor-pointer group`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold font-[Poppins] px-3 py-1 rounded-full ${item.tagColor}`}>
                  {item.tag}
                </span>
                <FaNewspaper size={16} className="text-gray-300 dark:text-gray-600" />
              </div>
              <h3 className="font-bold font-[Poppins] text-[#003366] dark:text-white text-base leading-snug mb-3 group-hover:text-[#FF9933] transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-[Inter] leading-relaxed mb-4 line-clamp-3">
                {item.desc}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-[Inter]">
                  <FaCalendarAlt size={11} />
                  <span>{item.date}</span>
                  <span>·</span>
                  <span>{item.readTime}</span>
                </div>
                <FaArrowRight size={13} className="text-[#FF9933] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
