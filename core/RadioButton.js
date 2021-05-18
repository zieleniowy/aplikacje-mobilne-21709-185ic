import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Transition from './Transition';
import Typography from './Typography';
import RadioUnchecked from '../icons/RadioButtonUnchecked';
import RadioChecked from '../icons/RadioButtonDot';


export default function RadioGroup(props) {
    const onPress = ()=>props.onPress(props.value);
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={props.styles.radioGroup.buttonRoot}>
                <View>
                    <RadioUnchecked fill={props.checked?props.color:props.defaultColor} />
                </View>
                <View style={props.styles.radioGroup.buttonDotRoot}>
                    <Transition in={props.checked} type="zoom">
                        <RadioChecked fill={props.color} />
                    </Transition>
                </View>
                <Typography style={props.styles.radioGroup.typography} variant="button">{props.label}</Typography>
            </View>

        </TouchableWithoutFeedback>

    )
  }