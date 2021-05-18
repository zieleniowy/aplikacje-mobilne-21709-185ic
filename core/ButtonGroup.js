import React, { useContext } from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import ThemeProvider from './ThemeProvider';
import Paper from './Paper';

const getBorderColor = (variant, color) => variant==='outlined'?{}:{ borderRightColor: color };

export default function ButtonGroup(props) {
    const styles = useContext(ThemeProvider.StylesContext);
    const l = React.Children.count(props.children);
    return (
        <View style={[styles.buttonGroup.root, props.style]}>
            {React.Children.map(props.children, (child, id)=>React.cloneElement(child, { 
                style: [styles.buttonGroup.button, child.props.style], 
                fullWidth: true, 
                color: child.props.color||props.color,
                variant: props.variant,
                styles: {
                    ...child.props.styles,
                    paper: [
                        child.props.styles?.paper,
                        l<=1?
                            null // gdy 0/1 przycisków w grupie
                            :(!id)?
                                { borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRightWidth: 1, ...getBorderColor(props.variant, styles.border_divider.borderColor)  } //pierwszy przycisk
                                :(id+1===l)
                                    ?{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } //ostatni przycisk
                                    :{ borderRadius: 0, borderRightWidth: 1, ...getBorderColor(props.variant, styles.border_divider.borderColor)   } //środkowe przyciski
                    ]
                }
            }))}
        </View>
    )
  }