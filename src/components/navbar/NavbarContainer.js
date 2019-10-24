import {connect} from "react-redux";
import NavbarWrap from "./NavbarWrap";

let mapStateToProps = (state) => {
    return {
        navbarData: state.navbarPage.navbarData
    }
};

const NavbarContainer = connect(mapStateToProps)(NavbarWrap);

export default NavbarContainer;