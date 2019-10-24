import {connect} from "react-redux";
import Groups from "./Groups";
import {
    createAddGroupActiveToGroupsDataReducer, createAddPostGroupActiveToGroupsDataReducer,
    createSetTextGroupActiveToGroupsDataReducer, createSetTextPostGroupActiveToGroupsDataReducer
} from "../../reducers/groupsDataReducer";

let mapStateToProps = (state) => {
    return {
        groupsData: state.groupsPage.groupsData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onGroupChange: (e) => {
            let nameGroups = e.target.value;
            dispatch(createSetTextGroupActiveToGroupsDataReducer(nameGroups));
        },
        onPostChange: (e) => {
            let textPosts = e.target.value;
            dispatch(createSetTextPostGroupActiveToGroupsDataReducer(textPosts));
        },
        addGroups: () => {
            dispatch(createAddGroupActiveToGroupsDataReducer());
            dispatch(createSetTextGroupActiveToGroupsDataReducer(''));
        },
        addPosts: () => {
            dispatch(createAddPostGroupActiveToGroupsDataReducer());
            dispatch(createSetTextPostGroupActiveToGroupsDataReducer(''));
        }
    }
};

const GroupsContainer = connect(mapStateToProps, mapDispatchToProps)(Groups);

export default GroupsContainer;