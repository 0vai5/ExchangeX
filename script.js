const currency1Select = document.querySelector(".currency1");
const currency2Select = document.querySelector(".currency2");
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convertBtn');
const conversionRateDisplay = document.getElementById('rate');
const convertedAmountDisplay = document.getElementById('converted');

let currencyData;

fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_ZQt7tp2SGLrja3l7dVXG3oTa0Vp6YI8joIBSrNJH")
  .then((response) => response.json())
  .then((responseData) => {
     console.log(responseData.data)
    currencyData = responseData.data;
    currencySelection(currencyData);
   
  });

function currencySelection(currencyData) {
  for (const code in currencyData) {
    const option1 = document.createElement("option");
    option1.value = code;
    option1.textContent = code;
    currency1Select.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = code;
    option2.textContent = code;
    currency2Select.appendChild(option2);
  }
}

convertBtn.addEventListener('click', () => {
  const fromCurrency = currency1Select.value;
  const toCurrency = currency2Select.value;
  amount = parseFloat(amountInput.value);

  if (isNaN(amount)) {
    console.log('Please enter a valid amount.');
    return;
  }

  if (!fromCurrency || !toCurrency) {
    console.log('Please select currencies.');
    return;
  }

  const fromCurrencyValue = currencyData[fromCurrency].value;
  const toCurrencyValue = currencyData[toCurrency].value;

  const conversionRate = toCurrencyValue / fromCurrencyValue;
  const convertedAmount = amount * conversionRate;

  // Display conversion rate and converted amount
  conversionRateDisplay.textContent = `Conversion Rate: 1 ${fromCurrency} = ${conversionRate.toFixed(2)} ${toCurrency}`;
  convertedAmountDisplay.textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
});
