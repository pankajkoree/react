import React from "react";

export default function CountryCard({
  name,
  flag,
  capital,
  population,
  region,
}) {
  return (
    <a className="country-card" href={`/country?name=${name}`}>
      <img src={flag} alt={name + "flag"} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </a>
  );
}
