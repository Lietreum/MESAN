import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../../admin/ClickOutside';
import { motion } from 'framer-motion'; 

interface DropdownProps {
  profileName: string | null; 
}

const DropdownUser: React.FC<DropdownProps> = ({ profileName }) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [animationCompleted, setAnimationCompleted] = useState<boolean>(false); // Track animation state

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  // Handle opening the dropdown
  const handleDropdownToggle = () => {
    setDropdownOpen(prev => !prev);
  };

  // Trigger animation only once on first open
  useEffect(() => {
    if (dropdownOpen) {
      setAnimationCompleted(true); // Animation happens only when the dropdown is first opened
    }
  }, [dropdownOpen]);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={handleDropdownToggle}
        className="flex items-center gap-4"
        to="#"
      > 
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {profileName}
          </span> 
        </span>

        <span className="h-12 w-12 rounded-full">
          <img src='/prof_img.jpg' alt="User" />
        </span>
      </Link>

      {/* Dropdown Start */}
      {dropdownOpen && (
        <motion.div
          className="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
          initial={animationCompleted ? "visible" : "hidden"} // Only animate if animationCompleted is true
          animate="visible"
          exit="hidden"
          variants={dropdownVariants}
        >
          <motion.ul 
            className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark"
          >
            <motion.li variants={itemVariants}>
              <Link
                to="/Profile-page"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                Profile
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                to="/walletsiswa"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                Wallet
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                to="/transactionhistory"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                Transaction History
              </Link>
            </motion.li>
          </motion.ul>
          <motion.button 
            className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            variants={itemVariants}
          >
            Log Out
          </motion.button>
        </motion.div>
      )}
      {/* Dropdown End */}
    </ClickOutside>
  );
};

export default DropdownUser;
