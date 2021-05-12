import set from 'ramda/src/set';
import React, { useContext, useEffect, useRef } from 'react';
import { View, StyleSheet, useWindowDimensions, Animated } from 'react-native';
import Backdrop from './Backdrop';
import Paper from './Paper';
import ThemeProvider from './ThemeProvider';
import useTheme from './useTheme';

export default function Avatar(props) {
    const styles = useContext(ThemeProvider.StylesContext);
    const window = useWindowDimensions();
    const translate = useRef(new Animated.Value(window.height*0.55)).current;
    const [backdrop, setBackdrop] = React.useState(props.open);
    const theme = useTheme();
    var value = window.height*0.55;
    var horizontal = false;
    if(props.anchor === 'right' || props.anchor === 'left'){
      value = window.width*0.80;
      horizontal = true;
    }
    if(props.anchor === 'left' || props.anchor === 'top'){ value *=-1; }
    const hide = (cb) => {
        Animated.timing(translate, {
          toValue: value,
          duration: props.enter||theme.transitions.duration.enter,
          useNativeDriver: true,
        }).start(cb);
      };
      const show = (cb) => {
        translate.setValue(value);
        Animated.timing(translate, {
          toValue: 0,
          duration: props.leave||theme.transitions.duration.leave,
          useNativeDriver: true,
        }).start(cb);
      };
    const handleComplete = ({finished}) => {
        if(finished){
            setBackdrop(props.open);
        }
    }
    React.useEffect(()=>(props.open?show:hide)(handleComplete), [props.open]);
    return (
        <Backdrop 
          style={[ 
            styles.drawerBackdrop, 
            props.styles?.backdrop, 
            horizontal
              ?{ alignItems: props.anchor==='left'?'flex-start':'flex-end' }
              :{ justifyContent: props.anchor==='top'?'flex-start':'flex-end' } 
          ]} in={props.open||backdrop} onExit={props.onExit}>

            <Animated.View style={{ transform: [{ [horizontal?"translateX":"translateY"]: translate }] }}>
                <Paper square style={[{ ...(horizontal?{width: Math.abs(value), height: window.height }:{ height: Math.abs(value), width: window.width })  }, props.styles?.paper]}>
                    {props.children}
                </Paper>
            </Animated.View>
        </Backdrop>
    )
  }