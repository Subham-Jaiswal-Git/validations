import { useState } from "react";
// import SearchBox from "./SearchBox"; // Import the child component
import SearchBox from "../Components/SearchBox";
const suggestionsList = [
  { category: "Fruits", name: "Apple" },
  { category: "Fruits", name: "Banana" },
  { category: "Fruits", name: "Cherry" },
  { category: "Fruits", name: "Date" },
  { category: "Fruits", name: "Grape" },
  { category: "Fruits", name: "Mango" },
  { category: "Fruits", name: "Orange" },
  { category: "Fruits", name: "Peach" },
  { category: "Fruits", name: "Pineapple" },
  { category: "Fruits", name: "Strawberry" },
  { category: "Vegetables", name: "Carrot" },
  { category: "Vegetables", name: "Broccoli" },
  { category: "Vegetables", name: "Spinach" }
];

export default function SearchContainer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <SearchBox 
      query={query} 
      setQuery={setQuery} 
      category={category} 
      setCategory={setCategory} 
      suggestionsList={suggestionsList} 
    />
  );
}
