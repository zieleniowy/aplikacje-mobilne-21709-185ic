import React from 'react';
import ButtonBase from './ButtonBase';
import ButtonContained from './ButtonContained';
import ButtonOutlined from './ButtonOutlined';
const getButton =(variant)=>{
    switch(variant){
        case 'contained':
            return ButtonContained;
        case 'outlined': 
            return ButtonOutlined;
        case 'default':
        default:
            return ButtonBase;
    }
}


const Button = props => {
    const Component = getButton(props.variant);
    return (
      <Component {...props} />
    )
}

export default Button;