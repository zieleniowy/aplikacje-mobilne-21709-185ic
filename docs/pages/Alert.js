import React from 'react';
import { Typography, Paper, Alert } from '../../core/index';
import { View, ScrollView, StyleSheet, useWindowDimensions} from 'react-native';

const variants = ['default', 'outlined', 'filled'];
const severities = ['info', 'success', 'warning', 'error'];
export default function TransitionPage(props){
    const window = useWindowDimensions();
    return (
        <ScrollView directionalLockEnabled contentContainerStyle={[styles.root, { width: window.width-32 }]}>
            <Typography variant="h1" align="center">Alert</Typography>
            <Paper style={styles.paper}>
                <Typography align="justify">
                    Służy do powiadomienia użytkownika o wyniku operacji lub jako element mający skupić uwagę użytkownika na ważny fragment treści.
                </Typography>
                {
                    variants.map(variant=>(
                        <React.Fragment key={variant}>
                            {severities.map(sev=>(
                                <Alert style={styles.alert} key={variant+sev} variant={variant} severity={sev}>&lt;Alert variant="{variant}" severity="{sev}" /&gt;</Alert>
                            ))}
                        </React.Fragment>
                    ))
                }
            </Paper>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    root: {
        height: 1200,
    }, 
    alert: {
        marginTop: 16,
    }, 
    paper: {
        padding: 8,
        marginTop: 8,
        marginBottom: 8,
    }
});
