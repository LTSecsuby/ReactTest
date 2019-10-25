const SET_TEXT_CONTEXT_FORM = 'setTextContextForm';
const SAVE_CONTEXT_FORM = 'saveContextForm';
const UNHIDE_CONTEXT_FORM = 'unhideContextForm';

export let createSetTextContextFormActiveToProfileDataReducer = (msgAction) => {
    return  {type: SET_TEXT_CONTEXT_FORM, message: msgAction}
};

export let createSaveContextFormActiveToProfileDataReducer = (msgAction) => {
    return  {type: SAVE_CONTEXT_FORM, message: msgAction}
};

export let createUnhideContextFormActiveToProfileDataReducer = (msgAction) => {
    return  {type: UNHIDE_CONTEXT_FORM, message: msgAction}
};


let initialState = {
    profileData: {
        boolContextForm: 'hide',
        textProfile: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda aut dolor fugit id non quia quisquam sint totam veritatis vitae, voluptates. Adipisci doloremque eum labore maxime omnis quos veritatis!'
    }
};

const profileDataReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_TEXT_CONTEXT_FORM:
            return {...state,
                profileData: {...state.profileData, textProfile: action.message}
            };
        case SAVE_CONTEXT_FORM:
            return {...state,
                profileData: {...state.profileData, boolContextForm: 'hide'}
            };
        case UNHIDE_CONTEXT_FORM:
            return {...state,
                profileData: {...state.profileData, boolContextForm: 'unhide'}
            };

        default:
            return state;
    }
};

export default profileDataReducer;