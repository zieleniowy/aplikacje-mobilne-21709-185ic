import React from 'react';
import { Typography, Button, Drawer, Table, TableRow, TableCell, Transition, Link } from '../../core/index';
import { View, ScrollView, StyleSheet, Image} from 'react-native';
import Example from '../Example';

const propsWidths = [200, 200, 300, 500];
export default function TransitionPage(props){
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState('zoom');
    const handleType = type => () => { setType(type); setOpen(!open); };

    // React.useEffect(()=>{
    //     dir&&handleOpen(true)();
    // }, [dir])
    return (
        <ScrollView contentContainerStyle={styles.root}>
            <Typography variant="h1" align="center">Transition</Typography>
            <Typography>Komponent odpowiedzialny za animacje (efekty przejścia) wyjścia/wejścia elementów. </Typography>
            <View style={styles.row}>
                <Button style={styles.btn} onPress={handleType('fade')} fullWidth variant="contained">fade</Button>
                <Button style={styles.btn} onPress={handleType('zoom')} fullWidth  variant="contained">zoom</Button>
                <Button style={styles.btn} onPress={handleType('collapse')} fullWidth  variant="contained">collapse</Button>
            </View>
            <Transition in={open} type={type} height={75} additionalAnimProps={{useNativeDriver: false}}>
                <View>
                    <Typography>Element Animowany</Typography>
                    <Typography>Element Animowany</Typography>
                    <Typography>Element Animowany</Typography>
                    <Typography>Element Animowany</Typography>
                </View>
            </Transition>
            <Example source={require('../../assets/example-images/transition.png')} width={2496} height={400} />
            <Typography variant="h2">Propsy</Typography>
            <Table widths={propsWidths}>
                <TableRow>
                    <TableCell><Typography>cecha</Typography></TableCell>
                    <TableCell><Typography>typ</Typography></TableCell>
                    <TableCell><Typography>domyślnie</Typography></TableCell>
                    <TableCell><Typography>opis</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>type</Typography></TableCell>
                    <TableCell><Typography>enum('zoom', 'fade', 'collapse')</Typography></TableCell>
                    <TableCell><Typography>fade</Typography></TableCell>
                    <TableCell><Typography>Efekt animacji, w przypadku collapse niewidoczny jest pusty kontener, w innych przypadkach należy (jeśli wymagane) ukryć go samodzielne.</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>height</Typography></TableCell>
                    <TableCell><Typography>Number</Typography></TableCell>
                    <TableCell><Typography>400</Typography></TableCell>
                    <TableCell><Typography>Opcja używana tylko, gdy type='collapse'</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>in</Typography></TableCell>
                    <TableCell><Typography>Boolean</Typography></TableCell>
                    <TableCell><Typography>wymagane</Typography></TableCell>
                    <TableCell><Typography>Czy zawartość ma być widoczna w danym momencie</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>additionalAnimProps</Typography></TableCell>
                    <TableCell><Typography>Object</Typography></TableCell>
                    <TableCell><Typography>null</Typography></TableCell>
                    <TableCell>
                        <Typography>Dodatkowe właściwości przekazane do obiektu konfiguracyjnego 
                            <Link color="primary" url="https://reactnative.dev/docs/animated"> Animated</Link>
                        </Typography>
                    </TableCell>
                    {/* <TableCell><Link color="primary" url="https://reactnative.dev/docs/animated">Animated</Link></TableCell> */}
                </TableRow>
                <TableRow>
                    <TableCell><Typography>additionalShowAnimProps</Typography></TableCell>
                    <TableCell><Typography>Object</Typography></TableCell>
                    <TableCell><Typography>null</Typography></TableCell>
                    <TableCell><Typography>tak jak wyżej, ale tylko w przypadku animacji wejścia</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>additionalHideAnimProps</Typography></TableCell>
                    <TableCell><Typography>Object</Typography></TableCell>
                    <TableCell><Typography>null</Typography></TableCell>
                    <TableCell><Typography>tak jak wyżej, ale tylko w przypadku animacji wyjścia</Typography></TableCell>
                </TableRow>            
            </Table>
            <Typography variant="h2">Style</Typography>
            <Typography>brak dodatkowego ostylowania</Typography>
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
    }

});
