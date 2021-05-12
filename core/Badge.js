import React, { useContext } from 'react';
import { View } from 'react-native';
import Typography from './Typography';
import ThemeProvider from './ThemeProvider';

export default function Avatar(props) {
    const styles = useContext(ThemeProvider.StylesContext);
    const position = { right: 2-8*String(props.value).length, top: -6 };
    return (
        <View style={[styles.badgeRoot, props.styles?.badgeRoot]}>
            <View style={[position, styles.badgeContent, styles[`bg_${props.color||'default'}`], props.styles?.badgeContent]}>
                <Typography style={styles[`color_${props.color||'default'}Contrast`]}>{props.value}</Typography>
            </View>

            {props.children}
        </View>
    )
  }