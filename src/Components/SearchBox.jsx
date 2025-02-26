import { useState } from "react";

function SearchBox({ query, setQuery, category, setCategory, suggestionsList,inputClass,listClass,categoryClass,listClass2 }) {
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

        <>
            <input type="text" className={inputClass} placeholder="Search..."
                value={query} onChange={handleChange}
            />

            {filteredSuggestions.length > 0 && (
                <ul className={listClass}>
                    {filteredSuggestions.map((suggestion, index) => (
                        <li key={index} className={listClass2}
                            onClick={() => setQuery(suggestion.name)}>
                            {suggestion.name} ({suggestion.category})
                        </li>
                    ))}
                </ul>
            )}

            <select className={categoryClass}
                value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
            </select>
        </>
    );
}

export default SearchBox;
