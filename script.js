fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_ZQt7tp2SGLrja3l7dVXG3oTa0Vp6YI8joIBSrNJH")
  .then((response) => response.json())
  .then((responseData) => {
    console.log(responseData);
    const currencyData = responseData.data;

    const currency1Select = document.querySelector(".currency1");
    const currency2Select = document.querySelector(".currency2");

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
  });
