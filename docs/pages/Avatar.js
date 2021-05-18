import React from 'react';
import { Typography, Table, TableRow, TableCell, Paper, Avatar } from '../../core/index';

import { ScrollView, View, StyleSheet, Switch } from 'react-native';
import Example from '../Example';

const propsWidths = [110, 300, 100, 500];

export default function AvatarPage(props){
    const [value, setValue] = React.useState(5);
    const [hideZero, setHideZero] = React.useState(true);

    const handleChange = key => bool => setChecked({...checked, [key]: bool });
    const toggleHiding = ()=>setHideZero(!hideZero);
    return (
        <ScrollView contentContainerStyle={styles.root}>
            <Typography variant="h1" align="center">Avatar</Typography>
            <Typography align="justify">
                Avatary reprezentują osoby i są wykorzystywane szeroko w całym designie, w listach, tabelach, kartach itd. Tworzone są ze zdjęcia, lub inicjału danej osoby.
            </Typography>
                <Typography variant="h4" align="center">zwykłe</Typography>
                <View style={styles.row}>
                    <Avatar color="primary">MR</Avatar>
                    <Avatar color="secondary">MR</Avatar>
                    <Avatar src={require('../../assets/user.png')}>MR</Avatar>
                    <Avatar color="primary" src={require('../../assets/user.png')}>MR</Avatar>
                </View>
                <Typography variant="h4" align="center">małe</Typography>
                <View style={styles.row}>
                    <Avatar size="small" color="primary">MR</Avatar>
                    <Avatar size="small" color="secondary">MR</Avatar>
                    <Avatar size="small" src={require('../../assets/user.png')}>MR</Avatar>
                    <Avatar size="small" color="primary" src={require('../../assets/user.png')}>MR</Avatar>
                </View>
                <Typography variant="h4" align="center">duże</Typography>
                <View style={styles.row}>
                    <Avatar size="large" color="primary">MR</Avatar>
                    <Avatar size="large" color="secondary">MR</Avatar>
                    <Avatar size="large" src={require('../../assets/user.png')}>MR</Avatar>
                    <Avatar size="large" color="primary" src={require('../../assets/user.png')}>MR</Avatar>
                </View>

            <Table style={styles.table} widths={propsWidths}>
                <TableRow>
                    <TableCell><Typography>cecha</Typography></TableCell>
                    <TableCell><Typography>typ</Typography></TableCell>
                    <TableCell><Typography>domyślnie</Typography></TableCell>
                    <TableCell><Typography>opis</Typography></TableCell>
                </TableRow>   
                <TableRow>
                    <TableCell><Typography>color</Typography></TableCell>
                    <TableCell><Typography>primary/secondary/default - lub inny z palety w motywie</Typography></TableCell>
                    <TableCell><Typography>brak wypełnienia kolorem</Typography></TableCell>
                    <TableCell><Typography>-</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>src</Typography></TableCell>
                    <TableCell><Typography>Image</Typography></TableCell>
                    <TableCell><Typography>undefined</Typography></TableCell>
                    <TableCell><Typography>Zdjęcie zaimportowane przez funkcję require. Gdy zapewnione, automatycznie przykrywa tekst avatara.</Typography></TableCell>
                </TableRow>    
                <TableRow>
                    <TableCell><Typography>size</Typography></TableCell>
                    <TableCell><Typography>enum('small','medium','large')</Typography></TableCell>
                    <TableCell><Typography>medium</Typography></TableCell>
                    <TableCell><Typography>Wielkość Avatara</Typography></TableCell>
                </TableRow>                   
            </Table>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    root: {
        height: 650,
    },
    grow: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 16,
    },
    example: { paddingTop: 12 }
});
