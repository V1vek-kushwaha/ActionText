import React from 'react';

function Alert(props) {
    const captilize = (word)=>{
        const pahla =word.toLowerCase();
        return pahla.charAt(0).toUpperCase()+ pahla.slice(1);
    }
   return( 
     <div style={{height : '30px'}}>
    {props.alert &&       <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{captilize(props.alert.type)}</strong>{props.alert.msg}
    </div>}
        </div>
        )
}

export default Alert;
