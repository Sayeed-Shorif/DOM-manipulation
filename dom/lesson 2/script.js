// randomNumber generation

function randomColor(){
    const hexCode = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
      color += hexCode[Math.floor(Math.random() * 16)]
    }
    return color;
  } 
  
  let interval;
  const startColorChange = () =>{
      if (!interval) {
        interval = setInterval(changeColor, 1000)
      }
  
      function changeColor(){
        document.body.style.backgroundColor = randomColor();
      }
  }
  
  const stopColorChange = () =>{
      clearInterval(interval)
      interval = null;
  }
  
  document.querySelector('#start').addEventListener('click', startColorChange)
  document.querySelector('#stop').addEventListener('click', stopColorChange)
  
  