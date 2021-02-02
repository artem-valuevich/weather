export const getWeather = (city) => `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c026b7e260ea6a4cea507080c2ca5e3f&units=metric`


export const getIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`