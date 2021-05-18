import React, { useContext } from 'react';
import { View } from 'react-native';
import Typography from './Typography';
import ThemeProvider from './ThemeProvider';
import Transition from './Transition';
export default function Avatar(props) {
    const styles = useContext(ThemeProvider.StylesContext);
    const position = { right: 2-8*String(props.value).length, top: -6 };
    return (
            <View style={[styles.badgeRoot, props.styles?.badgeRoot, props.style]}>
                <Transition type="zoom" in={(Boolean(props.value)||typeof props.value==='number')&&(!props.hideZero||props.value!=0)}  style={[position, styles.badgeContent, styles[`bg_${props.color||'default'}`], props.styles?.badgeContent]}>
                    <Typography style={styles[`color_${props.color||'default'}Contrast`]}>{props.value}</Typography>                
                </Transition>
                {props.children}
            </View>
    )
  }