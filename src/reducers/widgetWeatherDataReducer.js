

const SET_TEXT_WEATHER_WIDGET = 'setTextWeatherWidget';

export let createSetTextWeatherWidgetActionToWidgetWeatherDataReducer = (msgAction, errorText, tempCity, cityName) => {
    return {type: SET_TEXT_WEATHER_WIDGET, message: msgAction, errorText: errorText, tempCity: tempCity, cityName: cityName}
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

    switch (action.type) {
        case SET_TEXT_WEATHER_WIDGET:
            //_.debounce(this._getWeather().bind(window), 3000);

            return {...state,
                widgetWeatherData: {...state.widgetWeatherData, inputText: action.message, city: action.cityName, temp: action.tempCity, error: action.errorText}};
        default:

            return state;

    }
};

export default widgetWeatherDataReducer;