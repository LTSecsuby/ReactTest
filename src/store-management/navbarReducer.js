let initialState = {
    navbarData: [
        {elementName: 'Profile', id: 1},
        {elementName: 'Dialogs', id: 2},
        {elementName: 'Friends', id: 3},
        {elementName: 'Groups', id: 4},
        {elementName: 'Weather', id: 5}
    ]
};

const navbarReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
};

export default navbarReducer;