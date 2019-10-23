import {connect} from "react-redux";
import NavbarWrap from "./NavbarWrap";

let mapStateToProps = (state) => {
    return {
        navbarData: state.navbarPage.navbarData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

const NavbarContainer = connect(mapStateToProps)(NavbarWrap);

export default NavbarContainer;