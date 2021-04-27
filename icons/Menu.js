import React from 'react';
import Icon from './Icon';
import { Path } from 'react-native-svg';
export default function Svg(props){ 
    return (
        <Icon {...props}>
            <Path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </Icon>
    ) }