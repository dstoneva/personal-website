import { motion } from 'framer-motion'

const OnScreen = ({ children }) => {
  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        bounce: 0.4,
        duration: 0.4,
      },
    },
  }

  return (
    <motion.div initial={cardVariants.offscreen} animate={cardVariants.onscreen}>
      {children}
    </motion.div>
  )
}

export default OnScreen