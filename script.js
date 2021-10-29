const container= document.querySelector(".container")
const seat = document.querySelector(".seat")
let totalSeat = [];

function totalSeatValue(id){
  if(totalSeat.includes(id)){
    totalSeat.pop(id);
  }
  else {
    totalSeat.push(id)
  }
}

function onMovieChange(value){
  console.log(value)
  seatStatus()
}

function seatStatus (e) {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    totalSeatValue(e.target.id)
    let seats = totalSeat.length;
    document.getElementById("count").innerHTML = seats;
    let movies = document.getElementById("movie")
    const price = movies.value  
    document.getElementById("price").innerHTML = price;
    document.getElementById("total").innerHTML = price * seats;
  }
}


container.addEventListener("click", seatStatus)