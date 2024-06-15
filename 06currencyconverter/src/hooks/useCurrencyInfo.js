// hooks/useCurrencyInfo.js

import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency = "USD") {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the fetched data
        setCurrencyInfo(data.rates);
      })
      .catch((error) => {
        console.error("Error fetching currency info:", error);
      });
  }, [baseCurrency]); // Ensure this effect runs when baseCurrency changes

  return currencyInfo;
}

export default useCurrencyInfo;
