import React from 'react';
import Icon from './Icon';
import { Path } from 'react-native-svg';
export default function Svg(props){ 
    return (
        <Icon {...props}>
            <Path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
        </Icon>
    ) }