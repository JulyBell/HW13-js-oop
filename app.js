let dateArea = document.querySelector('#main');

class Clock{
	constructor(elem){
		this.dateArea = elem;
		this.timePattern = true;
		this.dateArea.addEventListener('click', (e) => {
			e.preventDefault();
			if(e.target.tagName === 'P'){
				this.toggle();
			}
		})
	}

	render(){	
		
		let date = new Date();
		let hours = date.getHours();
		hours < 10 ? hours = '0' + hours : hours = hours;
		
		let minutes = date.getMinutes();
		minutes < 10 ? minutes = '0' + minutes : minutes = minutes;
	
		let seconds = date.getSeconds();
		seconds < 10 ? seconds = '0' + seconds : seconds = seconds;
	
		let longDate = `<p>Current date: ${hours} : ${minutes} : ${seconds}</p>`;
		let shortDate = `<p>Current date: ${hours} : ${minutes}</p>`;
		  
		
		//this.dateArea.innerHTML = 'atata'
		//this.dateArea.innerHTML = this.timePattern === true ? longDate : shortDate;
		console.log(this.timePattern)
		this.dateArea.innerHTML = this.timePattern === true ? longDate : shortDate;
	}

	toggle(){

		console.log('clicked');
		this.timePattern = !this.timePattern;
		
	}
}


let time = new Clock(dateArea);
setInterval(time.render.bind(time), 1000);
time.toggle();




