import React from 'react';
import { Typography, Link, Table, TableRow, TableCell, Paper, Button, ButtonGroup } from '../../core/index';
import { View, ScrollView, StyleSheet, Image} from 'react-native';
import Person from '../../icons/Person';
import Home from '../../icons/Home';
import Share from '../../icons/Share';
import Create from '../../icons/Create';
import MoreVert from '../../icons/MoreVert';

import Example from '../Example';

const propsWidths = [100, 200, 200, 500];
export default function LinkPage(props){
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState('zoom');
    const handleType = type => () => { setType(type); setOpen(!open); };
    return (
        <ScrollView contentContainerStyle={styles.root}>
            <Typography variant="h1" align="center">Button</Typography>
            <Typography>
                Przyciski (Buttons) reprezentują akcje możliwe do wykonania przez użytkownika. Przyciski na tej stronie są tekstowe. Zobacz też komponent IconButton.
            </Typography>
            <Paper style={styles.paper}>
                <Typography variant="h2">Przykłady</Typography>
                <Typography>Kliknij na dowolny z przycisków, aby wyświetlić jego kod (bez funkcji onPress)</Typography>
                <Typography style={styles.paperSubheader} variant="h3">Zwykłe przyciski</Typography>
                <Button onPress={()=>alert("<Button>Przycisk</Button>")}>Przycisk</Button>
                <Button onPress={()=>alert('<Button color="primary">color="primary"</Button>')} color="primary">color="primary"</Button>
                <Button onPress={()=>alert('<Button color="primary">color="secondary"</Button>')} color="secondary">color="secondary"</Button>
                <Typography style={styles.paperSubheader} variant="h3">Wypełnione przyciski</Typography>
                <Button style={styles.button} variant="contained" onPress={()=>alert('<Button variant="contained">Przycisk</Button>')}>Przycisk</Button>
                <Button style={styles.button} variant="contained" onPress={()=>alert('<Button variant="contained" color="primary">color="primary"</Button>')} color="primary">color="primary"</Button>
                <Button style={styles.button} variant="contained" onPress={()=>alert('<Button variant="contained" color="primary">color="secondary"</Button>')} color="secondary">color="secondary"</Button>
                <Typography style={styles.paperSubheader} variant="h3">Obramowane przyciski</Typography>
                <Button style={styles.button} variant="outlined" onPress={()=>alert('<Button variant="outlined">Przycisk</Button>')}>Przycisk</Button>
                <Button style={styles.button} variant="outlined" onPress={()=>alert('<Button variant="outlined" color="primary">color="primary"</Button>')} color="primary">color="primary"</Button>
                <Button style={styles.button} variant="outlined" onPress={()=>alert('<Button variant="outlined" color="primary">color="secondary"</Button>')} color="secondary">color="secondary"</Button>
                <Typography style={styles.paperSubheader} variant="h3">Szeroki przycisk</Typography>
                <Button style={styles.button} variant="contained" fullWidth onPress={()=>alert('<Button fullWidth variant="contained" color="primary">color="primary"</Button>')} color="primary">fullWidth</Button>
                <View style={styles.paperSubheader}>
                    <Typography variant="h3">Grupa Przycisków</Typography>
                    <Typography variant="caption">Tag {"<ButtonGroup></ButtonGroup>"}</Typography>
                </View>
                <ButtonGroup color="secondary" variant="contained">
                    <Button color="primary">JEDEN</Button>
                    <Button variant="outlined">DWA</Button>
                    <Button>TRZY</Button>
                </ButtonGroup>
                <Typography align="justify" style={styles.paper}>
                    ButtonGroup przyjmuje takie same propsy jak pojedynczy Button, zatem nie trzeba ich już podawać w potomkach grupy.
                    Variant z przycisku zostanie nadpisany przez variant podany do grupy. color zachowa się dokładnie odwrotnie, aby umożliwić wyeksponowanie pojedynczego
                    przycisku z grupy. Gdy variant!=="outlined" dodane zostanie obramowanie między przyciskamie w kolorze theme.palette.divider. Grupa zawsze jest fullWidth
                </Typography>
                <Example source={require('../../assets/example-images/buttongroup.png')} width={1184} height={400} />

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
                    <TableCell><Typography>color</Typography></TableCell>
                    <TableCell><Typography>primary/secondary - lub inny z palety w motywie</Typography></TableCell>
                    <TableCell><Typography>"default" kolor z palety</Typography></TableCell>
                    <TableCell><Typography>-</Typography></TableCell>
                </TableRow>    
                <TableRow>
                    <TableCell><Typography>variant</Typography></TableCell>
                    <TableCell><Typography>enum('default', 'contained', 'outlined')</Typography></TableCell>
                    <TableCell><Typography>'default'</Typography></TableCell>
                    <TableCell><Typography>Typ przycisku - zwykły / wypełniony / obramowany </Typography></TableCell>
                </TableRow> 
                <TableRow>
                    <TableCell><Typography>fullWidth</Typography></TableCell>
                    <TableCell><Typography>Boolean</Typography></TableCell>
                    <TableCell><Typography>false</Typography></TableCell>
                    <TableCell><Typography>Czy przycisk powinien być maksymalnej możliwej szerokości. </Typography></TableCell>
                </TableRow>               
            </Table>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    root: {
        height: 1600,
    },
    paper: {
        padding: 8,
    },
    paperSubheader: {
        paddingTop: 18,
        paddingBottom: 12,
    }, 
    button: {
        marginBottom: 4,
    },

});
