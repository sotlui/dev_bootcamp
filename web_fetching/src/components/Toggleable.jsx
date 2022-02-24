import React, {forwardRef, useImperativeHandle, useState} from "react";
import PropTypes from 'prop-types';

const Toggleable=forwardRef(({children, buttonLabel}, ref)=>{
    const [visible, setVisible]=useState(false);

    const hideWhenVisible = {display:visible? 'none':''}
    const showWhenVisible = {display:visible? '':'none'}

    const toggleVisiblity = ()=> setVisible(!visible);

    //Donde guardar desde fuera --> permite llamar desde el padre
    useImperativeHandle(ref,()=>{
        return {
            toggleVisiblity
        }
    })

    return (
        <div>
             <div style={hideWhenVisible}>
                <button onClick={toggleVisiblity}>
                    {buttonLabel}
                </button>
            </div>
            <div style={showWhenVisible}>
                {children}
                <button onClick={toggleVisiblity}>Cancel</button>
            </div>
        </div>
    )
});


//cambiar nombre
Toggleable.displayName='Toggleable'
//PropTypes
Toggleable.propTypes={
    buttonLabel:PropTypes.string.isRequired
}

export default Toggleable;