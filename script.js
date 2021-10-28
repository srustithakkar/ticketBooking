const container= document.querySelector(".container")
const seat = document.querySelector(".seat")
let totalSeat = [];

// function moviePrice (){
//   let movies = document.getElementById("movie")
//   const price = movies.value
//   document.getElementById("price").innerHTML = price;
//   document.getElementById("total").innerHTML = price;
// }

  // container.addEventListener('click', (e) => {
  //   document.getElementById(e).seat.selected
  // }
  // ) 

function seatStatus (e) {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    totalSeat.push(e.target.id)
    let seats = totalSeat.length;
    document.getElementById("count").innerHTML = seats;
    let movies = document.getElementById("movie")
    const price = movies.value  
    document.getElementById("price").innerHTML = price;
    document.getElementById("total").innerHTML = price * seats;
  }
}


container.addEventListener("click", seatStatus)