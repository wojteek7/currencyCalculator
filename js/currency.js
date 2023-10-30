{
  const calculateResult = (value, currency) => {
    const EUR = 4.59;
    const USD = 4.16;
    const HRK = 0.6;

    switch (currency) {
      case "EUR":
        return value / EUR;

      case "USD":
        return value / USD;

      case "HRK":
        return value / HRK;
    }
  };
  const init = () => {
    const fieldsetElement = document.querySelector(".js-form");

    fieldsetElement.addEventListener("submit", (event) => {
      event.preventDefault();

      const valueElement = document.querySelector(".js-value");
      const resultElement = document.querySelector(".js-result");
      const currencyElement = document.querySelector(".js-currency");

      const currency = currencyElement.value;
      const value = valueElement.value;

      const result = calculateResult(value, currency);

      resultElement.innerHTML = `${result.toFixed(2)} ${currency}<strong>`;
    });
  };
  init();
}
