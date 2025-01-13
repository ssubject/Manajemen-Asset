const menu = document.getElementById('menu-label');
const sidebar = document.getElementsByClassName('sidebar')[0];
const btnMenu = document.getElementById('btn-menu'); // Pastikan tombol diambil

menu.addEventListener('click', function () {
    sidebar.classList.toggle('hide');

    // Perbarui posisi tombol berdasarkan status sidebar
    if (sidebar.classList.contains('hide')) {
        btnMenu.style.left = '60px'; // Posisi tombol saat sidebar disembunyikan
    } else {
        btnMenu.style.left = '210px'; // Posisi tombol saat sidebar terlihat
    }
});
