import { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const countryOptions = {
    AUD: "Australian Dollar",
    BGN: "Bulgarian Lev",
    BRL: "Brazilian Real",
    CAD: "Canadian Dollar",
    CHF: "Swiss Franc",
    CNY: "Chinese Renminbi Yuan",
    CZK: "Czech Koruna",
    DKK: "Danish Krone",
    EUR: "Euro",
    GBP: "British Pound",
    HKD: "Hong Kong Dollar",
    HUF: "Hungarian Forint",
    IDR: "Indonesian Rupiah",
    ILS: "Israeli New Sheqel",
    INR: "Indian Rupee",
    ISK: "Icelandic Króna",
    JPY: "Japanese Yen",
    KRW: "South Korean Won",
    MXN: "Mexican Peso",
    MYR: "Malaysian Ringgit",
    NOK: "Norwegian Krone",
    NZD: "New Zealand Dollar",
    PHP: "Philippine Peso",
    PLN: "Polish Złoty",
    RON: "Romanian Leu",
    SEK: "Swedish Krona",
    SGD: "Singapore Dollar",
    THB: "Thai Baht",
    TRY: "Turkish Lira",
    USD: "United States Dollar",
    ZAR: "South African Rand",
  };
  const options = Object.keys(countryOptions);
  const [amount, setAmount] = useState(0);
  let [from, setFrom] = useState("USD");
  let [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from, to);
  const getConvertedValue = () => {
    console.log(currencyInfo);
    setConvertedAmount(amount * currencyInfo);
  };
  const swap = (e) => {
    e.preventDefault();
    let temp = from;
    from = to;
    to = temp;

    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <>
      <div className="relative flex justify-center top-20 md:top-[200px]">
        <form className="w-[90%] md:w-[60%] h-[500px] bg-custom-gradient flex flex-col justify-center items-center gap-5 rounded-3xl">
          <InputBox
            label="From"
            amount={amount}
            className=""
            onAmountChange={(amount) => {
              console.log(amount);
              setAmount(amount);
            }}
            currencyOptions={options}
            onCurrencyChange={(currency) => {
              console.log(currency);
              setFrom(currency);
              console.log(from);
            }}
            amountDisable={false}
            required
          />
          <button
            className="absolute h-12 md:h-16 w-auto p-4 text-[24px] md:text-[32px] bg-pink-500 flex justify-center items-center text-white rounded-xl top-[175px] md:top-[167px]"
            onClick={swap}
          >
            Swap
          </button>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => {
              console.log(currency);
              setTo(currency);
              console.log(currency);
            }}
            amountDisable
          />
          <button
            className="w-[90%] h-[75px] text-xl sm:text-2xl md:text-3xl bg-green-500 rounded-xl text-white "
            onClick={(e) => {
              e.preventDefault();
              getConvertedValue();
            }}
          >
            Convert {from} to {to}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
