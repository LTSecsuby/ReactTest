import React from 'react';
import _ from "lodash";
import style from './Weather.module.css';
import store from "../../store-management/store";
import {createSetTextWeatherWidgetActionToWidgetWeatherDataReducer} from "../../store-management/widgetWeatherDataReducer";

const Weather = (props) => {
       // this.getWeather = this.getWeather.bind(window);
        //window.getWeather = _.debounce(this.getWeather.bind(window), 3000);

    return (

        <div className={style.item}>
            <h2>Widget weather</h2>
            <input type="text" onChange={props.onInputWidgetChange} value={props.widgetWeatherData.inputText}/>
            <p>{props.widgetWeatherData.city}</p>
            <p>{props.widgetWeatherData.temp}</p>
            <p>{props.widgetWeatherData.error}</p>
        </div>

    );

};

export default Weather;