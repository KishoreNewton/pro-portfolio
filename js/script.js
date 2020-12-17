import '../css/main.css';

const posts = [
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

posts.map(post => {
  loadData(post);
});

function loadData(post) {
  const { title, description, name, github, website, download } = post;

  return `
    <article class="card">
        <header class="card-header">
          <p>${description}</p>
          <h2>${title}</h2>
        </header>
        <div class="card-author">
          <a class="author-avatar" href="#">
            <img src="avatar.jpeg" />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>
          <div class="author-name">
            <div class="author-name-prefix">Author</div>
            ${name}
          </div>
          <div class="web-links">
            <a src="${github}"></a>
            <a src="${website}"></a>
            <a src="${download}></a>
          </div>
        </div>
      </article>`;
}

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
