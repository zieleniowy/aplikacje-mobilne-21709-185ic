import React from 'react';
import Icon from './Icon';
import { Path, Circle } from 'react-native-svg';
export default function Svg(props){ 
    return (
        <Icon {...props}>
            <Path d="M0 0h24v24H0V0z" fill="none"/>
            <Circle cx="12" cy="12" r="5"/>
        </Icon>
    ) }