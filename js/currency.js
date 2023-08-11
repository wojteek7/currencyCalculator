let currencyOption = document.querySelector(".js-currency");
let valueElement = document.querySelector(".js-value");
let fieldsetElement = document.querySelector(".js-form");
let currencyResult = document.querySelector(".js-result");

let EUR = 4.59;
let USD = 4.16;
let HRK = 0.60;

fieldsetElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyOption.value;
    let value = valueElement.value;
    let result = currencyResult.value;

    switch (currency) {
        case "EUR":
            result = value / EUR;
            break;

        case "USD":
            result = value / USD;
            break;

        case "HRK":
            result = value / HRK;
            break;
    }

 currencyResult.innerHTML = `${result.toFixed(2)} ${currency}<strong>`;
});




