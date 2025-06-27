import { X } from "react-feather";
import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const modal = {
  hidden: { opacity: 0,},
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

export default function Modal({ open, onClose, children, images = [] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    trackMouse: true,
  });

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
            className="
              bg-white dark:bg-zinc-900 text-black dark:text-white
              rounded-2xl shadow-xl p-6 relative
              w-full max-w-2xl sm:max-w-lg md:max-w-xl lg:max-w-2xl
              h-auto max-h-[90vh] overflow-y-auto
            "
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 p-1 rounded-lg text-gray-500 bg-white hover:bg-gray-100 transition z-10"
            >
              <X />
            </button>

            {/* Image Carousel */}
            {images.length > 0 && (
              <div className="relative mb-4">
                <div
                  {...handlers}
                  className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-lg mt-6"
                >
                  <Image
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentImageIndex === index ? "bg-white" : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Modal Content */}
            <div className="p-4">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
