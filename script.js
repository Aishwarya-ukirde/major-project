let weather = 
{
    apikey:"3941f9d65fe998e9daa9633337fa26622",
    fetchWeather: function (city)
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=3941f9d65fe998e9daa9633337fa2622")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data)
    {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } =data.wind;
        //console.log(name,icon,description,temp,humidity,speed)
        for(i=0;i<7;i++){
        document.querySelector(".city").innerText = "Weather In " + name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x700/?" + name + "')";
    }},

    search: function()
    {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click",function(){
weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
if (event.key == "Enter"){
    weather.search();
}
});
weather.fetchWeather("New Delhi");
