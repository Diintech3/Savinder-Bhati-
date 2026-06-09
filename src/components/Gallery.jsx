import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiZoomIn } from 'react-icons/fi'

const categories = ['All', 'Events', 'Community', 'Speeches', 'Social Work']

const gallery = [
  { id: 1, category: 'Events', title: 'National Conference', tall: true, img: '/img1.jpeg' },
  { id: 2, category: 'Community', title: 'Village Meeting', tall: false, img: '/img2.jpeg' },
  { id: 3, category: 'Speeches', title: 'Public Address', tall: false, img: '/img3.jpeg' },
  { id: 4, category: 'Social Work', title: 'Health Camp', tall: true, img: '/img4.jfif' },
  { id: 5, category: 'Events', title: 'Cultural Program', tall: false, img: '/img5.jpg' },
  { id: 6, category: 'Community', title: 'Youth Rally', tall: true, img: '/img6.jfif' },
  { id: 7, category: 'Speeches', title: 'Stage Presence', tall: false, img: '/img7.jfif' },
  { id: 8, category: 'Social Work', title: 'Tree Plantation', tall: false, img: '/img8.jfif' },
  { id: 9, category: 'Events', title: 'Award Ceremony', tall: true, img: '/img10.jfif' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? gallery : gallery.filter(g => g.category === active)

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-gray-50 dark:bg-[#060D1A]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#FF9933] text-xs font-bold font-[Poppins] tracking-widest uppercase px-5 py-2 rounded-full mb-4">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-[Poppins] text-[#003366] dark:text-white">
            Moments of{' '}
            <span className="bg-gradient-to-r from-[#FF9933] to-[#D4AF37] bg-clip-text text-transparent">
              Leadership
            </span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-[Poppins] transition-all duration-200 cursor-pointer ${
                active === cat
                  ? 'bg-gradient-to-r from-[#003366] to-[#0055AA] text-white shadow-lg shadow-blue-900/30'
                  : 'bg-white dark:bg-[#111827] text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-[#FF9933]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelected(item)}
              className={`${item.tall ? 'h-72' : 'h-48'} rounded-2xl relative overflow-hidden cursor-pointer group break-inside-avoid`}
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <FiZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold font-[Poppins] text-sm">{item.title}</p>
                <p className="text-white/70 text-xs font-[Inter]">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={e => e.stopPropagation()}
                className="w-full max-w-lg h-80 rounded-3xl relative shadow-2xl overflow-hidden"
              >
                <img src={selected.img} alt={selected.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white cursor-pointer"
                >
                  <FiX size={20} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
                  <p className="text-white font-bold font-[Poppins] text-xl">{selected.title}</p>
                  <p className="text-white/70 font-[Inter]">{selected.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
