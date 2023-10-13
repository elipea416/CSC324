/********************************************************************
 * 
 * Your introductory remarks go here.
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
 
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

 // complete with code to select and populate the table

 const table = document.getElementById("bhangra");
 
 const labels = table.createTHead();
 labels.innerHTML = "<tr><th>Name</th><th>Birth Year</th><th>Link</th></tr>";
 
 artists.forEach((artist) => {
   const newRow = table.insertRow();
   const nameCell = newRow.insertCell(0);
   const birthYearCell = newRow.insertCell(1);
   const linkCell = newRow.insertCell(2);
 
   nameCell.innerText = artist.name;
   birthYearCell.innerText = artist.birthYear;
   linkCell.innerHTML = `<a href="${artist.link}" target="_blank">${artist.link}</a>`;
 });
 

