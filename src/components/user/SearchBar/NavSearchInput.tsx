import React, { useState, useEffect, useRef } from "react";

const SearchComponent: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [items] = useState<string[]>([
    'item shop', 'kaset yopje item', '1¢ items', 'peci item', 'kacamata item', 'item itam'
  ]);
  const [filteredItems, setFilteredItems] = useState<string[]>(items);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Update filtered items based on search
  useEffect(() => {
    setFilteredItems(
      items.filter(item =>
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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Dark overlay when search bar is focused */}
      {open && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        />
      )}

      {/* Search Input */}
      <input
        ref={inputRef}
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={() => setOpen(true)}
        placeholder="Search Here..."
        className="py-3 px-4 w-full rounded border focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-400 shadow relative z-50"
      />

      {/* Filtered Items List */}
      {open && (
        <ul
          ref={dropdownRef}
          className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded shadow max-h-60 overflow-y-auto z-50 scrollbar-thin scrollbar-thumb-gray-300"
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="w-full text-gray-700 py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSearch(item);
                  setOpen(false);
                }}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="w-full text-gray-500 py-2 px-4">
              No items found.
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
