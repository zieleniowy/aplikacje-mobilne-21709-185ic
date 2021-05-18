import React, { useContext } from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import ThemeProvider from './ThemeProvider';
import Paper from './Paper';
export default function Table(props) {
    const styles = useContext(ThemeProvider.StylesContext);
    const sum = (props.widths||new Array(React.Children.count(props.children)).fill(100)).reduce((prev, cur)=>prev+cur);
    return (
            <Paper style={[ styles.table.root, props.style ]}>
                <ScrollView directionalLockEnabled={false} contentContainerStyle={{width: sum}}>
                    {React.Children.map(props.children, child=>React.cloneElement(child, { defaultStyles: styles.table, widths: props.widths }))}
                </ScrollView>
            </Paper>
    )
  }