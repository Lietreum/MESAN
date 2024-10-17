import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi"; // Import search icon

const SearchComponent: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [items] = useState<string[]>([
    "item shop",
    "kaset yopje item",
    "1¢ items",
    "peci item",
    "kacamata item",
    "item itam",
  ]);
  const [filteredItems, setFilteredItems] = useState<string[]>(items);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Update filtered items based on search
  useEffect(() => {
    setFilteredItems(
      items.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, items]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Dark overlay when search bar is focused */}
      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setOpen(false)} // Close search bar when clicking the overlay
        />
      )}

      {/* Search Input */}
      <div
        className={`flex items-center bg-white border transition-all duration-300 ${
          open ? "w-full" : "w-12"
        } py-2 px-3 rounded-full shadow relative z-50`}
      >
        {/* Lens Icon */}
        <FiSearch
          className="text-gray-500 cursor-pointer"
          size={20}
          onClick={() => setOpen(true)} // Open search bar when clicking the icon
        />

        {/* Input field */}
        <input
          ref={inputRef}
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className={`transition-width duration-500 ${
            open ? "w-full px-3" : "w-0"
          } focus:outline-none bg-transparent`}
          style={{ display: open ? "block" : "none" }}
        />
      </div>

      {/* Filtered Items List */}
      {open && search.length > 0 && (
        <ul
          ref={dropdownRef}
          className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded shadow max-h-60 overflow-y-auto z-50 scrollbar-thin scrollbar-thumb-gray-300"
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="w-full text-gray-700 py-2 px-4 hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition duration-200 ease-in-out"
                onClick={() => {
                  setSearch(item); 
                  // Keep the input open, but hide the dropdown
                  setTimeout(() => {
                    inputRef.current?.focus(); // Keep focus on the search input
                  }, 100);
                }}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="w-full text-gray-500 py-2 px-4">No items found.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
