

var enterButton = document.getElementById("EnterButton");
var newURL;


enterButton.onclick = function(){
    
$(".temp").empty();
$(".Location").empty();
$(".High").empty();
$(".Low").empty();



    var userInput = document.getElementById("UserInput");
    var DATA = userInput.value;
    newURL = "https://api.openweathermap.org/data/2.5/weather?q=" + DATA +"&units=imperial&appid=670f682356ebd95c6b8c3629ec56a0f5";



    $.getJSON(newURL, function(data){
    console.log(data);
    
    var icon = 
        "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = 
        Math.floor(data.main.temp);
    var Location = 
        data.name;
    var high=
        Math.floor(data.main.temp_max);
    var low=
        Math.floor(data.main.temp_min);
    
    
    
    $(".icon").attr("src", icon);
    $(".temp").append(temp + "&deg;");
    $(".Location").append(Location);
    $(".High").append("High: " + high + "&deg;");
    $(".Low").append("low: " + low + "&deg;");
    console.log(icon);
    });

}










