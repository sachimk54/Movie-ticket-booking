const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row.seat:not(.occupied)');
const count = document.getElementById('çount');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');

let ticketprice = +movieselect.value;

//  var img = document.createElement("")
function myimg (){
  
  // var img = document.createElement("img");
  // img.src = "avenger.jpg";

  // var div = document.getElementById("x");
  // div.appendChild(img);
  document.getElementById("demo").innerHTML="avenger.jpg"
}

//console.log(typeof ticketprice);


function updateSelectedCount() {
    const seat_selected = document.querySelectorAll('.row .seat .selected')
    //console.log(seat_selected);
    const selectedseatscount = seat_selected.length;
   //console.log(selectedseatscount)
    count.innerText = selectedseatscount;
    total.innerText = selectedseatscount * ticketprice;
}

 
container.addEventListener('click', (e) => {
  //  console.log(e.target);
 if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
   // console.log(e.target);
    e.target.classList.toggle('selected');
 }

 updateSelectedCount();
 });



