import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import ThemeProvider from './ThemeProvider';
export default function Avatar(props) {
    const styles = useContext(ThemeProvider.StylesContext);
    return (
        <View style={[
          styles.avatar.root, 
          props.size==='small'?styles.avatar.root_small:props.size==='large'?styles.avatar.root_large:null, 
          Boolean(props.color)?props.color==='secondary'?styles.bg_secondary:styles.bg_primary:null,
          
        ]}>
          {Boolean(props.src)?
            <Image style={[styles.avatar[`image_${props.size||'medium'}`]]} resizeMode="contain" source={props.src} />
            :<Text style={[
              styles.avatar[`text_${props.size||'medium'}`],
              Boolean(props.color)?props.color==='secondary'?styles.colorSecondaryContrast:styles.colorPrimaryContrast:styles.colorDivider
            ]}>{props.children}</Text>
          }
        </View>
    )
  }