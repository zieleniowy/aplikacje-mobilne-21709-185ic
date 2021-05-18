import React from 'react';
import { Typography, Button, Drawer, Table, TableRow, TableCell, Transition } from '../../core/index';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import Example from '../Example';

const propsWidths = [100, 100, 100, 300];
export default function DrawerPage(props){
    const [open, setOpen] = React.useState(false);
    const [dir, setDir] = React.useState(undefined);
    const handleOpen = bool => () => setOpen(bool);
    const handleDir = dir => () => setDir(dir);
    React.useEffect(()=>{
        dir&&handleOpen(true)();
    }, [dir])
    return (
        <ScrollView contentContainerStyle={styles.root}>
            <Typography variant="h1" align="center">Drawer</Typography>
            <Typography>Animowany panel wysuwany z dowolnej strony ekranu. Przydatny np jako miejsce na menu aplikacji. </Typography>
            <View style={styles.row}>
                <Button style={styles.btn} onPress={handleDir('left')} fullWidth variant="contained">Z lewej</Button>
                <Button style={styles.btn} onPress={handleDir('right')} fullWidth  variant="contained">Z prawej</Button>
            </View>
            <View style={styles.row}>
                <Button style={styles.btn} onPress={handleDir('top')} fullWidth  variant="contained">Z góry</Button>
                <Button style={styles.btn} onPress={handleDir('bottom')} fullWidth  variant="contained">Z dołu</Button>
            </View>
            <Drawer anchor={dir} open={open} onExit={handleOpen(false)}></Drawer>
            <Example source={require('../../assets/example-images/drawer.png')} width={2388} height={400} />
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
                <TableRow>
                    <TableCell><Typography>anchor</Typography></TableCell>
                    <TableCell><Typography>enum('left', 'right', 'top', 'bottom')</Typography></TableCell>
                    <TableCell><Typography>bottom</Typography></TableCell>
                    <TableCell><Typography>Z której strony ma wyjeżdżać drawer.</Typography></TableCell>
                </TableRow>
            </Table>
            <Typography variant="h2">Style</Typography>
            <Typography>Root, Paper</Typography>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    root: {
        height: 1200,
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
