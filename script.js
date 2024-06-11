const apiKey='3c940b1950bd00feaa29043b145a0934';
const cite=document.querySelector(".cite");
let search=document.querySelector(".search");

async function fetchWeatherData(cite){
  const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`+cite);
  if (!response.ok) {
    throw new Error('City not found');
}
  const data= await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".update").innerHTML=data.weather[0].main;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
  document.querySelector(".windSpeed").innerHTML=data.wind.speed+"Km/H";
  document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
  document.querySelector(".visibility").innerHTML=data.visibility+"Km";
};
search.addEventListener("submit", function(e){
  e.preventDefault();
  if(cite.value!==""){
    fetchWeatherData(cite.value)
  }
  else{
    alert("Please enter a city name");
  }
});
