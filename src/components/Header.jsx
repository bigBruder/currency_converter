import React from 'react';
import '../styles/header.scss';

const Header = ({ USDRate, EURRate, fromSelect, toSelect }) => (
  <header className="header">
    <h2 className="header-title">Aктуальний курс валют по відношенню до гривні (UAH)</h2>
    <div className="header-elem">
      <span className="header-elem__name">{fromSelect}</span>
      <span className="header-elem__price">{USDRate}</span>
    </div>
    <div className="header-elem">
      <span className="header-elem__name">{toSelect}</span>
      <span className="header-elem__price">{EURRate}</span>
    </div>
  </header>
);

export default Header;
