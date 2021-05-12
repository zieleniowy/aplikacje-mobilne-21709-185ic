import React from 'react';
import { View } from 'react-native';


export default function ListItemIcon(props) {
    return (
        <View style={[props.defaultStyles.icon, props.style]}>
            {props.children}
        </View>
    )
  }