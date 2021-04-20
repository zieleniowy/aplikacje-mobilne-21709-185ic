import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import ThemeProvider from './ThemeProvider';
export default function Avatar(props) {
    const styles = useContext(ThemeProvider.StylesContext);
    return (
        <View style={[
          styles.avatarRoot, 
          props.size==='small'?styles.avatarRootSmall:props.size==='large'?styles.avatarRootLarge:null, 
          Boolean(props.color)?props.color==='secondary'?styles.bg_secondary:styles.bg_primary:null,
          
        ]}>
          {Boolean(props.src)?
            <Image style={{ width: 60 }} resizeMode="contain" source={props.src} />
            :<Text style={[
              styles.avatarText, 
              props.size==='small'?styles.avatarTextSmall:props.size==='large'?styles.avatarTextLarge:null,
              Boolean(props.color)?props.color==='secondary'?styles.colorSecondaryContrast:styles.colorPrimaryContrast:styles.colorDivider
            ]}>{props.children}</Text>
          }
        </View>
    )
  }