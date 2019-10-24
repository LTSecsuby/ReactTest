import {connect} from "react-redux";
import Dialogs from "../Dialogs";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData
    }
};

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;