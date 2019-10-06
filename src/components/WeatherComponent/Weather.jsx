import React from 'react';
import _ from "lodash";
import style from './Weather.module.css';
<<<<<<< HEAD
import store from "../../store-management/store";
import {createSetTextWeatherWidgetActionToWidgetWeatherDataReducer} from "../../store-management/widgetWeatherDataReducer";
=======
import {setTextWeatherWidgetActiveCreator} from "../../store";
>>>>>>> a78690a6b29666cf8254d781b5cf35eb16bbb24c

const Weather = (props) => {
       // this.getWeather = this.getWeather.bind(window);
        //window.getWeather = _.debounce(this.getWeather.bind(window), 3000);
<<<<<<< HEAD

    let onInputWidgetChange = (e) => {
        let inputText = e.target.value;
        store.dispatch(createSetTextWeatherWidgetActionToWidgetWeatherDataReducer(inputText));
=======
    let newInputText = React.createRef();

    let onInputWidgetChange = () => {
        let inputText = newInputText.current.value;
        props.store.dispatch(setTextWeatherWidgetActiveCreator(inputText));
>>>>>>> a78690a6b29666cf8254d781b5cf35eb16bbb24c
    };

    return (

        <div className={style.item}>
            <h2>Widget weather</h2>
            <input type="text" onChange={onInputWidgetChange} value={props.state.widgetWeatherData.inputText}/>
            <p>{props.state.widgetWeatherData.city}</p>
            <p>{props.state.widgetWeatherData.temp}</p>
            <p>{props.state.widgetWeatherData.error}</p>
        </div>

    );

};

export default Weather;