// Your code here
document.addEventListener('DOMContentLoaded', async () => {
    
    
})
fetch("http://localhost:3000/films")
.then ((res) => res.json())
.then ((data) => {
    console.log(data);
const filmList = document.getElementById("films")
for(film of data){
    const filmItem = document.createElement('li');
films.innerHTML +=`
<div class="column">
<p class="col">${film.title} <button class ="btn btn-danger btn-sm" >Delete</button></p>
<div>
`
}

})
document.querySelector('#buy-ticket').addEventListener('click', () => {
    const ticketsAvailable = document.querySelector('#ticket-num');
    let currentTickets = parseInt(ticketsAvailable.textContent);
    
    if (currentTickets > 0) {
      currentTickets = 1;
      ticketsAvailable.textContent = currentTickets;
  
      
      const filmId = 1; // Use the correct film ID for the currently displayed film
      fetch(`http://localhost:3000/films/${filmId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          tickets_sold: parseInt(ticketsAvailable.textContent)
        })
      });
    } else {
      document.querySelector('#buy-ticket').textContent = 'Sold Out';
    }
  });
  
      
      
// function displayFilmDetails(film) {
//     const availableTickets = film.capacity - film.tickets_sold;
//     posterImage.src = film.poster;
//     titleElement.innerText = film.title;
//     runtimeElement.innerText = ${film.runtime} minutes;
//     filmInfoElement.innerText = film.description
//     showtimeElement.innerText = film.showtime;
//     ticketNumElement.innerText = availableTickets;
// }
// buyTicketButton.innerText = availableTickets > 0 ? "Buy ticket" : 
// buyTicketButton.disabled = availableTickets === 0 ;
 
// buyTicketButton.onclick = () => {
//     if (availableTickets > 0) {
//         buyTicket(film)
//     }
// };
// function buyTicket(film) {
//     const newTicketSold = film.tickets_sold + 1;
// }
// fetch(http://localhost:3000/films/${film.id}, {
//     method: "PATCH",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body:JSON.stringify({tickets_sold: newTicketsSold}),
// })
// .then(response => response.json())
// .then(updatedFilm =>{
//     displayFilmDetails(updatedFilm);
//     fetch("http://localhost:3000/tickets",{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             film_id: film.id,
//             number_of_tickets: 1,
//         })
//     })
// })

// // Function for deleting a film
// function deleteFilm(filmId) {
//     fetch(http://localhost:3000/films/${filmId}, {
//         method: "DELETE",
//     })
//     .then(() => {

//         const filmItem = document.querySelector([data-id='${filmId}']);
//         if (filmItem) {
//             filmList.removeChild(filmItem);
//         }
//     })
    
// }
// filmList.addEventListener("click", (event) =>{
//     if(event.target.classList.contains("delete-button")){
//         const filmId = event.target.parentElement.database.id;
//         deleteFilm(filmId);
//     }
// })
