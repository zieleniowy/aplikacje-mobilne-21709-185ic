import React, {useEffect, useRef, useContext} from 'react';
import {Animated} from 'react-native';
import ThemeProvider from './ThemeProvider';
import useTheme from './useTheme';

const getStyle = (type, value) => {
  switch(type){
    case 'zoom': 
      return { transform: [{ scale: value }] };
    case 'collapse': 
      return { height: value }
    case 'fade':
    default: 
      return { opacity: value }
  }
}
const getShowProps = (type, ...args)=>{
  switch(type){
    case 'collapse': 
      return { toValue: args[0], useNativeDriver: false };
    case 'zoom':
    case 'fade':
    default: 
      return { toValue: 1, useNativeDriver: true }
  }
}
const getHideProps = (type, ...args)=>{
  switch(type){
    case 'collapse': 
      return { toValue: 0, useNativeDriver: false };
    case 'zoom':
    case 'fade':
    default: 
      return { toValue: 0, useNativeDriver: true }
  }
}

export default function Zoom(props){
    const level = useRef(new Animated.Value(Number(props.in))).current;
    const theme = useTheme();
    const hide = () => {
        Animated.timing(level, {
          duration: props.leave||theme.transitions.duration.leave,
          ...getHideProps(props.type),
          ...props.additionalAnimProps,
          ...props.additionalHideAnimProps
        }).start(props.onFinish);
      };
      const show = () => {
        Animated.timing(level, {
          duration: props.enter||theme.transitions.duration.enter,
          ...getShowProps(props.type, props.height||400),
          ...props.additionalAnimProps,
          ...props.additionalShowAnimProps
        }).start(props.onFinish);
      };
    useEffect(()=>{
        (props.in?show:hide)();
    }, [props.in])

    return (
        <Animated.View style={[getStyle(props.type, level), props.style]}>
            {props.children}
        </Animated.View>
    );
}