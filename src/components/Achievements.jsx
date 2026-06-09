import { motion } from 'framer-motion'
import {
  FaTrophy, FaUsers, FaMicrophone, FaGraduationCap,
  FaHandsHelping, FaTint, FaLeaf, FaHospital
} from 'react-icons/fa'

const achievements = [
  { Icon: FaTrophy,       count: '12+',   title: 'राष्ट्रीय सम्मान',         desc: 'राष्ट्रीय मंचों पर सामाजिक नेतृत्व के लिए सम्मानित — समाज सेवा की पहचान।', g: 'from-[#003366] to-[#0055AA]', sh: 'shadow-blue-900/25' },
  { Icon: FaUsers,        count: '100+',  title: 'सामाजिक अभियान',           desc: 'शिक्षा, स्वास्थ्य और महिला सशक्तिकरण पर 100+ प्रभावशाली सामाजिक अभियान।', g: 'from-[#FF9933] to-[#E07000]', sh: 'shadow-orange-900/20' },
  { Icon: FaMicrophone,   count: '500+',  title: 'जन सभाएं',                 desc: '50+ स्थानों पर हजारों लोगों को संबोधित किया — जनता से सीधा संवाद।',       g: 'from-[#D4AF37] to-[#B8860B]', sh: 'shadow-yellow-900/20' },
  { Icon: FaGraduationCap,count: '1000+', title: 'शैक्षिक कार्यक्रम',        desc: 'छात्रवृत्ति और निःशुल्क कोचिंग से सैकड़ों विद्यार्थियों का भविष्य संवारा।',  g: 'from-[#003366] to-[#0055AA]', sh: 'shadow-blue-900/25' },
  { Icon: FaHandsHelping, count: '5000+', title: 'सामुदायिक सहायता',         desc: 'जरूरतमंद परिवारों को राशन, राहत सामग्री और आवश्यक वस्तुएं वितरित कीं।',   g: 'from-[#FF9933] to-[#E07000]', sh: 'shadow-orange-900/20' },
  { Icon: FaTint,         count: '50+',   title: 'रक्तदान शिविर',            desc: 'नियमित रक्तदान शिविर आयोजित — हजारों यूनिट रक्त एकत्र, अनेक जीवन बचाए।', g: 'from-[#dc2626] to-[#b91c1c]', sh: 'shadow-red-900/20' },
  { Icon: FaLeaf,         count: '10K+',  title: 'पर्यावरण संरक्षण',         desc: '10,000+ पौधे लगाए और स्वच्छता अभियान चलाए — हरा-भरा समाज हमारा लक्ष्य।', g: 'from-[#16a34a] to-[#15803d]', sh: 'shadow-green-900/20' },
  { Icon: FaHospital,     count: '200+',  title: 'स्वास्थ्य शिविर',          desc: 'निःशुल्क चिकित्सा परामर्श और दवाइयां — ग्रामीण और गरीब परिवारों के लिए।',   g: 'from-[#D4AF37] to-[#B8860B]', sh: 'shadow-yellow-900/20' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#FF9933] text-xs font-bold font-[Poppins] tracking-widest uppercase px-5 py-2 rounded-full mb-4">
            उपलब्धियां
          </span>
          <h2 className="text-4xl lg:text-5xl font-black font-[Poppins] text-[#003366]">
            सेवा के{' '}
            <span className="bg-gradient-to-r from-[#FF9933] to-[#D4AF37] bg-clip-text text-transparent">
              मील के पत्थर
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-base font-[Inter] max-w-xl mx-auto">
            हर उपलब्धि समाज के प्रति हमारी प्रतिबद्धता का प्रमाण है।
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl border border-gray-100 hover:border-[#FF9933]/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.g} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.g} flex items-center justify-center text-white mb-4 shadow-lg ${item.sh}`}>
                <item.Icon size={24} />
              </div>
              <p className={`text-xs font-black font-[Poppins] bg-gradient-to-r ${item.g} bg-clip-text text-transparent mb-1`}>
                {item.count}
              </p>
              <h3 className="font-bold font-[Poppins] text-[#003366] text-sm mb-2">{item.title}</h3>
              <p className="text-gray-500 text-xs font-[Inter] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
