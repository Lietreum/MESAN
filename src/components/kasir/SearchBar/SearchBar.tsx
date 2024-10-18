import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        className="w-full px-4 py-2 rounded-full border border-black shadow-sm focus:outline-none focus:ring focus:ring-black"
        placeholder="Find student account"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ backgroundColor: "#ffffff" }} // White background
      />
    </div>
  );
};

export default SearchBar;
