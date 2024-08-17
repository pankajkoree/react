import { useEffect, useState } from "react";

function useCurrencyInfo(from, to) {
  const [data, setData] = useState();

  useEffect(() => {
    setData(null);
    fetch(`https://api.frankfurter.app/latest?base=${from}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates[to]);
      });
  }, [from, to]);

  return data;
}

export default useCurrencyInfo;
