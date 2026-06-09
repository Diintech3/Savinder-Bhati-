import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const timeline = [
  {
    year: '2005',
    title: 'Beginning of Journey',
    desc: 'Started grassroots community work in Murshadpur, organizing local awareness camps and social programs for underprivileged families.',
    color: 'from-[#003366] to-[#0055AA]',
  },
  {
    year: '2008',
    title: 'Social Activism',
    desc: 'Led multiple social campaigns for education rights and rural development. Mobilized youth volunteers for community welfare programs.',
    color: 'from-[#FF9933] to-[#FF6600]',
  },
  {
    year: '2012',
    title: 'Community Leadership',
    desc: 'Elected as key community representative. Established welfare programs for women empowerment, health camps, and blood donation drives.',
    color: 'from-[#D4AF37] to-[#B8860B]',
  },
  {
    year: '2015',
    title: 'Regional Recognition',
    desc: 'Received multiple regional awards for outstanding social service. Expanded outreach to 50+ villages across Greater Noida region.',
    color: 'from-[#003366] to-[#0055AA]',
  },
  {
    year: '2018',
    title: 'Public Programs',
    desc: 'Organized state-level public programs and cultural events. Bridged gap between government schemes and ground-level communities.',
    color: 'from-[#FF9933] to-[#FF6600]',
  },
  {
    year: '2022',
    title: 'National Responsibility',
    desc: 'Appointed as National Vice President of Akhil Bharatiya Gurjar Mahasabha — a milestone representing lakhs of community members nationally.',
    color: 'from-[#D4AF37] to-[#B8860B]',
  },
  {
    year: '2024',
    title: 'Present — Serving India',
    desc: 'Continuing the mission of inclusive development, youth empowerment, and national-level social leadership with renewed dedication.',
    color: 'from-[#003366] to-[#FF9933]',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-gray-50 dark:bg-[#060D1A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#FF9933] text-xs font-bold font-[Poppins] tracking-widest uppercase px-5 py-2 rounded-full mb-4">
            Leadership Journey
          </span>
          <h2 className="text-4xl lg:text-5xl font-black font-[Poppins] text-[#003366] dark:text-white">
            The{' '}
            <span className="bg-gradient-to-r from-[#FF9933] to-[#D4AF37] bg-clip-text text-transparent">
              Journey
            </span>{' '}
            of Dedication
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-base font-[Inter] max-w-xl mx-auto">
            Two decades of relentless service, community building, and national leadership.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#003366] via-[#FF9933] to-[#D4AF37] md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-4 md:gap-8`}
                >
                  {/* Card */}
                  <div className={`ml-14 md:ml-0 md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="bg-white dark:bg-[#111827] rounded-2xl p-6 shadow-xl shadow-black/5 dark:shadow-black/30 border border-gray-100 dark:border-white/5 hover:border-[#FF9933]/30 transition-all duration-300"
                    >
                      <span className={`inline-block bg-gradient-to-r ${item.color} text-white text-xs font-bold font-[Poppins] px-3 py-1 rounded-full mb-3`}>
                        {item.year}
                      </span>
                      <h3 className="font-bold font-[Poppins] text-[#003366] dark:text-white text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-[Inter] leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-[#FF9933] to-[#D4AF37] border-4 border-white dark:border-[#060D1A] shadow-lg flex items-center justify-center">
                    <FaStar size={10} className="text-white" />
                  </div>

                  {/* Empty side for desktop */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
