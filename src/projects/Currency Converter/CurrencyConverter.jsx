import axios from "axios";
import { useState, useEffect } from "react";
import Input from "./Input";

const CurrencyConverter = () => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("USD");
  const [currency2, setCurrency2] = useState("INR");
  const [rates, setRates] = useState(["USD"]);

  const format = (number) => {
    return number.toFixed(4);
  };

  const handleAmount1Change = (amount1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  };

  const handleCurrency1Change = (currency1) => {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  };

  const handleAmount2Change = (amount2) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  };

  const handleCurrency2Change = (currency2) => {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  };

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.apilayer.com/fixer/latest?apikey=${process.env.REACT_APP_FIXER_API_KEY}`
        )
        .then((response) => {
          setRates(response.data.rates);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    if (!!rates) {
      handleAmount1Change(amount1);
    }
  }, [rates]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl text-[#eef] text-center mb-10">
        <span className="text-black">Currency</span> Converter
      </h1>
      <Input
        rates={rates}
        amount={amount1}
        currency={currency1}
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
      />
      <Input
        rates={rates}
        amount={amount2}
        currency={currency2}
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
      />
    </div>
  );
};

export default CurrencyConverter;
