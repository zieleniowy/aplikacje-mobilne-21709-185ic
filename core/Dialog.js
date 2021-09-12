import set from 'ramda/src/set';
import React, { useContext, useEffect, useRef } from 'react';
import { View, StyleSheet, useWindowDimensions, Animated } from 'react-native';
import Backdrop from './Backdrop';
import Paper from './Paper';
import ThemeProvider from './ThemeProvider';
import useTheme from './useTheme';

export default function Dialog(props) {
    const styles = useContext(ThemeProvider.StylesContext);
    const window = useWindowDimensions();
    return (
        <Backdrop 
          style={[ 
            styles.dialogBackdrop, 
            props.styles?.backdrop,  
          ]} in={props.open} onExit={props.onExit}>

            <View>
                <Paper style={[
                    styles.dialogPaper,
                    props.styles?.paper,
                    props.fullScreen ? { width: window.width, height: window.height } : { width: Math.floor(window.width * 0.92) },
                    props.style
                ]}>
                    {props.children}
                </Paper>
            </View>
        </Backdrop>
    )
  }