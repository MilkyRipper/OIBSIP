const temperatureInput = document.getElementById('temperature');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertBtn = document.getElementById('convertBtn');
const result = document.getElementById('result');
const resetBtn = document.getElementById('resetBtn');
convertBtn.addEventListener('click', function() {
    const temperature = Number(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;
    if (temperatureInput.value.trim() === "") {
        result.textContent = 'Please enter a temperature!';
        return;
    }

    if (from === 'Celsius' && temperature < -273.15) {
        result.textContent = 'Temperature cannot be below absolute zero!';
        return;
    }

    if (from === 'Fahrenheit' && temperature < -459.67) {
        result.textContent = 'Temperature cannot be below absolute zero!';
        return;
    }

    if (from === 'Kelvin' && temperature < 0) {
        result.textContent = 'Temperature cannot be below absolute zero!';
        return;
    }



    let celsius;
    if (from === 'Celsius') {
        celsius = temperature;
    } else if (from === 'Fahrenheit') {
        celsius = (temperature - 32) * 5/9;
    } else if (from === 'Kelvin') {
        celsius = temperature - 273.15;
    }

    let converted;
    if (to === 'Celsius') {
        converted = celsius;
    } else if (to === 'Fahrenheit') {
        converted = (celsius * 9/5) + 32;
    } else if (to === 'Kelvin') {
        converted = celsius + 273.15;
    }

    result.textContent = `${temperature} ${from} = ${converted.toFixed(2)} ${to}`;
});

resetBtn.addEventListener('click', function() {
    temperatureInput.value = '';
    fromUnit.value = 'Celsius';
    toUnit.value = 'Celsius';
    result.textContent = 'Result will appear here';
});
