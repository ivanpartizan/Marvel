const apiUrls = [
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=0",
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=100",
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=200",
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=300",
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=400",
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=500",
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=600",
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=700",
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=800",
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=900",
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=1000",
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=1100",
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=1200",
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=1300",
  "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=1400",
];

let data = [];

// const searchBar = document.querySelector("#searchbar");
// searchBar.addEventListener("keyup", (e) => {
//   const searchString = e.target.value.toLowerCase();
//   const filter = data.data.results.filter((character) =>
//     character.name.toLowerCase().includes(searchString)
//   );
//   displayData(filter);
//   console.log(filter);
// });

async function getData() {
  const response = await Promise.all(apiUrls.map((url) => fetch(url)));
  data = await Promise.all(response.map((res) => res.json()));
  console.log(data);

  for (part of data) {
    const characters = part.data.results;
    console.log(characters);

    for (character of characters) {
      document.getElementById("output").innerHTML += `
            <div class="character">
              <h1>${character.name}</h1>
              <a href="${character.urls[0].url}" target="_blank">
                <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" height="100" class="image" />
              </a>
            </div>
        `;
    }
  }
}

// const displayData = (characters) => {
//   let filteredHTML = "";
//   for (character of characters) {
//     filteredHTML += `
//       <div class="character">
//       <h1>${character.name}</h1>
//       <a href="${character.urls[0].url}" target="_blank">
//         <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" height="100" class="image" />
//       </a>
//     </div>
//     `;
//   }
//   document.getElementById("output").innerHTML = filteredHTML;
// };

//   const searchBar = document.querySelector("#searchbar");
//   searchBar.addEventListener("keyup", (e) => {
//     const searchString = e.target.value.toLowerCase();
//     const heroes = data.data.results;
//     console.log(heroes);
//     const filter = heroes.filter((character) =>
//       character.name.toLowerCase().includes(searchString)
//     );
//     displayData(filter);
//     console.log(filter);
//   });
// }

getData();

// const displayData = (characters) => {
//   let filteredHTML = "";
//   for (character of characters) {
//     filteredHTML += `
//       <div class="character">
//       <h1>${character.name}</h1>
//       <a href="${character.urls[0].url}" target="_blank">
//         <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" height="100" class="image" />
//       </a>
//     </div>
//     `;
//   }
//   document.getElementById("output").innerHTML = filteredHTML;
// };

const heroes = ["Spider-Man", "Iron Man", "Hulk", "Thor", "Captain America"];
let hero = 0;
let letter = 0;
let currentHero = "";
let currentLetter = "";

(function typing() {
  if (hero === heroes.length) {
    hero = 0;
  }
  currentHero = heroes[hero];

  currentLetter = currentHero.slice(0, ++letter);

  document.querySelector("#heroes").textContent = currentLetter;

  if (currentLetter.length === currentHero.length) {
    hero++;
    letter = 0;
  }
  setTimeout(typing, 250);
})();
