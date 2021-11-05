/* You can press/hold space instead of clicking */
document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    setTimeout(Game.ClickCookie, 1);
  }
})
