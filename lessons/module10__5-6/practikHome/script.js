// ***************Практика*************** \\

// Потрібно створити функціонал для отримання прогнозу погоди в місті.
// Використай публічне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити пошук на 1, 2 та 3 дні)
// Приклад форми https://prnt.sc/kFmLOj6gBdv-

// Після сабміту форми відмалюй картки з інформацією отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)
// Приклад картки https://prnt.sc/h_p-A6Hty-i-

// !!! ЗВЕРНИ УВАГУ ЩО API_KEY ПІСЛЯ РЕЄСТРАЦІЇ ВАЛІДНИЙ 21 ДЕНЬ !!!.

const API_KEY = "6410346f89264d6e919165208231505";
const BAZE_URL = "http://api.weatherapi.com/v1";

const form = document.querySelector(".js-search-form");
const list = document.querySelector(".js-list");

form.addEventListener("submit", handlerSubmit);
function handlerSubmit(evt) {
  evt.preventDefault();

  const { city, days } = evt.target.elements;

  serviceWeather(city.value, days.value).then(
    (res) => (list.innerHTML = createMarcup(res.forecast.forecastday))
  );
}

function createMarcup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { text, icon },
        },
      }) => `<li class="weather-card">
        <img class="weather-icon"  src="${icon}" alt="${text}" height="50" width="50"/>
        <p class="date">${date}</p>
        <p class="weather-text">${text}</p>
        <h1 class="temperature">${avgtemp_c}°C </h1>
  </li>`
    )
    .join("");
}

function serviceWeather(city, days) {
  const API_KEY = "6410346f89264d6e919165208231505";
  const BAZE_URL = "http://api.weatherapi.com/v1";

  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    lang: "uk",
    days: days,
  });

  return fetch(`${BAZE_URL}/forecast.json?${params}`).then((res) => res.json());
}

// //---------------------------------------------
// Обробити варіант помилки в кетч
