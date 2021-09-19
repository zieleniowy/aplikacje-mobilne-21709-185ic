import React from 'react';
import { Typography, Paper, Button, Dialog, Table, TableRow, TableCell, Transition } from '../../core/index';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';

const propsWidths = [100, 300, 100, 300];
export default function TypographyPage(props){
    return (
        <ScrollView contentContainerStyle={styles.root}>
            <Typography variant="h1" align="center">Typography</Typography>
            <Paper style={{ padding: 8, marginTop: 8, marginBottom: 8, }}>
                    <Typography>Komponent opakowujący tekst. Dowolny tekst w aplikacji powinien zawierać się w tym komponencie.</Typography>
                    <Typography style={{ marginTop: 8 }}>
                        Możesz dodać własny styl - nadpisując dowolny z wariantów w theme lub dodać własny obiekt stylu do theme pod dowolnym kluczem 
                        <Text style={{ paddingLeft: 4, fontWeight: '700' }}> theme.typography[twojKlucz]</Text> i następnie korzystać z niego w propsie 
                        <Text style={{ fontWeight: '700' }}>&lt;Typography variant="twojKlucz" &gt; twój tekst &lt;/Typography&gt;</Text>
                    </Typography>
            </Paper>
            <Typography variant="h2">Propsy</Typography>
            <Table widths={propsWidths}>
                <TableRow>
                    <TableCell><Typography>cecha</Typography></TableCell>
                    <TableCell><Typography>typ</Typography></TableCell>
                    <TableCell><Typography>domyślnie</Typography></TableCell>
                    <TableCell><Typography>opis</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>align</Typography></TableCell>
                    <TableCell><Typography>enum('left', 'center', 'right', 'justify')</Typography></TableCell>
                    <TableCell><Typography>left</Typography></TableCell>
                    <TableCell><Typography>Wyrównanie czcionki.</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>variant</Typography></TableCell>
                    <TableCell><Typography>enum('h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'button', 'caption') lub inny, który zadeklarowany w theme.typography</Typography></TableCell>
                    <TableCell><Typography>body1</Typography></TableCell>
                    <TableCell><Typography>Styl czcionki</Typography></TableCell>
                </TableRow>
            </Table>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    root: {
        // height: 2000,
        paddingBottom: 200,
    }, 
});
