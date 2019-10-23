
const SET_TEXT_WEATHER_WIDGET = 'setTextWeatherWidget';

export let createSetTextWeatherWidgetActionToWidgetWeatherDataReducer = (msgAction) => {
    return {type: SET_TEXT_WEATHER_WIDGET, message: msgAction}
};

let initialState = {
    widgetWeatherData:
        {
            inputText: "",
            temp: "",
            city: "",
            error: ""
        }
};

const widgetWeatherDataReducer = (state = initialState, action) => {

    async function _getWeather() {

        const KEY_API = "0efa8be9f24f45f5916162018191009";

        if (state.widgetWeatherData.inputText) {
            const city = state.widgetWeatherData.inputText;

            const api_url = await fetch(
                `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${KEY_API}&q=${city}&num_of_days=1&format=JSON`
            );

            const data = await api_url.json();

            if ("error" in data.data) {
                state.widgetWeatherData.error = data.data.error[0].msg;
                state.widgetWeatherData.temp = "";
                state.widgetWeatherData.city = "";
            } else {
                state.widgetWeatherData.error = "";
                state.widgetWeatherData.temp = data.data.weather[0].avgtempC;
                state.widgetWeatherData.city = data.data.request[0].query;
            }
        }
    }

    switch (action.type) {
        case SET_TEXT_WEATHER_WIDGET:
            //_.debounce(this._getWeather().bind(window), 3000);

            _getWeather();

            return {...state,
                widgetWeatherData: {...state.widgetWeatherData, inputText: action.message}};
        default:

            return state;

    }
};

export default widgetWeatherDataReducer;