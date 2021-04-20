import React, { useContext } from 'react';
import { View } from 'react-native';
import ThemeProvider from './ThemeProvider';

const getButton(variant){
    switch(variant){
        case 'contained':
            return ButtonContained;
        case 'outlined': 
            return ButtonOutlined;
        default:
            return ButtonBase;
    }
}


const Button = props => {
    const styles = useContext(ThemeProvider.StylesContext);
    const Component = getButton(props.variant);
    return (
      <ThemeContext.Consumer>
        {(classes)=>props.variant==='contained'?
          <ButtonContained {...props} title={props.children.toUpperCase()} classes={classes} />
          :props.variant==='outlined'?
            <ButtonOutlined {...props} title={props.children.toUpperCase()} classes={classes} />
            :<ButtonBase {...props} title={props.children.toUpperCase()} classes={classes} />
        }
      </ThemeContext.Consumer>
    )
}

export default Button;