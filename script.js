// JavaScript untuk interaksi navigasi responsif
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    // Toggle menu saat ikon diklik (tampil/sembunyikan)
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    // Tutup menu saat link navigasi diklik (berguna di mobile)
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});
