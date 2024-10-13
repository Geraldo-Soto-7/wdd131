
document.getElementById('currentyear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;


const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        hamburger.innerHTML = '&#9776;'; // símbolo de hamburguesa
    } else {
        menu.style.display = 'block';
        hamburger.innerHTML = 'X'; // símbolo de cerrar
    }
});
