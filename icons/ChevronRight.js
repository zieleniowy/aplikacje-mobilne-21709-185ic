import React from 'react';
import Icon from './Icon';
import { Path } from 'react-native-svg';
export default function Svg(props){ 
    return (
        <Icon {...props}>
            <Path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
        </Icon>
    ) }