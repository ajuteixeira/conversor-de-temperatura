function converteTemperatura() {
  let temperaturaAtual = parseInt(
    document.getElementById("temperaturaAtual").value
  );
  let temperaturaConvertida = document.getElementById("temperaturaConvertida");

  if (document.getElementById("CtoF").checked == true) {
    temperaturaConvertida.innerHTML =
      converteParaFahrenheit(temperaturaAtual).toFixed(1) +
      " graus Fahrenheit &#127777";
  }
  if (document.getElementById("FtoC").checked == true) {
    temperaturaConvertida.innerHTML =
      converteParaCelsius(temperaturaAtual).toFixed(1) + "°C &#127777";
  }
}

function converteParaFahrenheit(temperaturaC) {
  return temperaturaC * 1.8 + 32;
}

function converteParaCelsius(temperaturaF) {
  return (temperaturaF - 32) / 1.8;
}
