import {connect} from "react-redux";
import Weather from "./Weather";
import {getWeather} from "./getWeather";


let mapStateToProps = (state) => {
    return {
        widgetWeatherData: state.widgetWeatherPage.widgetWeatherData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onInputWidgetChange: (e) => {
            let inputText = e.target.value;
            dispatch(getWeather(inputText))
        }
    }
};

const WeatherWidgetContainer = connect(mapStateToProps, mapDispatchToProps)(Weather);

export default WeatherWidgetContainer;