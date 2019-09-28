let state = {
    groupsData: {
        groupElement: [

        ],
        groupPosts: [],
        currentIdPost: 0,
        nameGroupText: '',
        textGroupPost: ''
    }
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

};

export let onGroupText = (element) => {

    state.groupsData.nameGroupText = element;
};

export let addPostElement = () => {

    let group = '' + window.location.pathname;

    let lenPost = group.length;

    let str = '';
    for (let i = 8; i < lenPost; i++) {
        str = str + group[i]
    }

    let idCurrent = state.groupsData.currentIdPost + 1;
    state.groupsData.currentIdPost = idCurrent;

    let newPostGroup = {
        id: idCurrent, groupElement: str, msg: state.groupsData.textGroupPost
    };

    state.groupsData.groupPosts.push(newPostGroup);
};

export let onPostText = (text) => {

    state.groupsData.textGroupPost = text;

};


export default state;