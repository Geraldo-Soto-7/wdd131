// Obtener el año actual y mostrarlo en el footer
const currentYearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Obtener la fecha de última modificación y mostrarla en el footer
const lastModifiedElement = document.getElementById("lastModified");
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = `Última modificación: ${lastModifiedDate.toLocaleString()}`;


