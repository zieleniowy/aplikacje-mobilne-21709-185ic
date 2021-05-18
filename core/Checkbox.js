import React, { useContext } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Unchecked from '../icons/CheckboxUnchecked';
import Checked from '../icons/CheckboxChecked';
import ThemeProvider from './ThemeProvider';
import useTheme from './useTheme';
import Typography from './Typography';

export default function Checkbox(props) {
    const styles = useContext(ThemeProvider.StylesContext);
    const theme = useTheme();
    const color = theme.palette[props.color||'default']?.main||'#000';
    const defaultColor = styles.color_default.color;
    const handlePress = props.onChange.bind(null, !props.checked);
    return (
        <TouchableWithoutFeedback onPress={handlePress} style={styles.checkbox.touchable}>
                <View style={[styles.checkbox.root, props.style]}>
                        {props.checked?<Checked style={styles.checkbox.checked} fill={color} />:<Unchecked style={styles.checkbox.unchecked} fill={defaultColor} />}
                        <Typography variant="button">{props.label}</Typography>
                </View>
        </TouchableWithoutFeedback>
    )
  }