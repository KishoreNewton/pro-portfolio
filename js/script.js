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
  const html = loadData(post);
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
          <div class="links">
            <svg class="github" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"
              height="20" viewBox="0 0 100 100">
              <image width="100" height="98"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABiCAYAAACmu3ZJAAADIklEQVR4nO2dC47DIAxEk2rvf+WstFJaNs0Hg8cMMO8AKfaLgRBC123bFmIQjVuZA/4haENKxN1x9hs0khiEMJRo2oamcloKYe0r93Y1EdNCCPWgldBETKSQXkQcCRUTIaRXEUdCxCCFjCLiCFTMC3HRgWWkQGL0rpAZRKS4V4tnhcwmI8Utdi8hM8vYccmBhxDJ+FCdi1ohkvFNVU5qhEjGNcW5KRUiGc8U5ahEiGTkY86VVYhk2DHlzCJEMsrJzl2uEMmoJyuHqLUsUUjOWlZtdaTrPL1WmlcM29O615MQ7wT2JAf13uNWCrrLugtqJd2S89QuaJvvhETdwSxiIttxmVumfVl7Mq4aW5ss1HVduRLSsn9HJYitezwdSzTtJeNMiB4C4/jKtSqEjKMQVUc8/3KuCiEjFaLqaMc79+gKGVEyNCZ1WWTsQlDWqT8fKwS56AitkBFl7MBiQwkZWcZOV7vfRSEIITNUx457rC89f1Cxqcsiw1vITN3VjmvMqhAyJIQMCSFDQsiQEDIkhAwJIUNCyJAQMiSEDAkhQ0LI8BYy41K+a8yqEDIkhAyEkJm6LfdYVSFkSAgX6wv02lWHYBaCrJCRpcBiU5dFhj5HsBPyOQJy+85IUpCx/DmIOjig6V9AOBB2U0WPIT1WS2ibUyGR53z0ICayne/cM/zDDuORF804ClkNDfI81OvsmpHQnO1SUyHp4SlPJ/lYrnmGlyj6rvJsULcEfwyQ9VAyViCnAfUySHfBlZDau9yzSlivVctpW5B/6OIRPCKB1F3qnZCShiOkjEizU0mFkSchLasEWV0tK/f2t3MqxGssUPeVkQPU0snV6c13T/fTC1sMQixLKrnMJiArXsugbk2gHhY/ZOfOOsuSFDumnJVMe0ukzCrG3C2XPoeUTodz5IwisGiMrJll1Qz0o1dM8YSl9kldU9VvqnLisXQiKR+qc+G1liUpTjnwXFycWYpb7N5LJ17v1nsBcuYiAh0TWwhyX9ao1QK92SI2yo0iJqTqI3cu9iomtPttsZW0FzFNxsGW79Tv3iJGJOPut9tMSpZl+QU4AHr0YhYW7AAAAABJRU5ErkJggg==" />
            </svg>
            <svg class="download" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"
              height="20" viewBox="0 0 100 100">
              <image width="100" height="100"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABdklEQVR4nO3cW27CQBAAQRPl/ld2pHwgRXnBmjVtXHUAhNLMhgHjy7qu68KjXUYf702KKYZf5ILMMxRFkLnujiLIfHdFEWQfN0cRZD83RRFkX/9GEWR/f0Z5n/R0hhejgxndN9bf/kYm5Hl+jCnIc32LMuvIOoKR42bGUfzl+DIhDdcXhyAdn1EEaVkFiREkRpAYQWIEiREkRpAYQWIEiREkRpAYQWIEiREkRpAYQWIEiREk5sxXnSQv5jMhMYLEzDqy/JB0kAmJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJGf3G8Cx3+9nKPRePTpAYQWIEiREkRpCYGRfKne0iuYeuACYkRpAYQWIEiZnxT93nXBuYkBhBYuwh29lDXpkgMYLECBJjD4kxITGCxAgSYzHczmL4ygSJESRGkBiLYYwJiREkRpAYQWIEiREkZvRtr7uOTmJCYgSJESRGkBhBYgSJESRGkJJlWT4Ak4Mb0qa40cEAAAAASUVORK5CYII=" />
            </svg>
            <svg class="website" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20"
              height="20" viewBox="0 0 100 100">
              <image width="100" height="100"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEJUlEQVR4nO1dYXPsIAhM3tz//8t5M22vk+aSiLCLq3G/9aZnkBVQgty6bdsiDJZwq+qUXwIy7JG1Oo7PkSFIgRAFE93L0JScloSo+sq3XE2IaUGIdNDaoQkxmYT0QsQRqcRkENIrEUekEMMkZBQijqAS848x6MBk7EGZI9pCFIg4W7ksueDWgiRElYyzz9GybihSUC4LOUHPxNbK762O75QA0QGCEBQZbwXVjqeUlwrrIuqyEGTsFWodz0rC3Xge8q3PdC+SCCEZZERWf0k+Zsxzk+J1WewAHvXvaglLMzwWgowZd397oXQGqraUWgthkYGC4oG0SqYaQtRP38rymWWzuqzoZBkWYT0le3ZxDJjcFyuXtQeTDOtztl7yaxZCPBNhnIQt8sgWL/ygqMsSIV4yWPCcLdQs41YedLa3xQodKtV/ZyGKOSWWG8zGpW5RQT1bSSOQcoorQmqsY7opH07nkLHtZeBRFqJuHWi859AiPn3oWq229woZLup48m/iFo+E9Gwd3vfmx//LJuJPSsUbQ9TJuPpMHntCety5lPy+tQqlNX5174khvay80h0Q1jv1EHoJ6lfKixZFrCfBvGZcON6EjPjyyWrJKhb/Fdxrg3pPp/Ls70Gg7rKiyjm+pUOXGsHRSwyJoPSql2kR1YfMF6FaEAFWRSEDFr2Yd3RPvRaNBNINbkrZ3idc8imi1/T7sFAplHuCdZjcmIKFqJORui2eLquM1GKPVsXWe/SQrEyTcVqIDdZrBWHiZgyxoyRns1u487zwCZhLmy4LA1h1veodw8ciYiGTFAKmy8JBorUG+q764zEtRAyTEAyktr1Pd1uIviu/UGrP9PhYsoBd1hNJgcv7ApdUIjqrWarYVZoBoLEyihxg7e5+oNqpoWaOZrlG60qa5fJoz2Fue1uQ0r37mueQetRah6s909xy2sDU09fYo1mI7M0oK0Z0WV1b+54Q9ERaKqbbA+YM6jy4dnxHQmZwv4f37vsd/uh8ZAvp/p76G6NYSatDYqgbxqgW0uq2VPi5V4TMWPKJlF0oI9s7IpmWOdEL5aaVfINBxuWYo8aQbm8MlwjxTEwlBY4ghRHEb8e0WEjPpESQTsYy4AuqI7xWQt/eXsFKiPsifEy8JmCRAb+F+yRSrkAlY3G4rB5JqZH5rkENnYzFGUMipKhay13vxojM1bpat839PMVf3bnDXt6Mk7drfhFClg5JsaLZvKK5rGgZqvV3pDKAcqehuSCSi4ja4Fp3ggQyroVlR2V70QXb+3EZkG0Rgky/MxoTl5ohe8dBA7ZwWL9BxVKA2rYZbsGsXNYT3qVQ5shsgtn0dziIoC62jK6koxCTYvWZbWJ7JSbV/bbo29sLMU3iYMtGyqrENN2QKHS2VrhRK7MrVGs1fqYYNEm6W/JlWf4D8YfJEGzU5vkAAAAASUVORK5CYII=" />
            </svg>
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
  } else if (event.target.className.includes('card') || event.target.closest('article').className.includes('card')) {
    const card = event.target.className === 'card' ? event.target : event.target.closest('article');
    card.style.background = '#aea6fe';
    document.body.style.background = '#ffd17e';
    card.querySelector('.half-circle').style.stroke = '#ffd17e';
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
      card.querySelector('.half-circle').style.stroke = '#ff8a00';
    }
  });
});
