import { useState } from "react";
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
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const getConvertedValue = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  const swap = (e) => {
    e.preventDefault();
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <>
      <div className="relative flex justify-center top-[200px]">
        <form className="w-[60%] h-[500px] bg-custom-gradient flex flex-col justify-center items-center gap-5 rounded-3xl">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setAmount(amount)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
            amountDisable={false}
            required
          />
          <button
            className="absolute h-16 w-auto p-4 text-[32px] bg-pink-500 flex justify-center items-center text-white rounded-xl top-[167px]"
            onClick={swap}
          >
            Swap
          </button>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={from}
            amountDisable
          />
          <button
            className="w-[90%] h-[75px] text-3xl bg-green-500 rounded-xl text-white"
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
