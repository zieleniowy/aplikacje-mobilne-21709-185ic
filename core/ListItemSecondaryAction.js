import React, { useContext } from 'react';
import { View, Text } from 'react-native';


export default function ListItemSecondaryAction(props) {
    return (
        <View style={[props.defaultStyles.secondaryAction, props.styles?.root, props.style]}>
            {props.children}
        </View>
    )
  }