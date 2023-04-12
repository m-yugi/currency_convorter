var myHeaders = new Headers();
myHeaders.append("YOUR API NAME", "YOUR API KEY");
var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
function get_data() {
  let to_data = document.getElementById("to_curr").value;
  let from_data = document.getElementById("from_curr").value;
  let amount = document.getElementById("amount").value;
  // console.log(amount);
  // console.log(from_data)
  fetch("https://api.apilayer.com/exchangerates_data/latest", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      document.getElementById("result").innerHTML = `${amount} ${from_data} = ${(
        amount *
        (result.rates[to_data] / result.rates[from_data])
      ).toFixed(3)} ${to_data}`;
      document.getElementById(
        "from_curr_rate"
      ).innerHTML = `1 ${from_data} = ${(
        result.rates[to_data] / result.rates[from_data]
      ).toFixed(3)} ${to_data}`;

      document.getElementById("to_curr_rate").innerHTML = `1 ${to_data} = ${(
        result.rates[from_data] / result.rates[to_data]
      ).toFixed(3)} ${from_data}`;
    })
    .catch((error) => console.log("error", error));
}
