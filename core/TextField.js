import React, { useRef, useEffect, useContext } from 'react';
import { View, Animated, TextInput } from 'react-native';
import ThemeProvider from './ThemeProvider';

const TextField = props => {
    const topAnim = useRef(new Animated.Value(16)).current;
    const fontSizeAnim = useRef(new Animated.Value(16)).current;
    const widthAnim = useRef(new Animated.Value(0)).current;
    const [focused, setFocused] = React.useState(false);
    const toBottom = () => {
      Animated.timing(topAnim, {
        toValue: 16,
        duration: 200,
        useNativeDriver: false,
      }).start();
    };
    const toTop = () => {
      Animated.timing(topAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    };
    const toBig = () => {
      Animated.timing(fontSizeAnim, {
        toValue: 16,
        duration: 200,
        useNativeDriver: false,
      }).start();
    };
    const toSmall = () => {
      Animated.timing(fontSizeAnim, {
        toValue: 12,
        duration: 200,
        useNativeDriver: false,
      }).start();
    };
    const toWide = () => {
      Animated.timing(widthAnim, {
        toValue: 100,
        duration: 200,
        useNativeDriver: false,
      }).start();
    };
    const toNarrow = () => {
      Animated.timing(widthAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    };
    const toggleFocus = () => setFocused(!focused);
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
        <View style={styles.textFieldRoot}>
          <Animated.Text style={[styles.textFieldLabel, { top: topAnim, fontSize: fontSizeAnim  },  (props.value || focused)?styles[`color_${props.color||'default'}`]:styles.color_divider]}>{props.label}</Animated.Text>
          <TextInput onFocus={toggleFocus} onBlur={toggleFocus} style={styles.textField} value={props.value} onChange={props.onChange} />
          <View style={[styles.divider, styles.dividerAbs]}></View>
          <View style={[{ position: 'absolute', bottom: 0, height: 1, width: '100%', alignItems: 'center' }]}>
            <Animated.View style={[styles.divider, { width: widthAnim.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) }, styles[`bg_${props.color||'default'}`]]}></Animated.View>
          </View>
        </View>
    )
}

export default TextField;