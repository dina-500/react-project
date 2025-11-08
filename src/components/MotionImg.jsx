import { motion } from "framer-motion"
export default function MotionImg(props) {
  return (
    <motion.img
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    />
  )
}
