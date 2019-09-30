import _ from "lodash";
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
    setTextPostGroup(text) {
        this._state.groupsData.textGroupPost = text;
        this._subscriberRenderApp();
    },
    setTextGroup(text) {
        this._state.groupsData.nameGroupText = text;
        this._subscriberRenderApp();
    },
    _setIdPost() {
        this._state.groupsData.currentIdPost = this._state.groupsData.currentIdPost + 1;
    },
    _getIdPost() {
        return this._state.groupsData.currentIdPost;
    },
    addGroup() {
        let mark = true;
        for (let i = 0; i < this._state.groupsData.groupElement.length; i++) {
            if (this._state.groupsData.groupElement[i].elementName === this._state.groupsData.nameGroupText) mark = false;
        }
        if (mark) {
            let newElementGroup = {
                elementName: this._state.groupsData.nameGroupText
            };
            this._state.groupsData.groupElement.push(newElementGroup);
        }
        this._subscriberRenderApp();
    },
    addPostGroup() {
        let group = '' + window.location.pathname;

        let str = '';
        for (let i = 8; i < window.location.pathname.length; i++) {
            str = str + group[i];
        }

        this._setIdPost();

        let newPostGroup = {
            id: this._getIdPost(), groupElement: str, msg: this._state.groupsData.textGroupPost
        };

        this._state.groupsData.groupPosts.push(newPostGroup);
        this._subscriberRenderApp();
    },
    setTextWeatherWidget(text) {
        this._state.widgetWeatherData.inputText = text;
        //_.debounce(this._getWeather().bind(window), 3000);
        this._getWeather();

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
    }
};

export default store;