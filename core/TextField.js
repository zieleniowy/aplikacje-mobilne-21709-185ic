import React, { useEffect, useRef, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Animated } from 'react-native';
import ThemeProvider from './ThemeProvider';

const styles =  StyleSheet.create({

})

const TextField = props => {
    const [focused, setFocused] = React.useState(false);
    const setFocus = b => () => setFocused(!focused);
    const topAnim = useRef(new Animated.Value(16)).current;
    const fontSizeAnim = useRef(new Animated.Value(16)).current;
    const widthAnim = useRef(new Animated.Value(0)).current;

    const toBottom = () => {
      Animated.timing(topAnim, {
        toValue: 0,
        duration: 375,
        useNativeDriver: false,
      }).start();
    };
    const toTop = () => {
      Animated.timing(topAnim, {
        toValue: 16,
        duration: 375,
        useNativeDriver: false,
      }).start();
    };
    const toBig = () => {
      Animated.timing(fontSizeAnim, {
        toValue: 16,
        duration: 375,
        useNativeDriver: false,
      }).start();
    };
    const toSmall = () => {
      Animated.timing(fontSizeAnim, {
        toValue: 12,
        duration: 375,
        useNativeDriver: false,
      }).start();
    };
    const toWide = () => {
      Animated.timing(widthAnim, {
        toValue: 100,
        duration: 375,
        useNativeDriver: false,
      }).start();
    };
    const toNarrow = () => {
      Animated.timing(widthAnim, {
        toValue: 0,
        duration: 375,
        useNativeDriver: false,
      }).start();
    };
  

    const handleAnim = ()=>{
      if(props.value || focused){
        toTop();
        toSmall();
        toWide();
      }
      else {
        toBottom();
        toBig();
        toNarrow();
      }
    }
    useEffect(handleAnim, [props.value, focused])
    const styles = useContext(ThemeProvider.StylesContext);
    return (
        <View style={[styles.inputUnderlinedRoot, props.fullWidth&&styles.w100, props.styles?.root]}>
          <Text style={[styles.spacer, styles.typography,  props.styles?.root]}>{props.label}</Text>
          <Animated.Text style={
            [
              styles.typography, 
              styles.label,  
              props.styles?.root, 
              { bottom: topAnim, fontSize: fontSizeAnim }, 
              (props.value || focused)&&styles[`color_${props.color||'default'}`]
              ]}>{props.label}</Animated.Text>

          <TextInput onFocus={setFocus(true)} onBlur={setFocus(false)}  onChange={props.onChange} style={styles.input} value={props.value} />
          <View style={styles.divider}>
            <Animated.View style={[{ width: widthAnim.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) },  { height: 1 }, styles[`bg_${props.color||'default'}`]]}></Animated.View>
          </View>

        </View>
    )
}

export default TextField;