import React from 'react';
import _ from "lodash";
import style from './Weather.module.css';
import {dispatch} from "../../store";

const SET_TEXT_WEATHER_WIDGET = 'setTextWeatherWidget';

const Weather = (props) => {
       // this.getWeather = this.getWeather.bind(window);
        //window.getWeather = _.debounce(this.getWeather.bind(window), 3000);
    let newInputText = React.createRef();

    let createActive = (typeActive, msgActive) => {
      return {type: typeActive, message: msgActive}
    };

    let onInputWidgetChange = () => {
        let inputText = newInputText.current.value;
        dispatch(createActive(SET_TEXT_WEATHER_WIDGET, inputText));
    };

    return (

        <div className={style.item}>
            <h2>Widget weather</h2>
            <input type="text" onChange={onInputWidgetChange} ref={newInputText} value={props.store.getState().widgetWeatherData.inputText}/>
            <p>{props.store.getState().widgetWeatherData.city}</p>
            <p>{props.store.getState().widgetWeatherData.temp}</p>
            <p>{props.store.getState().widgetWeatherData.error}</p>
        </div>

    );

};

export default Weather;