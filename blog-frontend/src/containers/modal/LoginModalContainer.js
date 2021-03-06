import React, { Component } from 'react';
import LoginModal from 'components/modal/LoginModal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as baseActions from 'store/modules/base';

class LoginModalContainer extends Component {

    handleLogin = async() =>{
        const{BaseActions , password} = this.props;
        try{
            await BaseActions.login(password);
            BaseActions.hideModal('login');
            localStorage.logged="true";
        }catch(e){
            console.log(e);
        }
    }

    handleCancel = () =>{
        const {BaseActions} = this.props;
        BaseActions.hideModal('login');
    }

    handleChange= (e) =>{
        const {value} = e.target;
        const {BaseActions} = this.props;
        BaseActions.changePasswordInput(value);
    }
    handleKeyPress = (e) =>{
        if(e.key === 'Enter')
            this.handleLogin();
    }
    render() {
        const {handleLogin, handleCancel, handleChange, handleKeyPress} = this;
        const {visible,password,error} = this.props;
        return (
            <LoginModal
                visible={visible}
                onCancel={handleCancel}
                onLogin={handleLogin} 
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                error={error}
                password={password}
            ></LoginModal>
        );
    }
}

export default connect(
    (state)=>({
        visible: state.base.getIn(["modal","login"]),
        password: state.base.getIn(["loginModal","password"]),
        error: state.base.getIn(["loginModal","error"])
    }),
    (dispatch)=>({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(LoginModalContainer);