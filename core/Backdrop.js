import React, { useContext } from 'react';
import {View, useWindowDimensions} from 'react-native';
import ThemeProvider from './ThemeProvider';

export default function Backdrop(props){
    const window = useWindowDimensions();
    const styles = useContext(ThemeProvider.StylesContext);
    return (
        <View style={[{ 
            position: 'absolute', 
            left: -window.width, 
            top: -window.height,
            width: window.width*2,
            height: window.height*2,
        }, styles.backdropRoot, props.styles?.root]}>
            <View style={[ 
                {
                    position: 'absolute',
                    left: window.width,
                    top: window.height,
                    width: window.width,
                    height: window.height,
            }, styles.backdropContent, props.styles?.content]}>
                {props.children}
            </View>

        </View>
    );
}