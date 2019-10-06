import store from "./store";

const SET_TEXT_WEATHER_WIDGET = 'setTextWeatherWidget';

export let createSetTextWeatherWidgetActionToWidgetWeatherDataReducer = (msgAction) => {
    return {type: SET_TEXT_WEATHER_WIDGET, message: msgAction}
};

const widgetWeatherDataReducer = (state, action) => {

    async function _getWeather() {

        const KEY_API = "0efa8be9f24f45f5916162018191009";

        if (state.inputText) {
            const city = state.inputText;

            const api_url = await fetch(
                `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${KEY_API}&q=${city}&num_of_days=1&format=JSON`
            );

            const data = await api_url.json();

            if ("error" in data.data) {
                state.error = data.data.error[0].msg;
                state.temp = "";
                state.city = "";
            } else {
                state.error = "";
                state.temp = data.data.weather[0].avgtempC;
                state.city = data.data.request[0].query;
            }
        }
        store._subscriberRenderApp(store.getState());
    }

    switch (action.type) {
        case SET_TEXT_WEATHER_WIDGET:
            state.inputText = action.message;
            //_.debounce(this._getWeather().bind(window), 3000);
            _getWeather();

            return state;
        default:

            return state;

    }
};

export default widgetWeatherDataReducer;