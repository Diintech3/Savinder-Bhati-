import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#FF9933] text-xs font-bold font-[Poppins] tracking-widest uppercase px-5 py-2 rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-4xl lg:text-5xl font-black font-[Poppins] text-[#003366] dark:text-white">
            Get In{' '}
            <span className="bg-gradient-to-r from-[#FF9933] to-[#D4AF37] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-base font-[Inter]">
            Reach out for collaboration, social initiatives, or community support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-gradient-to-br from-[#003366] to-[#001a33] rounded-3xl p-8 text-white shadow-2xl shadow-blue-900/30">
              <h3 className="text-2xl font-black font-[Poppins] mb-2">Savinder Bhati Murshadpur</h3>
              <p className="text-white/60 font-[Inter] text-sm mb-8">राष्ट्रीय उपाध्यक्ष – अखिल भारतीय गुर्जर महासभा</p>

              {[
                { icon: <FaMapMarkerAlt />, label: 'Address', value: 'Murshadpur, Greater Noida, Uttar Pradesh, India' },
                { icon: <FaEnvelope />, label: 'Email', value: 'savinderbhati@gmail.com' },
                { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+91 XXXXX XXXXX' },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#FF9933]/20 border border-[#FF9933]/30 flex items-center justify-center text-[#FF9933] shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-white/50 text-xs font-[Inter] mb-0.5">{c.label}</p>
                    <p className="text-white font-medium font-[Inter] text-sm">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-[#003366]/10 to-[#FF9933]/5 border border-[#003366]/10 dark:border-white/5 rounded-2xl h-48 flex items-center justify-center overflow-hidden">
              <iframe
                title="Murshadpur Location"
                src="https://maps.google.com/maps?q=Murshadpur,Greater+Noida,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full rounded-2xl"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-[#111827] rounded-3xl p-8 shadow-xl shadow-black/5 dark:shadow-black/30 border border-gray-100 dark:border-white/5"
          >
            <h3 className="text-xl font-bold font-[Poppins] text-[#003366] dark:text-white mb-6">Send a Message</h3>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30 text-green-700 dark:text-green-400 rounded-xl p-4 mb-6 text-sm font-[Inter] font-medium"
              >
                ✅ Message sent successfully! We'll get back to you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your full name' },
                { key: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-xs font-semibold font-[Poppins] text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-[#003366] dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm font-[Inter] focus:outline-none focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/20 transition-all duration-200"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-semibold font-[Poppins] text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-[#003366] dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm font-[Inter] focus:outline-none focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/20 transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#003366] to-[#0055AA] text-white py-4 rounded-xl font-semibold font-[Poppins] text-sm shadow-xl shadow-blue-900/30 cursor-pointer mt-2"
              >
                <FaPaperPlane size={15} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
