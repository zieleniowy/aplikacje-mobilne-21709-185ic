import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function SvgComponent(props) {
  return (
    <Svg width="32" height="32" fill="black" viewBox="0 0 24 24" {...props}>
        <Path d="M0 0h24v24H0V0z" fill="none"/>
        {props.children}
    </Svg>
  );
}