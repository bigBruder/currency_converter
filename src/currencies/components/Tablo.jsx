import React from 'react';
import '../../styles/tablo.scss';

const Tablo = ({
  setReverseSelect,
  fromInputValue,
  toInputValue,
  fromInputChange,
  toInputChange,
  fromSelectChange,
  toSelectChange,
  fromSelect,
  toSelect,
  rates,
}) => {
  // let style = { flexDirection: 'row' };
  // const reverse = () => {
  //   if (style === { flexDirection: 'row' }) {
  //     return (style = { flexDirection: 'rowReverse' });
  //   }
  //   return (style = { flexDirection: 'row' });
  // };
  return (
    <div className="currency">
      <div className="currency-tablo">
        <input
          className="currency-tablo__value"
          type="text"
          placeholder="Amount..."
          value={fromInputValue}
          onChange={e => fromInputChange(e.target.value)}
        />
        <select className="currency-tablo__select" value={fromSelect} onChange={fromSelectChange}>
          {rates.map(cur => (
            <option key={cur.r030} value={cur.cc}>
              {cur.cc}
            </option>
          ))}
        </select>
      </div>
      <button className="currency__btn" onClick={setReverseSelect}>
        <i className="fa-solid fa-arrow-right-arrow-left"></i>
      </button>
      <div className="currency-tablo">
        <input
          className="currency-tablo__value"
          type="text"
          placeholder="Amount..."
          value={toInputValue}
          onChange={e => toInputChange(e.target.value)}
        />
        <select className="currency-tablo__select" value={toSelect} onChange={toSelectChange}>
          {rates.map(cur => (
            <option key={cur.r030} value={cur.cc}>
              {cur.cc}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Tablo;
