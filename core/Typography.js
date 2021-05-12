import React from 'react';
import ThemeProvider from './ThemeProvider';
import useTheme from './useTheme';
import { Text } from 'react-native';
export default function Avatar(props) {
    const theme = useTheme();
    const styles = React.useContext(ThemeProvider.StylesContext);

    return (
        <Text style={[theme.typography[props.variant||'body1'], styles.typography[`align_${props.align||'left'}`],  props.style]}>{props.children}</Text>
    )
  }