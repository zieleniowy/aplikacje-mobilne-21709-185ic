import React from 'react';
import Icon from './Icon';
import { Path } from 'react-native-svg';
export default function Svg(props){ 
    return (
        <Icon {...props}>
            <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </Icon>
    ) }