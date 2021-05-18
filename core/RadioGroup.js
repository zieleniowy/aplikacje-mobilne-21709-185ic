import React, { useContext } from 'react';
import { View } from 'react-native';
import ThemeProvider from './ThemeProvider';
import useTheme from './useTheme';

export default function RadioGroup(props) {
    const styles = useContext(ThemeProvider.StylesContext);
    const theme = useTheme();
    const color = theme.palette[props.color||'default']?.main||'#000';
    const defaultColor = styles.color_default.color;
    return (
            <View style={[styles.radioGroup.root, props.horizontal?styles.radioGroup.rootHorizontal:styles.radioGroup.rootVertical]}>
                    {React.Children.map(props.children, child=>React.cloneElement(child, { color, defaultColor, styles, checked: props.value===child.props.value, onPress: props.onChange }))}
            </View>
    )
  }