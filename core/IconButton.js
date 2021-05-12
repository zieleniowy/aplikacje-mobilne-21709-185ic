import React, { useContext } from 'react';
import { View, TouchableHighlight } from 'react-native';
import Typography from './Typography';
import ThemeProvider from './ThemeProvider';

export default function Avatar(props) {
    const styles = useContext(ThemeProvider.StylesContext);
    return (
        <TouchableHighlight activeOpacity={0.8} underlayColor="rgba(0,0,0,0.2)" style={[styles.borderRadiusCircle, styles.iconButtonRoot, styles[`iconButton_${props.size||'medium'}`], props.style, props.styles?.root]} onPress={props.onPress}>
            {props.children}
        </TouchableHighlight>
    )
  }