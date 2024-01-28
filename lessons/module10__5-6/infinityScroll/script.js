// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
// const API_KEY = "345007f9ab440e5b86cef51be6397df1";

/************ Кнопка "Load More" ************/

const selector = {
  container: document.querySelector(".js-movie-list"),
  loadMore: document.querySelector(".js-load-more"),
};

let page = 1;

selector.loadMore.addEventListener("click", handlerLoadMore);

function serviceMovie(page = 1) {
  const BASE_URL = "https://api.themoviedb.org";
  const END_POINT = "/3/trending/movie/week";
  const API_KEY = "345007f9ab440e5b86cef51be6397df1";

  const params = new URLSearchParams({
    api_key: API_KEY,
    page: page,
  });

  return fetch(`${BASE_URL}${END_POINT}?${params}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    console.log(resp);
    return resp.json();
  });
}

serviceMovie(1)
  .then((data) => {
    selector.container.insertAdjacentHTML(
      "beforeend",
      createMarcup(data.results)
    );
    if (data.page < data.total_pages) {
      selector.loadMore.classList.replace("load-more-hidden", "load-more");
    }
  })
  .catch((err) => {
    console.log(err);
  });

function createMarcup(arr) {
  return arr
    .map(
      ({ poster_path, original_title, vote_average, release_date }) =>
        `
      <li class="movie-card">
      <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
     <div class="movie-info"> 
     <h2>${original_title}</h2>
     <p>Release Date: ${release_date}</p>
     <p>Vote Averge: ${vote_average}</p>
     </div>
    </li>`
    )
    .join("");
}

function handlerLoadMore() {
  page += 1;
  serviceMovie(page).then((data) => {
    selector.container.insertAdjacentHTML(
      "beforeend",
      createMarcup(data.results)
    );
    if (data.page >= 500) {
      selector.loadMore.classList.replace("load-more", "load-more-hidden");
    }
  });
}
//---------------------------------------------
/************ Infinity scroll ************/
