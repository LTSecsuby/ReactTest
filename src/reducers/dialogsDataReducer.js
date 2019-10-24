let initialState = {
    dialogsData: [
        {id: 1, name: 'Valera', message: "Hi, im Valera"},
        {id: 2, name: 'Kate', message: "Hi, im Kate"},
        {id: 3, name: 'John', message: "Hi, im John"},
        {id: 4, name: 'Margo', message: "Hi, im Margo"}
    ]
};

const dialogsDataReducer = (state = initialState, action) => {

    switch (action.type) {

        default:
            return state;
    }
};

export default dialogsDataReducer;