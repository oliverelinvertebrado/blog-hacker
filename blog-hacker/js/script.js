// Genera imágenes automáticamente
function loadImages(sectionId, folder) {
    const grid = document.getElementById(`${sectionId}-grid`);
    for (let i = 1; i <= 30; i++) {
        grid.innerHTML += `<img src="img/${folder}/${i}.jpg" class="image-box">`;
    }
}

loadImages('deudores', 'deudores');
loadImages('ratas', 'ratas');
loadImages('infieles', 'infieles');

// Forzar música automática
document.addEventListener('click', () => {
    document.getElementById('bg-music').play();
});