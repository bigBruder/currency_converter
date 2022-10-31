import React, { useState, useEffect } from 'react';
import Tablo from './components/Tablo';
import Header from './components/Header';

import { baseUrl } from './currencyGateway';

const App = () => {
  const [currency, setCurrency] = useState({ fromCurrency: 1, toCurrency: 1 });

  const [select, setSelect] = useState({ fromSelect: 'USD', toSelect: 'EUR' });
  const fromSelectChange = e => setSelect({ ...select, fromSelect: e.target.value });
  const toSelectChange = e => setSelect({ ...select, toSelect: e.target.value });

  const [inputValue, setInputValue] = useState({ fromInputValue: '', toInputValue: '' });
  const fromInputChange = e => {
    setInputValue({
      fromInputValue: e.target.value,
      toInputValue: (e.target.value / currency.toCurrency) * currency.fromCurrency,
    });
  };
  const toInputChange = e => {
    setInputValue({
      fromInputValue: (currency.toCurrency / currency.fromCurrency) * e.target.value,
      toInputValue: e.target.value,
    });
  };

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(response => {
        !(select.fromSelect === 'UAH' || select.toSelect === 'UAH')
          ? setCurrency({
              fromCurrency: response.find(cur => cur.cc === select.fromSelect).rate,
              toCurrency: response.find(cur => cur.cc === select.toSelect).rate,
            })
          : select.fromSelect === select.toSelect
          ? setCurrency({
              fromCurrency: 1,
              toCurrency: 1,
            })
          : select.fromSelect === 'UAH' && select.toSelect !== 'UAH'
          ? setCurrency({
              fromCurrency: 1,
              toCurrency: response.find(cur => cur.cc === select.toSelect).rate,
            })
          : setCurrency({
              fromCurrency: response.find(cur => cur.cc === select.fromSelect).rate,
              toCurrency: 1,
            });
      });
  }, [select]);

  return (
    <>
      <Header
        USDRate={currency.fromCurrency}
        EURRate={currency.toCurrency}
        fromSelect={select.fromSelect}
        toSelect={select.toSelect}
      />
      <Tablo
        fromSelectChange={fromSelectChange}
        toSelectChange={toSelectChange}
        fromInputChange={fromInputChange}
        toInputChange={toInputChange}
        fromSelect={select.fromSelect}
        toSelect={select.toSelect}
        fromInputValue={inputValue.fromInputValue}
        toInputValue={inputValue.toInputValue}
      />
    </>
  );
};

export default App;
