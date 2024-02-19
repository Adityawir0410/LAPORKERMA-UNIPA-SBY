window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    var background = document.getElementById('background');
    background.style.backgroundPositionY = -scrolled * 0.5 + 'px'; /* Efek parallax dengan menggeser latar belakang */
  });