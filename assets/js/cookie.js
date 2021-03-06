function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }

  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];

    while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
    if (cookie.indexOf(name + '=') === 0) return cookie.substring(name.length + 1, cookie.length);
  }
  return undefined;
}

function deleteCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

window.onload = function () {
  if (getCookie('cookie-dismiss')) return;

  document.body.innerHTML += '' +
    '<div class="cookie-container" id="cookie-container" style="opacity: 0;">' +
    '<div class="cookie-title">' +
    '<h2 style="color: white;">Information</h2>' +
    '</div>' +
    '<div class="cookie-description">' +
    '<p>Unsere Website nutzt Cookies, um bestmögliche Funktionalität bieten zu können.</p>' +
    '</div>' +
    '<div class="cookie-button">' +
    '<a onclick="setCookie(\'cookie-dismiss\', \'true\', 7);fadeOut(document.getElementById(\'cookie-container\'));">Verstanden</a>' +
    '</div>' +
    '</div>';

  setTimeout(() => fadeIn(document.getElementById('cookie-container')), 1000);
};
