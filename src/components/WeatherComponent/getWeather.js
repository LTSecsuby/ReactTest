import {createSetTextWeatherWidgetActionToWidgetWeatherDataReducer} from "../../reducers/widgetWeatherDataReducer";

let errorText = '';
let tempCity = '';
let cityName = '';

export const getWeather = (city) => dispatch => {

    async function _getWeather() {

        const KEY_API = "0efa8be9f24f45f5916162018191009";

        if (city) {

            const api_url = await fetch(
                `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${KEY_API}&q=${city}&num_of_days=1&format=JSON`
            );

            const data = await api_url.json();

            if ("error" in data.data) {
                errorText = data.data.error[0].msg;
                tempCity = "";
                cityName = "";
            } else {
                errorText = "";
                tempCity = data.data.weather[0].avgtempC;
                cityName = data.data.request[0].query;
            }
        }
        dispatch(createSetTextWeatherWidgetActionToWidgetWeatherDataReducer(city, errorText, tempCity, cityName))
    }
    _getWeather();
};

