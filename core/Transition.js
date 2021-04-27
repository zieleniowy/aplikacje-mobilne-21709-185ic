import React, {useEffect, useRef, useContext} from 'react';
import {Animated} from 'react-native';
import ThemeProvider from './ThemeProvider';
import useTheme from './useTheme';

const getStyle = (type, value) => {
  switch(type){
    case 'zoom': 
      return { transform: [{ scale: value }] }
    case 'fade':
    default: 
      return { opacity: value }
  }
}


export default function Zoom(props){
    const level = useRef(new Animated.Value(Number(props.in))).current;
    const theme = useTheme();
    const hide = () => {
        Animated.timing(level, {
          toValue: 0,
          duration: props.leave||theme.transitions.duration.leave,
          useNativeDriver: true,
        }).start();
      };
      const show = () => {
        Animated.timing(level, {
          toValue: 1,
          duration: props.enter||theme.transitions.duration.enter,
          useNativeDriver: true,
        }).start();
      };
    useEffect(()=>{
        (props.in?show:hide)();
    }, [props.in])

    return (
        <Animated.View style={getStyle(props.type, level)}>
            {props.children}
        </Animated.View>
    );
}