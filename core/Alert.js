import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import ThemeProvider from './ThemeProvider';
import Warning from '../icons/WarningOutline';
import Info from '../icons/Info';
import Success from '../icons/CheckCircle';
import Error from '../icons/ErrorOutline';
import Typography from './Typography';

const mapStateToIcon = {
    'success': Success,
    'info': Info,
    'error': Error,
    'warning': Warning
}

export default function Container(props){
    const styles = useContext(ThemeProvider.StylesContext);
    const alertClass = styles[`alert_${props.severity||'info'}_${props.variant||'default'}`];
    const Icon = mapStateToIcon[props.severity||'info']

    return (
        <View style={[styles.alert, alertClass, props.style]}>
            <Icon style={styles.alertIcon} fill={alertClass.borderColor||alertClass.color||'rgba(0,0,0,0.87)'} />
            <Typography style={[{ color: alertClass.color||'rgba(0,0,0,0.87)', paddingRight: 32, }]}>{props.children}</Typography>
        </View>
    )

}
