{
  const calculateResult = (amount, currency) => {
    const EUR = 4.59;
    const USD = 4.16;
    const HRK = 0.6;

    switch (currency) {
      case "EUR":
        return amount / EUR;

      case "USD":
        return amount / USD;

      case "HRK":
        return amount / HRK;
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyResult = document.querySelector(".js-result");
    const currencyOption = document.querySelector(".js-currency");

    const currency = currencyOption.value;
    const amount = amountElement.value;

    const result = calculateResult(amount, currency);

    currencyResult.innerHTML = `${result.toFixed(2)} ${currency}<strong>`;
  };

  const init = () => {
    const fieldsetElement = document.querySelector(".js-form");

    fieldsetElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
