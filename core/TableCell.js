import React, { useContext } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import ThemeProvider from './ThemeProvider';

export default function TableRow(props) {
    return (
        <View style={[ props.defaultStyles.cell, { width: props.width  }, props.styles ]}>
            {props.children}
        </View>
    )
  }