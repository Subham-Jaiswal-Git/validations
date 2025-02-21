import { useState } from "react";

function SearchBox({ query, setQuery, category, setCategory, suggestionsList }) {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    if (value) {
      const filtered = suggestionsList.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) &&
        (category === "All" || item.category === category)
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  return (
    <div className="relative w-64 p-4">
      <select className="w-full p-2 mb-2 border rounded-md"
        value={category} onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
      </select>
      <input type="text" className="w-full p-2 border rounded-md" placeholder="Search..."
        value={query} onChange={handleChange}
      />
      {filteredSuggestions.length > 0 && (
        <ul className="absolute w-full mt-1 bg-white border rounded-md shadow-md">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index} className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => setQuery(suggestion.name)}
            >
              {suggestion.name} ({suggestion.category})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;
