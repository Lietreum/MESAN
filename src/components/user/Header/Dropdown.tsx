import { useState } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../../admin/ClickOutside';

interface DropdownProps {
  profileName: string | null; // Accepts the profile name or null
}

const DropdownUser: React.FC<DropdownProps> = ({ profileName }) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
//i change the name, tried to fetch it from the backend but gpt 4.0 is on the limit lmao, i try it again tomorrow, zka was here
  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
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
        <div
          className="absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
        >
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
              <Link
                to="/Profile-page"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/walletsiswa"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                Wallet
              </Link>
            </li>
          <li>
              <Link
                to="/transactionhistory"
                className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
              >
                Transaction History
              </Link>
            </li>
          </ul>
          <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
            Log Out
          </button>
        </div>
      )}
      {/* Dropdown End */}
    </ClickOutside>
  );
};

export default DropdownUser;
