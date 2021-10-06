
let arrColors = ['green','red','orange','blue','purple','yellow','black','pink'];
 let ballonsMap = [];



const popBalloon = (position) => {
    // delete balloons
    
   document.querySelector(`#balloon${position}`).classList.remove('active');
   document.querySelector(`#balloon${position}`).classList.add('popped');
   ballonsMap.splice(position,1,null);
   
   document.querySelector("#balloon-count").innerHTML = ballonsMap.filter(b => b !== null).length;
    console.log(ballonsMap)
   if(ballonsMap.filter(b => b !== null).length == 0) window.location.reload(); // <--- reload website when no more balloons are left
}




const render = () => {
    let balloonsNumber=document.querySelector('#balloon_input').value ;
    // convert ballons map of colors into real html balloons
    for (let i = 0; i < balloonsNumber; i++) {
        //randomly adding color ballons
        let randomNumber = Math.floor(Math.random() *(arrColors.length-1 +1 ) + 1);
        ballonsMap.push(arrColors[randomNumber])

        const ballons = ballonsMap.map((color, position) => {
            return `<div class="balloon active" id="balloon${position}" onclick="popBalloon(${position})" style="background-color: ${color}"></div>`; // <--- render each balloon
        });
    
        document.querySelector("#balloon-count").innerHTML = ballons.filter(b => b !== null).length; // <-- render the balloon count into the DOM
        document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM
    
    }
   
    
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();