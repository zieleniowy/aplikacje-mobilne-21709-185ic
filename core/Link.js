import React, { useContext } from 'react';
import { Text, TouchableWithoutFeedback,  Linking  } from 'react-native';
import Typography from './Typography';
import ThemeProvider from './ThemeProvider';

export default function Avatar(props) {
    const styles = useContext(ThemeProvider.StylesContext);
    const onPress = props.onPress||(()=>Linking.openURL(props.url));
    return (
        //why styles.link not working??????
        <TouchableWithoutFeedback onPress={onPress}><Text style={[styles.link, styles[`color_${props.color||'default'}`], { textDecorationLine: 'underline' }, props.style]}>{props.children}</Text></TouchableWithoutFeedback>
    )
  }