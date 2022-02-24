import React from "react";
import Toggleable from "./Toggleable";
import PropTypes from 'prop-types';

export default function LoginForm(handleSubmit, username, password,...props){
   // const [loginVisible, setLoginVisible]=useState(false);

    //const hideWhenVisible = {display:loginVisible? 'none':''}
    //const showWhenVisible = {display:loginVisible? '':'none'}

    return (
        <Toggleable buttonLabel='Show Login'>
            <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text"
                    value={username}
                    name='Username'
                    placeholder='Username'
                    onChange={props.handleUsernameChange}
                />
                </div>
                <div>
                <input 
                    type="password"
                    value={password}
                    name='Password'
                    placeholder='Password'
                    onChange={props.handleUsernameChange}
                />
                </div>
                <button>Login</button>
            </form>
        </Toggleable>
    )
  }

  LoginForm.prototype=PropTypes={
      handleSubmit:PropTypes.func.isQequired,
      username:PropTypes.string.isQequired
  }