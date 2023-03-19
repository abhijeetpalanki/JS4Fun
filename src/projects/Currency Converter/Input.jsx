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
        className="bg-transparent border-none text-white pl-3"
      />
      <select
        value={currency}
        onChange={(ev) => onCurrencyChange(ev.target.value)}
        className="bg-transparent border-none text-white p-4"
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
