import React from 'react'
import {useEffect,useState} from "react";
import ClipLoader from "react-spinners/ClipLoader";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Weathbox from '../../component/Weathbox';
import WeatherButton from '../../component/WeatherButton';

//1.앱이 실행되자마자 현채위치 기반의 날씨가 보인다
//2.날씨정보에는 현재 도시.섭시.화시.날씨 상태정보
//3. 5개의 버튼이 있다 (1개는 현재 위치 4개는 다른도시)
//4. 버튼을 누를때마다 도시별 날씨가 보여진다 
//5. 현재 위치 기반 날씨버튼을 클릭하면 다시 현재위치 기반으로 돌아온다
//6. 데이터를 들고오는 동안 로딩 스피너 출력

const Port04 = () => {
  const [weather,setWeather] = useState(null);
  const cities=['paris','new york','tokyo','seoul'];
  const [city,setCity] = useState('');
  const [loading,setLoading] = useState(false);

  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      //위도
      let lat = position.coords.latitude;
      //경도
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat,lon)
    });
  };
  
  const getWeatherByCurrentLocation = async(lat,lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cf07a45cfd6996f4d3ed5efa8c0ee0e5&units=metric&units=imperial`;
    setLoading(true)  
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity= async()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf07a45cfd6996f4d3ed5efa8c0ee0e5&units=metric&units=imperial`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data);
    setLoading(false)
  }

  useEffect(()=>{
    if(city==""){
      //현재위치 가져오는거 실행
      getCurrentLocation();
    } else{
      getWeatherByCity();
    }
  },[city]);

  const handleCityChange = (city) =>{
    if (city == "current") {
      setCity(null);
    }else {
      setCity(city);
    }
  };
  return (
    <div>  
          {loading?(
        <div className='container'>
          <ClipLoader color="#f88c6b"loading={loading} size={150}/>
        </div>
      ):(
        <div className='container'>
          <Weathbox weather={weather}/>
          {/* <WeatherButton cities={cities} handleCityChange={handleCityChange} selectedCity={city}/> */}
        </div>
      )}
    </div>
  )
}

export default Port04
