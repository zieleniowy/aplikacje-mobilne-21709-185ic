import React, { useContext } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default function TableHeaderRow(props) {
    return (
        <View style={[ props.defaultStyles.row, props.style ]}>
            {React.Children.map(props.children, (child, index)=>React.cloneElement(child, { defaultStyles: props.defaultStyles, width: props.widths?.[index]||100 }))}
        </View>
    )
  }