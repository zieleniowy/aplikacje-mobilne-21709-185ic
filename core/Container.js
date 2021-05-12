import React, { useContext } from 'react';
import { View } from 'react-native';
import ThemeProvider from './ThemeProvider';



export default function Container(props){
    const styles = useContext(ThemeProvider.StylesContext);
    return (
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )

}
