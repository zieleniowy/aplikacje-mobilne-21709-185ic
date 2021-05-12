import React, { useContext } from 'react';
import { View, TouchableHighlight } from 'react-native';


export default function ListItem(props) {
    const Component = props.onPress?TouchableHighlight:View;
    return (
        <Component activeOpacity={0.8} underlayColor="rgba(0,0,0,0.2)"  {...props}>
            <View style={[ props.defaultStyles.item, props.styles ]}>
                {React.Children.map(props.children, child=>React.cloneElement(child, { defaultStyles: props.defaultStyles }))}
            </View>
        </Component>
    )
  }