import React, { Component } from 'react';
import LoginModalContainer from '../modal/LoginModalContainer';
import { connect } from 'react-redux';
import * as baseActions from 'store/modules/base';
import { bindActionCreators } from 'redux';

class Base extends Component {
    initialize = async () =>{
        const {BaseActions} = this.props;
        if(localStorage.logged !=="true"){
            BaseActions.tempLogin();
        }
        BaseActions.checkLogin();
    }
    componentDidMount(){
        this.initialize();
    }

    render() {
        return (
            <div>
                <LoginModalContainer />
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch)=>({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(Base);