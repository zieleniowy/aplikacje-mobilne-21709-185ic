import React, { useContext } from 'react';
import { View, TouchableHighlight } from 'react-native';
import ThemeProvider from './ThemeProvider';

export default function List(props) {
    const styles = useContext(ThemeProvider.StylesContext);
    return (
        <View style={[ styles.list.root, props.styles ]}>
            {React.Children.map(props.children, child=>React.cloneElement(child, { defaultStyles: styles.list }))}
        </View>
    )
  }