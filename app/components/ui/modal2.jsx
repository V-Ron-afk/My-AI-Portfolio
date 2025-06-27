import { X } from "react-feather";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "@/assets/assets";

const backdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const modal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 50,
    scale: 0.98,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export default function Modal({ open, onClose, children, avatar }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/30 backdrop-blur-sm"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative text-black dark:text-white rounded-2xl pt-16 pb-6 px-6 w-full max-w-xl"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Modal Content */}
            <div>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}