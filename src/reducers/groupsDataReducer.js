
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

let initialState = {
    groupsData: {
        groupElement: [],
        groupPosts: [],
        currentIdGroup: 0,
        currentIdPost: 0,
        nameGroupText: '',
        textGroupPost: '',
        _setIdPost() {
            this.currentIdPost = this.currentIdPost + 1;
        },
        _getIdPost() {
            return this.currentIdPost;
        },
        _setIdGroup() {
            this.currentIdGroup = this.currentIdGroup + 1;
        },
        _getIdGroup() {
            return this.currentIdGroup;
        }
    }
};

const groupsDataReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_TEXT_GROUP:
            return {...state,
                groupsData: {...state.groupsData, nameGroupText: action.message}
            };

        case SET_TEXT_POST_GROUP:
            return {...state,
                groupsData: {...state.groupsData, textGroupPost: action.message}
            };

        case ADD_POST_GROUP:
            let group = '' + window.location.pathname;

            let str = '';
            for (let i = 8; i < window.location.pathname.length; i++) {
                str = str + group[i];
            }
            state.groupsData._setIdPost();
            return {...state,
                groupsData: {...state.groupsData,
                    groupPosts: [...state.groupsData.groupPosts, {id: state.groupsData._getIdPost(), groupElement: str, msg: state.groupsData.textGroupPost}]}
            };

        case ADD_GROUP:
            let mark = true;
            for (let i = 0; i < state.groupsData.groupElement.length; i++) {
                if (state.groupsData.groupElement[i].elementName === state.groupsData.nameGroupText) mark = false;
            }
            if (mark) {
                state.groupsData._setIdGroup();
                return {...state,
                    groupsData: {...state.groupsData,
                        groupElement: [...state.groupsData.groupElement, {id: state.groupsData._getIdGroup(), elementName: state.groupsData.nameGroupText}]}
                };
            } else return state;

        default:
            return state;
    }
};

export default groupsDataReducer;