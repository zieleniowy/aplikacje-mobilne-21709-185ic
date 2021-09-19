import React from 'react';
import { Typography, Table, TableRow, TableCell, Paper } from '../../core/index';
import { View, StyleSheet } from 'react-native';

export default function TablePage(props){
    return (
        <View>
            <Typography variant="h1" align="center">Table</Typography>
            <Paper style={styles.paper}>
                <Typography>
                    Tabele składają się z 3 tagów, tylko opakowanie przyjmuje props widths, w którym można przekazać tablicę
                    szerokości poszczególnych kolumn (props nieobowiązkowy). Table składa się z TableRow'ów, które składają się z TableCell'i.
                </Typography>
            </Paper>
            <Typography variant="h3">Tagi</Typography>
            <Typography>Table, TableRow, TableCell</Typography>
        </View>
    );

}

const styles = StyleSheet.create({

    paper: {
        padding: 8,
        margin: 8,
    }
});
