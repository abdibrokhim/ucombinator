'use client'
import { motion } from 'motion/react'
import {
  LATEST_NEWS,
} from './data'
import { Card } from '@/components/app/card'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Home() {
  return (
    <motion.main
      className="space-y-12 md:space-y-24 px-4 py-4 md:px-12 md:py-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >

      {/* Hero */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1 text-center py-12 md:py-20">
          <p className="text-zinc-800 dark:text-zinc-300 text-3xl md:text-5xl max-w-2xl mx-auto font-normal">
            We help the daring build legendary companies.
          </p>
        </div>
      </motion.section>

      {/* Latest News */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="grid grid-cols-1 gap-0 md:gap-4 sm:grid-cols-2">
          {LATEST_NEWS.map((news, index) => (
            <Card key={news.id} item={news} index={index} length={LATEST_NEWS.length} />
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
