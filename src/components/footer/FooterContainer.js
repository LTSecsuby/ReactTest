import {connect} from "react-redux";
import Footer from "./Footer";


let mapStateToProps = (state) => {
    return {
        footerData: state.footerPage.footerData
    }
};

const FooterContainer = connect(mapStateToProps)(Footer);

export default FooterContainer;