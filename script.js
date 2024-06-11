// Weather API is call from- "https://openweathermap.org/api"
const apiKey='3c940b1950bd00feaa29043b145a0934'; 
const cite=document.querySelector(".cite");
let search=document.querySelector(".search");
let now=new Date();
async function fetchWeatherData(cite){
  const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`+cite);
  const data= await response.json();
  console.log(data);
  
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".update").innerHTML=data.weather[0].main;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
  document.querySelector(".windSpeed").innerHTML=data.wind.speed+"km/h";
  document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
  document.querySelector(".visibility").innerHTML=data.visibility+"km";
  document.querySelector(".date").innerHTML=now.toDateString();
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
