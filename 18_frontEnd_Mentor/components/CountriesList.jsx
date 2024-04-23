import React, { useState } from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";
import { useState } from "react";

export default function CountriesList() {
  const [query, setQuery] = useState("");
  
  return (
    <>
    <input type="text" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
    <div className="countries-container">
      {countriesData.filter((country) => country.name.common.toLowerCase().includes(query)).map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
          />
        );
      })}
    </div>
    </>
    
  );
}
