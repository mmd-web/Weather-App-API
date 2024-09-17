let $ = document;

let getInputCityName = $.getElementById('cityValue');
let btnSearch = $.getElementById('btn_search');
let getElemCityName = $.getElementById('cityName');
let getElemDate = $.getElementById('date');
let getElemDeg = $.getElementById('deg');
let getElemWeather = $.getElementById('weather');
let getElemLowWeather = $.getElementById('low_hi');

let saveValueInpCityName ;
let apiKeyValue = '2b035ef3f205e674b7d38785063e4c6f';

let apiValue = {
  url : 'https://api.openweathermap.org/data/2.5/weather?q=',
  key : '2b035ef3f205e674b7d38785063e4c6f',
}

btnSearch.addEventListener('click' , () => {
  saveValueInpCityName = getInputCityName.value;
  

  if (saveValueInpCityName) {
    fetch(`${apiValue.url}${saveValueInpCityName}&appid=${apiValue.key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
  }
  
})

let saveValueConversion ;

function setData (data) {
  getElemCityName.innerHTML = `${data.name} , ${data.sys.country}`;
  
  getElemDeg.innerHTML = `${conversion(data.main.temp)}°C`;
  
  getElemWeather.innerHTML = data.weather[0].main;
  
  getElemLowWeather.innerHTML = `Low: ${conversion(data.main.temp_min)}°C / Max: ${conversion(data.main.temp_max)}°C`
}

function conversion (deg) {
  saveValueConversion = Math.floor(deg - 273.15);
  return saveValueConversion;
}