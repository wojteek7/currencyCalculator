{
    const calculateResoult = (value, currency) => {
        const EUR = 4.59;
        const USD = 4.16;
        const HRK = 0.60;

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
            const currencyResult = document.querySelector(".js-result");
            const currencyOption = document.querySelector(".js-currency");

            const currency = currencyOption.value;
            const value = valueElement.value;

            const result = calculateResoult(value, currency);

            currencyResult.innerHTML = `${result.toFixed(2)} ${currency}<strong>`;
        });
    };
    init()
};




