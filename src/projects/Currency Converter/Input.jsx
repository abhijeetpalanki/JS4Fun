const Input = ({
  amount,
  currency,
  rates,
  onAmountChange,
  onCurrencyChange,
}) => {
  return (
    <div className="bg-[#335] w-[200px] m-[0_auto_20px] grid grid-cols-[100px_100px] rounded-2xl">
      <input
        type="text"
        value={amount}
        onChange={(ev) => onAmountChange(ev.target.value)}
        className="pl-3 text-white bg-transparent border-none outline-none focus:outline-none"
      />
      <select
        value={currency}
        onChange={(ev) => onCurrencyChange(ev.target.value)}
        className="p-4 text-white bg-transparent border-none"
      >
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency} className="bg-[#335]">
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Input;
