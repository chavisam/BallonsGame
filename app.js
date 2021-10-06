

let count = 0;
var death;
const popBalloon = () => {
   //stop time to dead
   clearTimeout(death)
    // delete monster   
  
    let end = document.querySelector('.end');
    let monster = document.querySelector('#monster');
    end.removeChild(monster)   
   count = count +1
   console.log(count)
  document.querySelector("#balloon-count").innerHTML = count + '€';
  
  //put a new rock problem
  let mountain = document.querySelector('.mountain');
  let newRock = document.createElement('div');
  newRock.classList.add('rock');
  let randomWidth = Math.floor(Math.random() * (90 - 10 + 1) + 10);
  let randomHeight = Math.floor(Math.random() * (90 - 10 + 1) + 10);
  newRock.style.left = randomWidth + '%';
  newRock.style.top = randomHeight + '%';
  mountain.appendChild(newRock);
   createMonster() 
  
}

const createMonster = () => {
       //create new monster

       
       let randomPosition = Math.floor(Math.random() * (90 - 10 + 1) + 10)
    
       let end = document.querySelector('.end');
       end.innerHTML = '<span style="left:'+ randomPosition + '%" class="animate__slower animate__animated  animate__infinite animate__backInDown" onclick="popBalloon()" id="monster"><i class="fab fa-optin-monster"></i></span>';
      
       //Dead alert with sweetalert
      death = setTimeout(function(){ 
      swal('YOU ARE DEAD!','You Win: ' + count + '€','info',{button:"Play Again?"}) .then((value) => {location.reload()})
      }, 4000);

}

createMonster();

