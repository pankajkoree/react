import React, { useId } from "react";

function InputBox({
  label,
  amount,
  className = "",
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div
      className={`w-[90%] bg-white h-[150px] rounded-xl flex text-[12px] sm:text-xl md:text-2xl  ${className}`}
    >
      <div className="w-[50%] flex flex-col justify-center">
        <label htmlFor={amountInputId} className="mb-2 pl-5">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          disabled={amountDisable}
          className="w-[117.938px] sm:w-[150px]  md:w-[150px] pl-5 rounded-lg h-[40px] mx-5 shadow-2xl border-2"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-[50%] flex flex-col justify-center items-end pr-5">
        <label htmlFor="" className="mb-2">
          Currency Type
        </label>

        <select
          className="w-[117.938px] sm:w-[150px] md:w-[150px] rounded-lg h-[40px] shadow-2xl border-2"
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
