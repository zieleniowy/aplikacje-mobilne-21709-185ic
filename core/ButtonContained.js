import React, { useContext } from 'react';
import ButtonBase from './ButtonBase';
import ThemeProvider from './ThemeProvider';


const ButtonContained = props => {
    const styles = useContext(ThemeProvider.StylesContext);
    return (
        <ButtonBase 
            styles={{ 
                paper: styles[`bg_${props.color||'default'}`], 
                typography: styles[`color_${props.color||'default'}Contrast`]
            }} 
            {...props}
        >
            {props.children}
        </ButtonBase>
    )
}
export default ButtonContained;
