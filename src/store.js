import _ from "lodash";

const SET_TEXT_POST_GROUP = 'setTextPostGroup';
const SET_TEXT_GROUP = 'setTextGroup';
const ADD_POST_GROUP = 'addPostGroup';
const ADD_GROUP = 'addGroup';
const SET_TEXT_WEATHER_WIDGET = 'setTextWeatherWidget';

let store = {

    _subscriberRenderApp() {
        console.log('no subscribers..')
    },
    subscribe(observer) {
        this._subscriberRenderApp = observer;
    },
    _state: {
        groupsData: {
            groupElement: [],
            groupPosts: [],
            currentIdPost: 0,
            nameGroupText: '',
            textGroupPost: ''
        },
        dialogsData: [
            {id: 1, name: 'Valera', message: "Hi, im Valera"},
            {id: 2, name: 'Kate', message: "Hi, im Kate"},
            {id: 3, name: 'John', message: "Hi, im John"},
            {id: 4, name: 'Margo', message: "Hi, im Margo"}
        ],
        navbarData: [
            {elementName: 'Profile'},
            {elementName: 'Dialogs'},
            {elementName: 'Friends'},
            {elementName: 'Groups'},
            {elementName: 'Weather'}
        ],
        widgetWeatherData:
            {
                inputText: "",
                temp: "",
                city: "",
                error: ""
            }
    },
    getState() {
        return this._state;
    },
    _setIdPost() {
        this._state.groupsData.currentIdPost = this._state.groupsData.currentIdPost + 1;
    },
    _getIdPost() {
        return this._state.groupsData.currentIdPost;
    },
    async _getWeather() {

        const KEY_API = "0efa8be9f24f45f5916162018191009";

        if (store.getState().widgetWeatherData.inputText) {
            const city = store.getState().widgetWeatherData.inputText;

            const api_url = await fetch(
                `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${KEY_API}&q=${city}&num_of_days=1&format=JSON`
            );

            const data = await api_url.json();

            if ("error" in data.data) {
                store.getState().widgetWeatherData.error = data.data.error[0].msg;
                store.getState().widgetWeatherData.temp = "";
                store.getState().widgetWeatherData.city = "";
            } else {
                store.getState().widgetWeatherData.error = "";
                store.getState().widgetWeatherData.temp = data.data.weather[0].avgtempC;
                store.getState().widgetWeatherData.city = data.data.request[0].query;
            }
        }
        store._subscriberRenderApp();
    },
    dispatch(active) {
        switch (active.type) {
            case SET_TEXT_GROUP:
                store._state.groupsData.nameGroupText = active.message;
                store._subscriberRenderApp();
                break;
            case SET_TEXT_POST_GROUP:
                store._state.groupsData.textGroupPost = active.message;
                store._subscriberRenderApp();
                break;
            case ADD_POST_GROUP:
                let group = '' + window.location.pathname;

                let str = '';
                for (let i = 8; i < window.location.pathname.length; i++) {
                    str = str + group[i];
                }

                store._setIdPost();

                let newPostGroup = {
                    id: store._getIdPost(), groupElement: str, msg: store._state.groupsData.textGroupPost
                };

                store._state.groupsData.groupPosts.push(newPostGroup);
                store._subscriberRenderApp();
                break;
            case ADD_GROUP:
                let mark = true;
                for (let i = 0; i < store._state.groupsData.groupElement.length; i++) {
                    if (store._state.groupsData.groupElement[i].elementName === store._state.groupsData.nameGroupText) mark = false;
                }
                if (mark) {
                    let newElementGroup = {
                        elementName: store._state.groupsData.nameGroupText
                    };
                    store._state.groupsData.groupElement.push(newElementGroup);
                }
                store._subscriberRenderApp();
                break;
            case SET_TEXT_WEATHER_WIDGET:
                store._state.widgetWeatherData.inputText = active.message;
                //_.debounce(this._getWeather().bind(window), 3000);
                store._getWeather();
                break;
            default:
                alert('unknown active type');
                break;

        }
    }
};

export const setTextPostGroupActiveCreator = (activeMessage) => {
    return { type: SET_TEXT_POST_GROUP, message: activeMessage}
};

export const setTextGroupActionCreator = (activeMessage) => {
  return { type: SET_TEXT_GROUP, message: activeMessage }
};

export const addPostGroupActiveCreator = () => {
    return { type: ADD_POST_GROUP }
};

export const addGroupActionCreator = () => {
  return { type: ADD_GROUP }
};

export const setTextWeatherWidgetActiveCreator = (activeMessage) => {
    return { type: SET_TEXT_WEATHER_WIDGET, message: activeMessage}
};

export default store;