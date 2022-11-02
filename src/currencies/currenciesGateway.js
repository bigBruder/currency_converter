export const baseUrl =
  'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?jsonhttps://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?';

export const fetchCurrenciesList = () => fetch(baseUrl).then(res => res.json());
