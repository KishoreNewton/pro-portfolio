import '../css/main.css';

const data = [
  {
    id: '1',
    title: '',
    description: '',
    date: '',
    name: 'Kishore Newton',
    github: '',
    website: '',
    download: '',
    keywords: ''
  }
];

function changeStyle() {
  document.body.style.background = `linear-gradient(
    90deg,
    #d8d8d8,
    #b4b4b4,
    #c7c7c7, 
    #9b9b9b, 
    #7c7c7c, 
    #c5c5c5, 
    #797979, 
    #b4b4b4, 
    #9b9b9b
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
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.background = `linear-gradient(90deg, #275694bd, #02af36cc)`;
      card.style.animation = `colorRotate 6s linear 0s infinite`;
    });
    document.body.style.animation = `rainbow 8s ease infinite`;
    document.body.style.backgroundSize = `180% 180%`;
    if (window.innerWidth > 1300) {
      document.querySelector('.form__label').innerText = 'Search For Project and resume';
    }
  } else {
    changeStyle();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.background = ``;
      card.style.animation = ``;
    });
    document.querySelector('.form__label').innerText = 'Search Here...';
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    document.getElementById('search').blur();
    changeStyle();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.background = ``;
      card.style.animation = ``;
    });
  }
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', event => {
    if (document.getElementById('search') === document.activeElement) {
      return;
    } else {
      document.body.style.background = `#17141D`;
      card.style.background = '#17141D';
    }
  });
  card.addEventListener('mouseleave', event => {
    if (document.getElementById('search') === document.activeElement) {
      return;
    } else {
      changeStyle();
      card.style.background = `#d0d0d0`;
    }
  });
});
