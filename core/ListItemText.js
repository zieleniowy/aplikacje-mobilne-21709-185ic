import React, { useContext } from 'react';
import { View, Text } from 'react-native';


export default function ListItemText(props) {
    return (
        <View style={[props.defaultStyles.textRoot, props.styles?.root, props.style]}>
            <Text style={[props.defaultStyles.primaryText, props.styles?.primary]}>{props.primary}</Text>
            {props.secondary&&(<Text style={[props.defaultStyles.secondaryText, props.styles?.secondary]}>{props.secondary}</Text>)}
        </View>
    )
  }