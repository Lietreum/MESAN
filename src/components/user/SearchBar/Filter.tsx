import React, { useState, useEffect, useRef } from 'react';

const SortDropdown: React.FC = () => {
  const [openSort, setOpenSort] = useState<boolean>(false);
  const [sortType, setSortType] = useState<string>('Kategori'); // Default category
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref for dropdown

  const handleSortChange = (type: string) => {
    setSortType(type);
    setOpenSort(false); // Close the dropdown after selection
  };

  const toggleSortDropdown = () => {
    setOpenSort(prev => !prev); // Toggle the dropdown on click
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenSort(false);
      }
    };

    // Add event listener to listen for clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div className="relative">
        <button
          onClick={toggleSortDropdown} // Toggle dropdown on button click
          className="flex text-gray-600 bg-gray-200 items-center justify-start px-4 py-2 mt-2 text-lg text-left rounded-lg transition-all duration-200 hover:bg-gray-100"
          style={{ width: 'auto' }}
        >
          <span>{sortType}</span>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className={`w-6 h-6 transition-transform duration-200 transform ${openSort ? 'rotate-180' : 'rotate-0'}`}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        {openSort && (
          <div className="absolute z-50 origin-top-right mt-2 w-56">
            <div className="px-4 pt-2 pb-2 bg-white rounded-md shadow-lg">
              <div className="flex flex-col">
                {sortType !== 'Koperasi' && (
                  <button
                    onClick={() => handleSortChange('Koperasi')}
                    className="flex items-center justify-start w-full p-4 rounded-lg text-gray-600 hover:bg-gray-200 hover:text-blue-600 transition-all duration-200"
                  >
                    Koperasi
                  </button>
                )}

                {sortType !== 'Kantin' && (
                  <button
                    onClick={() => handleSortChange('Kantin')}
                    className="flex items-center justify-start w-full p-4 rounded-lg text-gray-600 hover:bg-gray-200 hover:text-blue-600 transition-all duration-200"
                  >
                    Kantin
                  </button>
                )}

                {sortType !== 'Hydrofour' && (
                  <button
                    onClick={() => handleSortChange('Hydrofour')}
                    className="flex items-center justify-start w-full p-4 rounded-lg text-gray-600 hover:bg-gray-200 hover:text-blue-600 transition-all duration-200"
                  >
                    Hydrofour
                  </button>
                )}

                {sortType !== 'All' && (
                  <button
                    onClick={() => handleSortChange('All')}
                    className="flex items-center justify-start w-full p-4 rounded-lg text-gray-600 hover:bg-gray-200 hover:text-blue-600 transition-all duration-200"
                  >
                    All
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortDropdown;
