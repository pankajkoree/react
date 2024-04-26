import React from "react";
import "./CountriesListShimmer.css";

export default function CountriesListShimmer() {
  //   new Array(10).fill(undefined).map((el) => {
  //     console.log(el);
  //   });

  return (
    <div className="countries-container">
      {Array.from({ length: 100 }).map((el,i) => {
        return <div key={i} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
}
