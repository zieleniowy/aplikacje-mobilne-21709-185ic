import React, { useContext } from 'react';
import ButtonBase from './ButtonBase';
import ThemeProvider from './ThemeProvider';


const ButtonOutlined = props => {
    const styles = useContext(ThemeProvider.StylesContext);
    return (
        <ButtonBase 
            {...props}
            styles={{ 
                ...props.styles,
                paper: [styles[`border_${props.color||'default'}`], props.styles?.paper], 
            }} 
        >
            {props.children}
        </ButtonBase>
    )
}
export default ButtonOutlined;
