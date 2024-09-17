let $ = document;

let getInputCityName = $.getElementById('cityValue');
let getCTname = $.getElementById('CTname')
let btnSearch = $.getElementById('btn_search');
let getElemCityName = $.getElementById('cityName');
let getElemDate = $.getElementById('date');
let getElemDeg = $.getElementById('deg');
let getElemWeather = $.getElementById('weather');
let getElemLowWeather = $.getElementById('low_weather');
let getElemHightWeather = $.getElementById('hight_weather');

let saveValueInpCityName ;
let apiKeyValue = '2b035ef3f205e674b7d38785063e4c6f';

btnSearch.addEventListener('click' , () => {
  saveValueInpCityName = getInputCityName.value;
  

  if (saveValueInpCityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${saveValueInpCityName}&appid=2b035ef3f205e674b7d38785063e4c6f`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data)
      })
  }
  
})

function setData (data) {
  getElemCityName.innerHTML = data.name;
  getCTname.innerHTML = data.sys.country;
}