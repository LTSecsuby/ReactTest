let renderApp = () => {
    console.log('render..');
};

let state = {
    groupsData: {
        groupElement: [],
        groupPosts: [],
        currentIdPost: 0,
        nameGroupText: '',
        textGroupPost: ''
    }
};

export const subscribe = (observer) => {
    renderApp = observer;
};

export let dialogsData = [
    {id: 1, name: 'Valera', message: "Hi, im Valera"},
    {id: 2, name: 'Kate', message: "Hi, im Kate"},
    {id: 3, name: 'John', message: "Hi, im John"},
    {id: 4, name: 'Margo', message: "Hi, im Margo"}
];

export let navbarData = [
    {elementName: 'Profile'},
    {elementName: 'Dialogs'},
    {elementName: 'Friends'},
    {elementName: 'Groups'},
    {elementName: 'Weather'}
];

export let addGroupElement = () => {

    let x = true;

    let len = state.groupsData.groupElement.length;

    for (let i = 0; i < len; i++) {
        if (state.groupsData.groupElement[i].elementName === state.groupsData.nameGroupText) x = false;
    }
    if (x) {
        let newElementGroup = {
            elementName: state.groupsData.nameGroupText
        };
        state.groupsData.groupElement.push(newElementGroup);
    }
    renderApp();
};

export let onGroupText = (element) => {

    state.groupsData.nameGroupText = element;
    renderApp();
};

export let addPostElement = () => {

    let group = '' + window.location.pathname;

    let str = '';
    for (let i = 8; i < window.location.pathname.length; i++) {
        str = str + group[i]
    }

    let idCurrent = state.groupsData.currentIdPost + 1;
    state.groupsData.currentIdPost = idCurrent;

    let newPostGroup = {
        id: idCurrent, groupElement: str, msg: state.groupsData.textGroupPost
    };

    state.groupsData.groupPosts.push(newPostGroup);
    renderApp();
};

export let onPostText = (text) => {

    state.groupsData.textGroupPost = text;
    renderApp();
};


export default state;