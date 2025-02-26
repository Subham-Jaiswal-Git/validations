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
    <div className="relative w-64 p-4">
    <SearchBox 
      query={query} 
      setQuery={setQuery} 
      category={category} 
      setCategory={setCategory} 
      suggestionsList={suggestionsList} 
      inputClass="w-full p-2 mb-1 border rounded-md shadow-md"
      listClass="w-full mb-1 bg-white border rounded-md shadow-md"
      categoryClass="w-full p-2 mb-1 border rounded-md shadow-md"
      listClass2="p-2 hover:bg-gray-200 cursor-pointer"
    />
    </div>
  );
}
