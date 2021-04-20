import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ThemeProvider from './ThemeProvider';

const ButtonBase = props =>{ 
    const styles = useContext(ThemeProvider.StylesContext);
    return (
        <TouchableOpacity activeOpacity={0.6} style={[styles.borderRadius, props.fullWidth&&styles.btnFullWidth, props.style, props.styles?.root]} onPress={props.onPress}>
            <View style={[styles.borderRadius, styles.btnRoot, props.fullWidth&&styles.btnFullWidth, props.styles?.paper]}>
                <Text style={[styles.btnTypography, styles[`color_${props.color||'default'}`], props.styles?.typography]}>{props.children.toUpperCase()}</Text>
            </View>
        </TouchableOpacity> 
    )
}
export default ButtonBase;