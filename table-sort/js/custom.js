const artists = [
    {
      name: "Ms Scandalous",
      birthYear: 1985,
      link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
    },
    {
     name: "Juggy D",
     birthYear: 1981,
     link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
   },
   {
     name: "Sukhbir Singh",
     birthYear: 1969,
     link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
   },
   {
     name: "Abrar-ul-Haq",
     birthYear: 1989,
     link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
   },
   {
     name: "Rishi Rich",
     birthYear: 1970,
     link: "https://www.youtube.com/watch?v=O95-w2gACuA"
   }
  ]
 
// locate the table:
const tab = document.querySelector("#bhangra");

populateTable(arr = artists);


const nameButton = document.querySelector("#name-button");
const birthButton = document.querySelector("#date-button");
const randomizeButton = document.querySelector("#random-button");

nameButton.addEventListener("click", sortByName);
birthButton.addEventListener("click", sortByBirthYear);
randomizeButton.addEventListener("click", randomizeOrder);

function sortByName() {
  let sortedArray = arr.slice().sort((a, b) => a.name > b.name ? 1 : -1); 
  populateTable(sortedArray);
}

function sortByBirthYear() {
  let sortedArray = arr.slice().sort((a, b) => a.birthYear - b.birthYear);
  populateTable(sortedArray);
}

function randomizeOrder() {
  let shuffledArray = arr.slice().sort(() => Math.random() - 0.5);
  populateTable(shuffledArray);
}

function populateTable(arr) {
  let contents = "<tbody>";
  contents += `
    <tr>
      <th>Name</th>
      <th>Year of Birth</th>
      <th>Link</th>
    </tr>
    `;
  arr.forEach(artist => {
    contents += "<tr>";
    contents += `<td>${artist.name}</td>`;
    contents += `<td>${artist.birthYear}</td>`;
    contents += `<td><a href="${artist.link}" target="_blank">${artist.link}</a></td>`;
    contents += "</tr>";
  });
  contents += "</tbody>";
  tab.innerHTML = contents;
}
