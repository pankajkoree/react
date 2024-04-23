import React from "react";
import countriesData from "../countriesData";
import CountryCard from "./CountryCard";

export default function CountriesList() {
  const array = countriesData.map((country, i) => {
    return (
      <CountryCard
        key = {country.name.common}
        name={country.name.common}
        flag={country.flags.svg}
        capital={country.capital?.[0]}
        population={country.population}
        region={country.region}
      />
    );
  });
  return <div className="countries-container">{array}</div>;
}
