const icons = {
  clear: '☀',
  rain: '🌧',
  storm: '⛈',
  snow: '🌨',
  mist: '🌫',
  clouds: '☁',
};

axios.all([
	axios.get("https://api.unsplash.com/photos/?client_id=cc8186bb37eb84441dce46d4f84bded8f4ed94f07502d4ee7b652fe5112a2de8"),
	axios.get("https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=7dc2b01f85d32c70b690ab4dac79f869"),
	axios.get("https://api.quotable.io/random")
]).then((data) => {
	const unsplash = data[0].data
	const weather = data[1].data 
	const quote = data[2].data.content

	const randomImageObj = unsplash[Math.floor(Math.random() * 10)]
	const temp =  weather.main.temp - 273.15; 
	const icon =  weather.weather[0].main;
	const city = weather.name

	$("body").css("background-image", `url(${randomImageObj.urls.raw})`);
	$("#top").append(`<p>${icons[icon.toLowerCase()]}${temp}&degC</p>`)
	$("#top").append(`<p>${city}<p>`)
	$("#bottom").append(`<p>${quote}</p>`)
	
}).catch(err => console.log(err))

setInterval(() => {
	let time = moment().format('LT');
	$("#time").text(time);
}
, 1000);
