import React, { useContext } from 'react';
import { View } from 'react-native';
import ThemeProvider from './ThemeProvider';

export default function AppBar(props){
    const styles = useContext(ThemeProvider.StylesContext);
    return <View style={[styles.appBar, styles[`bg_${props.color||'primary'}`], props.style]}>{props.children}</View>;
}