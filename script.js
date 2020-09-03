// const apiUrls = [
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=0",
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=100",
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=200",
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=300",
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=400",
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=500",
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=600",
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=700",
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=800",
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=900",
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=1000",
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=1100",
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=1200",
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=1300",
//   "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=88f6ef315f2d376003352ecb882ae5bd&hash=044cf0f1a4329df3001d5f95895141ac&limit=100&offset=1400",
// ];

// async function getData() {
//   const response = await Promise.all(apiUrls.map((url) => fetch(url)));
//   const data = await Promise.all(response.map((res) => res.json()));
//   console.log(data);
//   for (line of data) {
//     const character = line.data.results;
//     console.log(character);
//     for (hero of character) {
//       const heroo = hero.name;
//       console.log(heroo);
//     }
//   }
//   // const characters = data[i].data.results;
//   // console.log(characters);
//   // for (character of characters) {
//   //   console.log(character.name);
// }
// // const response = await fetch(apiUrl);
// // const data = await response.json();
// // console.log(data);
// // console.log(data.attributionText);
// // const characters = data.data.results;
// // console.log(characters);
// // for (character of characters) {
// //   console.log(character.name);
// // }

// getData();
