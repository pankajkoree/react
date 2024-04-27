import React, { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import "../App.css";
import { useOutletContext } from "react-router-dom";
import { themeContext } from "../contexts/ThemeContext";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isDark] = useContext(themeContext);
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === "unmount" ? "" : <CountriesList query={query} />}
    </main>
  );
}
