window.addEventListener('scroll', function () {
    const Menu = document.getElementById('Menu');
    if (window.scrollY > 50) {
      Menu.classList.add('scrolled');
    } else {
      Menu.classList.remove('scrolled');
    }
  });
