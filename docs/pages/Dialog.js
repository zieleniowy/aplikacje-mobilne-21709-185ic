import React from 'react';
import { Typography, Button, Dialog, Table, TableRow, TableCell, Transition } from '../../core/index';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import Example from '../Example';

const propsWidths = [100, 100, 100, 300];
export default function DrawerPage(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = bool => () => setOpen(bool);
    return (
        <ScrollView contentContainerStyle={styles.root}>
            <Typography variant="h1" align="center">Dialog</Typography>
            <View style={{ paddingBottom: 8 }}>
                <Button fullWidth color="primary" variant="contained" onPress={handleOpen(true)}>Otwórz Dialog</Button>
                <Dialog open={open} onExit={handleOpen(false)}>
                    <Typography variant="h4">Use Google's location service?</Typography>
                    <Typography>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</Typography>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Button styles={{  typography: { color: 'green', } }} onPress={handleOpen(false)}>Agree</Button>
                        <Button styles={{  typography: { color: 'red', } }} onPress={handleOpen(false)}>Disagree</Button>
                    </View>
                </Dialog>
            </View>
            <Example source={require('../../assets/example-images/dialog.png')} width={2560} height={1092} />
            <Typography variant="h2">Propsy</Typography>
            <Table widths={propsWidths}>
                <TableRow>
                    <TableCell><Typography>cecha</Typography></TableCell>
                    <TableCell><Typography>typ</Typography></TableCell>
                    <TableCell><Typography>domyślnie</Typography></TableCell>
                    <TableCell><Typography>opis</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>open</Typography></TableCell>
                    <TableCell><Typography>Boolean</Typography></TableCell>
                    <TableCell><Typography>wymagane</Typography></TableCell>
                    <TableCell><Typography>Czy drawer ma być aktualnie widoczny.</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>onExit</Typography></TableCell>
                    <TableCell><Typography>Function</Typography></TableCell>
                    <TableCell><Typography>wymagane</Typography></TableCell>
                    <TableCell><Typography>Callback wywoływany przy próbie zamknięcia drawera.</Typography></TableCell>
                </TableRow>
            </Table>
            <Typography variant="h2">Style</Typography>
            <Typography>Root, Paper</Typography>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    root: {
        // height: 2000,
        paddingBottom: 200,
    }, 
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 4,
        paddingBottom: 4,
    },
    btn: {
        width: '40%',
    }

});
