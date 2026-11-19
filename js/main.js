// Scales fixed-size illustrations (.illo) to fit their container.
(function () {
  function fit(el) {
    var base = parseFloat(el.getAttribute('data-base-width')) || 520;
    var stage = el.querySelector('.illo-stage');
    if (stage) stage.style.transform = 'scale(' + Math.min(1, el.clientWidth / base) + ')';
  }
  var items = document.querySelectorAll('.illo');
  if ('ResizeObserver' in window) {
    var ro = new ResizeObserver(function (entries) { entries.forEach(function (e) { fit(e.target); }); });
    items.forEach(function (el) { ro.observe(el); });
  } else {
    items.forEach(fit);
    window.addEventListener('resize', function () { items.forEach(fit); });
  }
})();
