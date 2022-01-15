let nameArray = [];
let names = document.querySelector('.names');
let winnerIs = document.querySelector('.winnerIs');

let input = document.querySelector('#fileInput');
  

input.addEventListener('change', () => {
    let files = input.files;
  
    if (files.length == 0) return;
  
    const file = files[0];
  
    let reader = new FileReader();
  
    reader.onload = (e) => {
        const file = e.target.result;
  
        const lines = file.split(/\r\n|\n/);
        names.value = lines.join('\n');
  
    };
  
    reader.onerror = (e) => alert(e.target.error.name);
  
    reader.readAsText(file);
});


let i = 0;
let intervalHandle = null;
const startButton = document.querySelector('.start-btn');
const stopButton = document.querySelector('.stop-btn');

startButton.addEventListener('click', function(){
	intervalHandle = setInterval(function(){
		
		winnerIs.textContent = nameArray[i++ % nameArray.length];
	}, 100);
	names = names.value;
	nameArray = names.split(',');
		
});

stopButton.addEventListener('click', function(){
	
	let winner = nameArray[Math.floor(Math.random()*nameArray.length)];
	
	winnerIs.textContent = "winner is " + winner;
	clearInterval(intervalHandle);
});





