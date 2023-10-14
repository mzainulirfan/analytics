const sidebar = document.getElementById('sidebar');
const btnOpen = document.getElementById('btnOpen');
const body = document.body;

btnOpen.addEventListener('click', function(event) {
  sidebar.classList.remove('-translate-x-full');
  event.stopPropagation(); // Mencegah propagasi ke elemen body
});

body.addEventListener('click', function(event) {
  // Hanya menambahkan kelas jika elemen yang diklik bukanlah elemen sidebar atau btnOpen
  if (event.target !== sidebar && event.target !== btnOpen) {
    sidebar.classList.add('-translate-x-full');
  }
});

const submenuTrigger = document.querySelector('.submenu-trigger');
const subMenu = document.querySelector('.submenu');

// Tambahkan event listener untuk menghandle klik pada submenuTrigger
submenuTrigger.addEventListener('click', function() {
  // Periksa apakah subMenu memiliki kelas "hidden"
  if (subMenu.classList.contains('hidden')) {
    // Jika memiliki kelas "hidden", ganti dengan "flex"
    subMenu.classList.remove('hidden');
    subMenu.classList.add('flex');
  } else {
    // Jika memiliki kelas "flex", ganti dengan "hidden"
    subMenu.classList.remove('flex');
    subMenu.classList.add('hidden');
  }
});





