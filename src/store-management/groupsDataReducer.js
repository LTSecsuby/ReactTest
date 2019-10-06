
const SET_TEXT_POST_GROUP = 'setTextPostGroup';
const SET_TEXT_GROUP = 'setTextGroup';
const ADD_POST_GROUP = 'addPostGroup';
const ADD_GROUP = 'addGroup';

export let createSetTextGroupActiveToGroupsDataReducer = (msgAction) => {
    return  {type: SET_TEXT_GROUP, message: msgAction}
};
export let createSetTextPostGroupActiveToGroupsDataReducer = (msgAction) => {
    return  {type: SET_TEXT_POST_GROUP, message: msgAction}
};
export let createAddPostGroupActiveToGroupsDataReducer = () => {
    return  {type: ADD_POST_GROUP}
};
export let createAddGroupActiveToGroupsDataReducer = () => {
    return  {type: ADD_GROUP}
};

const groupsDataReducer = (state, action) => {

    switch (action.type) {
        case SET_TEXT_GROUP:
            state.nameGroupText = action.message;
            return state;

        case SET_TEXT_POST_GROUP:
            state.textGroupPost = action.message;
            return state;

        case ADD_POST_GROUP:
            let group = '' + window.location.pathname;

            let str = '';
            for (let i = 8; i < window.location.pathname.length; i++) {
                str = str + group[i];
            }

            state._setIdPost();

            let newPostGroup = {
                id: state._getIdPost(), groupElement: str, msg: state.textGroupPost
            };

            state.groupPosts.push(newPostGroup);
            return state;

        case ADD_GROUP:
            let mark = true;
            for (let i = 0; i < state.groupElement.length; i++) {
                if (state.groupElement[i].elementName === state.nameGroupText) mark = false;
            }
            if (mark) {

                state._setIdGroup();

                let newElementGroup = {
                    id: state._getIdGroup(), elementName: state.nameGroupText
                };
                state.groupElement.push(newElementGroup);
            }
            return state;

        default:

            return state;

    }
};

export default groupsDataReducer;