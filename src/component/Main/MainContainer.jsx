import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Main from "./Main";
import {getResultThunk} from "../../redux/mainReducer";

class MainContainer extends React.Component {

    componentDidMount() {
        this.props.getResultThunk()
    }

    render() {

        return (
            <Main {...this.props}    />
        );
    }
}

let mapStateToProps = (state) => ({
    listKhajit: state.mainPage.listKhajit
})


export default compose(
    connect(mapStateToProps, {getResultThunk}),
    // withRouter

)(MainContainer)


