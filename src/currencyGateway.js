export const baseUrl =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?jsonhttps://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?';

export const fetchFlightsList = currency =>
  console.log(
    fetch(baseUrl)
      .then(res => res.json())
      .then(response => response.find(currencyObj => currencyObj.cc === currency)),
  );
