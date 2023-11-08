
const converter = document.querySelector("#convert-button")

const currencySelector = document.querySelector(".currency-selector")


function convertValues() {

  const currencyToConvert = document.querySelector("#currency-to-convert")
  const currencyConverted = document.querySelector("#currency-converted")
  const inputCurrency = document.querySelector("#value-input").value


  const dolartoday = 4.86
  const eurotoday = 5.33
  const libratoday = 6.24
  const ienetoday = 0.34
  const bitcointoday = 146657.99
  const pesotoday = 0.019
  

  if (currencySelector.value == "Dólar") {
    currencyConverted.innerHTML = new Intl.NumberFormat("en-US",
      {
        style: "currency",
        currency: "USD"
      }).format(inputCurrency / dolartoday)
  }

  if (currencySelector.value == "Euro") {
    currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",
      {
        style: "currency",
        currency: "EUR"
      }).format(inputCurrency / eurotoday)
  }

  if (currencySelector.value == "Libra") {
    currencyConverted.innerHTML = new Intl.NumberFormat("en-UK",
      {
        style: "currency",
        currency: "GBP"
      }).format(inputCurrency / libratoday)
  }

  if (currencySelector.value == "Bitcoin") {
    currencyConverted.innerHTML = new Intl.NumberFormat("de-DE",
      {
        style: "currency",
        currency: "XBT"
      }).format(inputCurrency / bitcointoday)
  }

  if (currencySelector.value == "Iene") {
    currencyConverted.innerHTML = new Intl.NumberFormat("ja-JP",
      {
        style: "currency",
        currency: "JPY"
      }).format(inputCurrency / ienetoday)
  }

  if (currencySelector.value == "Peso") {
    currencyConverted.innerHTML = new Intl.NumberFormat("es-AR",
      {
        style: "currency",
        currency: "ARS"
      }).format(inputCurrency / pesotoday)
  }

  currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR",
    {
      style: "currency",
      currency: "BRL"
    }).format(inputCurrency)

}




function changeValue() {

  const currencyName = document.querySelector(".currency-selector")

  const currencyResults = document.getElementById("currency-results")

  const currencyImage = document.querySelector(".img-currency")

  if (currencySelector.value == "Dólar") {
    currencyResults.innerHTML = "Dólar"
    currencyImage.src = "./assets/USA.png"
  }

  if (currencySelector.value == "Libra") {
    currencyResults.innerHTML = "Libra"
    currencyImage.src = "./assets/UK.png"
  }

  if (currencySelector.value == "Euro") {
    currencyResults.innerHTML = "Euro"
    currencyImage.src = "./assets/EUR.png"
  }

  if (currencySelector.value == "Bitcoin") {
    currencyResults.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/bitcoin.png"
  }

  if (currencySelector.value == "Iene") {
    currencyResults.innerHTML = "Iene"
    currencyImage.src = "./assets/JP.png"
  }

  if (currencySelector.value == "Peso") {
    currencyResults.innerHTML = "Peso"
    currencyImage.src = "./assets/ARG.png"
  }

  convertValues()

}



currencySelector.addEventListener("change", changeValue)

converter.addEventListener("click", convertValues)



