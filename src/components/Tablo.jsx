import React from 'react';
import '../styles/tablo.scss';

const Tablo = ({
  fromInputValue,
  toInputValue,
  fromInputChange,
  toInputChange,
  fromSelectChange,
  toSelectChange,
  fromSelect,
  toSelect,
}) => (
  <div className="currency">
    <div className="currency-tablo">
      <input
        className="currency-tablo__value"
        type="text"
        placeholder="Amount..."
        value={fromInputValue}
        onChange={fromInputChange}
      />
      <select className="currency-tablo__select" value={fromSelect} onChange={fromSelectChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="UAH">UAH</option>
        <option value="GBP">GBP</option>
        <option value="CZK">CZK</option>
        <option value="PLN">PLN</option>
        <option value="TRY">TRY</option>
        <option value="BYN">BYN</option>
      </select>
    </div>
    <div className="currency-tablo">
      <input
        className="currency-tablo__value"
        type="text"
        placeholder="Amount..."
        value={toInputValue}
        onChange={toInputChange}
      />
      <select className="currency-tablo__select" value={toSelect} onChange={toSelectChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="UAH">UAH</option>
        <option value="GBP">GBP</option>
        <option value="CZK">CZK</option>
        <option value="PLN">PLN</option>
        <option value="TRY">TRY</option>
        <option value="BYN">BYN</option>
      </select>
    </div>
  </div>
);

export default Tablo;
