const temperatureC = parseFloat(document.querySelector(".temperature"));
const windSpeedKmh = parseFloat(document.querySelector(".wind-speed"));

const temperatureF = (temperatureC * 1.8) + 32;
const windSpeedMph = windSpeedKmh / 1.6;

function windChillC (temperatureF, windSpeedMph) {
    let windChillC;
    if (temperatureF <= 50 && windSpeedMph > 3) {
        const t = temperatureF;
        const s = windSpeedMph ** 0.16;
        const windChillF = 35.74 + 0.6215 * t - 35.75 * s + 0.4275 * t * s;
        windChillC = (windChillF - 32) / 1.8;
    }
    else {windChillC = "N/A"};
    return windChillC;
}

const windChill = document.querySelector(".wind-chill");
windChill.textContent = windChillC(temperatureF, windSpeedMph);