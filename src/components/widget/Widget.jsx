import React from 'react';
import _ from "lodash";
import style from './Widget.module.css';

const KEY_API = "0efa8be9f24f45f5916162018191009";

class Widget extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            temp: "",
            city: "",
            error: ""
        };
        this.getWeather = this.getWeather.bind(this);
        //this.getWeather = _.debounce(this.getWeather.bind(this), 1000);
    }

    getWeather = async e => {

        if (e.target.value) {
            const city = e.target.value;

            const api_url = await fetch(
                `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${KEY_API}&q=${city}&num_of_days=1&format=JSON`
            );

            const data = await api_url.json();

            if ("error" in data.data) {
                this.setState({

                    error: data.data.error[0].msg,
                    temp: "",
                    city: ""
                })
            } else {
                this.setState({
                    error: "",
                    temp: data.data.weather[0].avgtempC,
                    city: data.data.request[0].query
                })
            }
        }
    }

    render() {

        return (

            <div className={style.item}>
                <h2>Widget weather</h2>
                <input type="text" onChange={this.getWeather}/>
                <p>{this.state.city}</p>
                <p>{this.state.temp}</p>
                <p>{this.state.error}</p>
            </div>

        );
    }
}

export default Widget;