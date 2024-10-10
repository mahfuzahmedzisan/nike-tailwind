const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');

openMenu.addEventListener('click', () => {
   if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      menu.classList.remove('translate-x-full');
      menu.classList.add('translate-x-0');
      // menu.classList.add('animate-menuShow');
      // menu.classList.remove('animate-menuHide');
   } else {
      menu.classList.add('hidden');
      // menu.classList.remove('animate-menuShow');
      // menu.classList.add('animate-menuHide');
      menu.classList.add('translate-x-full');
      menu.classList.remove('translate-x-0');
   }
})

closeMenu.addEventListener('click', () => {
   if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      // menu.classList.add('animate-menuShow');
      // menu.classList.remove('animate-menuHide');
   } else {
      menu.classList.add('hidden');
      // menu.classList.remove('animate-menuShow');
      // menu.classList.add('animate-menuHide');
   }
});

