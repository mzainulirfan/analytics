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