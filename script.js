const container= document.querySelector(".container")
const seat = document.querySelector(".seat")
const moviePrice = document.getElementById("movie");
let ticketPrice  = document.getElementById("movie").value = "10"
let totalSeat = [];

// eventListener for container and dropdown
container.addEventListener("click", seatCount);
movie.addEventListener("change", function(e){
  ticketPrice = e.target.value;
  calculateValue(totalSeat, ticketPrice);
});

//  calculate Movie Price
function calculateValue(totalSeat, ticketPrice){
  document.getElementById("price").innerHTML = ticketPrice;
  document.getElementById("count").innerHTML = totalSeat.length;
  const total = totalSeat.length * ticketPrice
  document.getElementById("total").innerHTML = total;
}

// seat Count & changing the style
function seatCount(e){
  if(e.target.classList.contains('selected')){
    e.target.classList.remove('selected');
    totalSeat.pop(e.target.id);
    calculateValue(totalSeat, ticketPrice);
  }
  else{
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
      e.target.classList.add('selected');
      totalSeat.push(e.target.id);
      calculateValue(totalSeat, ticketPrice);
    }
  }
} 
