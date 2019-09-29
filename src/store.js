let store = {

    _subscriber() {
        console.log('no subscribers..')
    },
    subscribe(observer) {
        this._subscriber = observer;
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
        ]
    },
    getState() {
        return this._state;
    },
    setTextPostGroup(text) {
        this._state.groupsData.textGroupPost = text;
        render();
    },
    setTextGroup(text) {
        this._state.groupsData.nameGroupText = text;
        render();
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
        render();
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
        render();
    }
};
const render = () => store._subscriber();

export default store;