

const Icons = (icon) => {
   switch (icon) {
    case 'Thunderstorm':
        icon ='icons/thunderstorms-rain.svg'
        console.log('tormenta');
        break;
    case 'Drizzle':
        icon ='icons/drizzle.svg'
        console.log('llovizna');
        break;
    case 'Rain':
        icon ='icons/rain.svg'
        console.log('lluvia');
        break;
    case 'Snow':
        icon ='icons/snow.svg'
        console.log('nieve');
        break;
    case 'Clear':
        icon ='icons/clear-day.svg'
        console.log('soleado');
        break;
    case 'Smoke':
        icon ='icons/smoke.svg'
        console.log('humo');
        break;
    case 'Fog':
        icon ='icons/fog.svg'
        console.log('nublado');
        break;
    case 'Haze':
        icon ='icons/haze.svg'
        console.log('brumas');
        break;
    case 'Clouds':
        icon ='icons/cloudy.svg'
        console.log('nublado');
        break;
    
   }
   return icon
}

export default Icons