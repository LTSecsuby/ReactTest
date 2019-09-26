let state = {
    groupsData: {
        groupElement: [
            {elementName: 'JavaScript'},
            {elementName: 'HTML'},
            {elementName: 'CSS'},
            {elementName: 'React'}
        ]
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

export let addGroupElement = (element) => {

    let newElementGroup = {
        elementName: element
    };
    state.groupsData.groupElement.push(newElementGroup);


};

export default state;