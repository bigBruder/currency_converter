import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tablo from './Tablo';
import Header from './Header';
import { currenciesListSelector } from '../currencies.selectors';
import { getCurrenciesList } from '../currencies.actions';

const Main = ({ getCurrenciesList, currenciesList }) => {
  const [inputValue, setInputValue] = useState({ fromInputValue: '', toInputValue: '' });
  const [select, setSelect] = useState({ fromSelect: 'USD', toSelect: 'EUR' });

  useEffect(() => {
    getCurrenciesList();
  }, []);

  const fromSelectChange = e => setSelect({ ...select, fromSelect: e.target.value });
  const toSelectChange = e => setSelect({ ...select, toSelect: e.target.value });

  const setReverseSelect = () => {
    setSelect({ fromSelect: select.toSelect, toSelect: select.fromSelect });
  };

  if (!currenciesList.currencies.length) {
    return null;
  }

  const fromCurrency = currenciesList.currencies.find(cur => cur.cc === select.fromSelect).rate;
  const toCurrency = currenciesList.currencies.find(cur => cur.cc === select.toSelect).rate;

  const fromInputChange = value => {
    setInputValue({
      fromInputValue: value,
      toInputValue: (value / toCurrency) * fromCurrency,
    });
  };

  const toInputChange = value => {
    setInputValue({
      fromInputValue: (toCurrency / fromCurrency) * value,
      toInputValue: value,
    });
  };

  return (
    <>
      <Header
        USDRate={fromCurrency}
        EURRate={toCurrency}
        fromSelect={select.fromSelect}
        toSelect={select.toSelect}
      />
      <Tablo
        setReverseSelect={setReverseSelect}
        fromSelectChange={fromSelectChange}
        toSelectChange={toSelectChange}
        fromInputChange={fromInputChange}
        toInputChange={toInputChange}
        fromSelect={select.fromSelect}
        toSelect={select.toSelect}
        fromInputValue={inputValue.fromInputValue}
        toInputValue={inputValue.toInputValue}
        rates={currenciesList.currencies}
      />
    </>
  );
};

Main.propTypes = {
  currenciesList: PropTypes.array.isRequired,
  getCurrenciesList: PropTypes.func.isRequired,
};

const mapState = state => ({
  currenciesList: currenciesListSelector(state),
});

const mapDispatch = {
  getCurrenciesList: getCurrenciesList,
};

export default connect(mapState, mapDispatch)(Main);
