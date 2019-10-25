import {connect} from "react-redux";
import Profile from "./Profile";
import {
    createSaveContextFormActiveToProfileDataReducer,
    createSetTextContextFormActiveToProfileDataReducer, createUnhideContextFormActiveToProfileDataReducer
} from "../../reducers/profileDataReducer";

let mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setTextContextForm: (e)=> {
            let textContextForm = e.target.value;
            dispatch(createSetTextContextFormActiveToProfileDataReducer(textContextForm));

        },
        saveContextForm: ()=> {
            dispatch(createSaveContextFormActiveToProfileDataReducer('hide'));
        },
        unhideContextForm: ()=> {
            dispatch(createUnhideContextFormActiveToProfileDataReducer('unhide'));
        }

    }
};


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;