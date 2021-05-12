import React, { useContext } from 'react';
import { View } from 'react-native';
import ThemeProvider from './ThemeProvider';
export default function Paper(props){
    const styles = useContext(ThemeProvider.StylesContext);
    return <View style={[styles.paper, props.square&&{ borderRadius: 0 } , props.style]}>{props.children}</View>;
}