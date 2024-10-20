// Función para obtener el año actual
function updateFooterYear() {
    const yearSpan = document.getElementById("currentyear");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

// Función para mostrar la última modificación
function updateLastModified() {
    const lastModifiedSpan = document.getElementById("lastModified");
    lastModifiedSpan.textContent = `Last modified: ${document.lastModified}`;
}

// Función para calcular el Wind Chill solo para °C
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2) + ' °C'; // Agregar °C a la salida
    } else {
        return "N/A";
    }
}

// Llamadas a las funciones
updateFooterYear();
updateLastModified();
