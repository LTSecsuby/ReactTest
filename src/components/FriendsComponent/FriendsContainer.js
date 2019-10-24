import {connect} from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {
        friendsData: state.friendsPage.friendsData
    }
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;