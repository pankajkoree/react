import React from "react";

export default function SelectMenu() {
  return (
    <select className="filter-by-region" id="region-filter">
      <option hidden="">Filter by Region</option>
      <option value="Africa"></option>
      <option value="America"></option>
      <option value="Asia"></option>
      <option value="Europe"></option>
      <option value="Oceania"></option>
    </select>
  );
}
