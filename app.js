
let dateArea = document.querySelector('#main');
let timePattern;

class Clock{
	constructor(){

	}

	showDate(){	
		let date = new Date();
		let hours = date.getHours();
		hours < 10 ? hours = '0' + hours : hours = hours;
		
		let minutes = date.getMinutes();
		minutes < 10 ? minutes = '0' + minutes : minutes = minutes;
	
		let seconds = date.getSeconds();
		seconds < 10 ? seconds = '0' + seconds : seconds = seconds;
	
		let longDate = `<p>Current date: ${hours} : ${minutes} : ${seconds}</p>`;
		let shortDate = `<p>Current date: ${hours} : ${minutes}</p>`;
		  
		dateArea.innerHTML = timePattern === true ? longDate : shortDate;
	}

	toggle(){
		document.querySelector('#main').addEventListener('click', (e) => {
			e.preventDefault();
		
			if(e.target.tagName === 'P'){
				console.log('clicked');
				timePattern = !timePattern;
		
			}
		})
	}
}


timePattern = true;

let time = new Clock();
setInterval(time.showDate, 1000);
time.toggle();




