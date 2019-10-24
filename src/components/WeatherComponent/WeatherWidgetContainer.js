import {connect} from "react-redux";
import Weather from "./Weather";
import {createSetTextWeatherWidgetActionToWidgetWeatherDataReducer} from "../../reducers/widgetWeatherDataReducer";


let mapStateToProps = (state) => {
    return {
        widgetWeatherData: state.widgetWeatherPage.widgetWeatherData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onInputWidgetChange: (e) => {
            let inputText = e.target.value;
            dispatch(createSetTextWeatherWidgetActionToWidgetWeatherDataReducer(inputText));
        }
    }
};

const WeatherWidgetContainer = connect(mapStateToProps, mapDispatchToProps)(Weather);

export default WeatherWidgetContainer;