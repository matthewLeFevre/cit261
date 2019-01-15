// OMDB API key: http://www.omdbapi.com/?i=tt3896198&apikey=b7de5d9e

let searchBtn = document.getElementById('searchBtn');
let search = document.getElementById('search');
let output = document.getElementById('output');

searchBtn.addEventListener('click', (ev) => {
  let query = search.value;
  output.innerHTML = "";
  search.value = "";
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=b7de5d9e&s=${query}`)
  .then(data => data.json())
  .then(data => {
    console.log(data.Search);
    for( let i = 0; i < data.Search.length; i ++) {
      let itemCard = document.createElement('div'),
          itemImage = document.createElement('img'),
          itemBody = document.createElement('div'),
          itemTitle = document.createElement('h4'),
          itemHeader = document.createElement('div'),
          itemText = document.createElement('p');

      itemCard.setAttribute('class', 'tab card');
      itemImage.setAttribute('class', 'tab__img');
      itemImage.setAttribute('src', data.Search[i].Poster);
      itemBody.setAttribute('class', 'tab__body');
      itemTitle.setAttribute('class', "main");
      itemHeader.setAttribute('class', 'tab__header');
      itemText.setAttribute('class', 'tab__text');
      itemTitle.innerText = data.Search[i].Title;
      itemHeader.appendChild(itemTitle);
      itemCard.appendChild(itemHeader);
      itemBody.appendChild(itemImage);
      itemCard.appendChild(itemBody);
      output.appendChild(itemCard);
    }
  }); 
});