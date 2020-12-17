import '../css/main.css';

function changeStyle() {
  document.body.style.background = `linear-gradient(
    90deg,
    #ddd6f3,
    #fdf5f5,
    #fff3f3,
    #ffefef,
    #ffe7e7,
    #ffe7e7,
    #fcd4d4,
    #eeb3b0,
    #faaca8
  )`;
  document.body.style.animation = `rainbow 8s ease infinite`;
  document.body.style.backgroundSize = `180% 180%`;
}

document.addEventListener('click', event => {
  if (event.target.id === 'search') {
    document.body.style.background = `linear-gradient(
      90deg,
      #fdbebe,
      #e7caa3,
      #e7d8a5,
      #bde2a4,
      #aef0e1,
      #a1bae0,
      #c1a9ee,
      #eeb1e5,
      #ff6a83
    )`;
    document.body.style.animation = `rainbow 8s ease infinite`;
    document.body.style.backgroundSize = `180% 180%`;
  } else {
    changeStyle();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    document.getElementById('search').blur();
    changeStyle();
  }
});
