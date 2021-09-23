const fahrenheitSyote = document.querySelector('input');
const fahrenheitTuloste = document.querySelector('#fahrenheit');
const celsiusTuloste = document.querySelector('#celsius');
const muunnaButton = document.querySelector('button');

function fahrenheitCelsiukseksi(fahrenheit) {
    let celsius = 5*(fahrenheit-32)/9;
    return celsius;
}

function muunna() {
    let syote = fahrenheitSyote.value;
    fahrenheitTuloste.textContent = syote;

    celsiusTuloste.textContent = fahrenheitCelsiukseksi(syote);
}


muunnaButton.addEventListener('click', muunna); 
