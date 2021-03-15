export function weatherToCardController({coord, name, main: {temp, humidity, pressure}, clouds: {all: cloudy}, wind, weather}) {
    const coordinates = `[${coord.lat.toFixed(2)}, ${coord.lon.toFixed(2)}]`;
    const cloudValue = `${cloudy}%`;
    const windValue = `${wind.speed} m/s, ${wind.deg}`;
    const pressureValue = `${pressure} hpa`;
    const humidityValue = `${humidity}%`;
    const [{main: weatherType}] = weather;
    const tempValue = Math.floor(temp);
    const weatherDetails = [
        {
            title: 'Ветер',
            value: windValue,
        },
        {
            title: 'Облачность',
            value: cloudValue,
        },
        {
            title: 'Давление',
            value: pressureValue
        },
        {
            title: 'Влажность',
            value: humidityValue,
        },
        {
            title: 'Координаты',
            value: coordinates,
        },
    ];
    return {weatherDetails, city: name, degree: tempValue, weatherType}

}
