import { motion } from 'framer-motion';
import img from "../../assets/admin/images/icon/eren2_visual.png";

const NotFoundPage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900 to-blue-800 text-white">
      {/* Floating Anime Character */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 60,
          damping: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="relative w-40 h-40 overflow-visible" // Allow overflow
      >
        <img
          src={img} // Replace with your anime character image URL
          alt="Lost anime character"
          className="border-none" // Explicitly set border to none
          style={{ border: 'none' }} // Inline style to ensure no border
        />
      </motion.div>

      {/* Text and Number 404 Animation */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="mt-6"
      >
        <h1 className="text-8xl font-extrabold text-pink-400 tracking-wide">404</h1>
      </motion.div>

      {/* Animated Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold">
          Oops! The page you are looking for doesn't exist.
        </h2>
        <p className="mt-2 text-lg md:text-xl">
          Maybe you've wandered into another dimension?
        </p>
      </motion.div>

      {/* Back Home Button with Animation */}
      <motion.a
        href="/login"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-8 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-lg font-semibold rounded-lg shadow-lg transition"
      >
        Take Me Back
      </motion.a>
    </div>
  );
};

export default NotFoundPage;
