export const getWeather = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=612063be1ae68a9db6d031baba132bda&units=metric`


export const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`