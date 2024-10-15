document.addEventListener("DOMContentLoaded", () => {
  const filmlist = document.getElementById("films")
  const movieDetails = document.getElementById("showing")
  const buyTicketBtn = document.getElementById("buy-ticket")   

//fetch all films
fetch("http://localhost:3000/films")
  .then(resp => resp.json())
  .then(data => {
      //removing placeholder <li>
      const placeholderLi = document.querySelector('li.film-item');
      if(placeholderLi){
          placeholderLi.remove();
      }
      //display all movies and load first movie details by default
      if(data.length > 0 ){
          data.forEach(movie => {
              addMovieToMenu(movie);
          });
          displayMovieDetails(data[0])
      }
  });
function addMovieToMenu(movie){
  const movieItem = document.createElement('li');
  movieItem.textContent = movie.title;
  movieItem.classList.add('film-item')
  movieItem.dataset.id = movie.id;

  movieItem.addEventListener('click', () => displayMovieDetails(movie));

  filmlist.appendChild(movieItem);
}
function displayMovieDetails(movie) {
  const availableTickets = movie.capacity - movie.tickets_sold;
  
  document.getElementById('poster').src = movie.poster;
  document.getElementById('title').textContent = movie.title; 
  document.getElementById('runtime').textContent = `${movie.runtime} minutes`; 
  document.getElementById('film-info').textContent = movie.description; 
  document.getElementById('showtime').textContent = movie.showtime; 
  document.getElementById('ticket-num').textContent = `${availableTickets} remaining tickets`;


if(availableTickets > 0){
  buyTicketBtn.disabled = false
  buyTicketBtn.textContent = 'Buy Ticket';
} else {
  buyTicketBtn.disabled = true;
  buyTicketBtn.textContent = 'Sold Out';
}
buyTicketBtn.onclick = () => buyTicket(movie);
}
function buyTicket(movie){
  const availableTickets = movie.capacity - movie.tickets_sold;
  if(availableTickets > 0){
      movie.tickets_sold += 1;
      //Update the frontend
      displayMovieDetails(movie);
      fetch(`http://localhost:3000/movies/${movie.id}`,{
          method: 'PATCH',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({tickets_sold:movie.tickets_sold})
      });
  };
}
function deleteFilm(movie,movieItem){
  movieItem.remove();
  //delete from the server
  fetch(`http://localhost:3000/movies/${movie.id}`,{
      method:'DELETE'
  });
}
});