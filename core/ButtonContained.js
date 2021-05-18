import React, { useContext } from 'react';
import ButtonBase from './ButtonBase';
import ThemeProvider from './ThemeProvider';


const ButtonContained = props => {
    const styles = useContext(ThemeProvider.StylesContext);
    return (
        <ButtonBase 
            {...props}
            styles={{ 
                ...props.styles,
                paper: [styles[`bg_${props.color||'default'}`], props.styles?.paper], 
                typography: [styles[`color_${props.color||'default'}Contrast`], props.styles?.typography]
            }} 
        >
            {props.children}
        </ButtonBase>
    )
}
export default ButtonContained;
