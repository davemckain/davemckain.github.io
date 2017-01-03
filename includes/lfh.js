document.onkeyup = function(e) {
  var prev = document.getElementById('nav-prev'),
    next = document.getElementById('nav-next'),
    home = document.getElementById('nav-home');
  switch (e.keyCode) {
    case 37: // Left arrow
      if (prev) prev.click();
      break;

    case 39: // Right arrow
      if (next) next.click();
      break;

    case 27: // Escape
      if (home) home.click();
      break;

    default:
      break;
  }
};
