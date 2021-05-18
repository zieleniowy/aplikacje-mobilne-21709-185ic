import React from 'react';
import { Typography, Link, Table, TableRow, TableCell, Paper, TextField } from '../../core/index';
import { View, ScrollView, StyleSheet,} from 'react-native';

import Example from '../Example';

const propsWidths = [100, 200, 200, 500];
export default function LinkPage(props){
    const [value, setValue] = React.useState('');
    const handleChange = e => setValue(e.nativeEvent.text);
  

    // React.useEffect(()=>{
    //     dir&&handleOpen(true)();
    // }, [dir])
    return (
        <ScrollView contentContainerStyle={styles.root}>
            <Typography variant="h1" align="center">TextField</Typography>
            <Typography>
                Pola tekstowe (TextFields) pozwalają na wprowadzenie przez użytkownika danych wejściowych do aplikacji.
            </Typography>
            <Paper style={styles.paper}>
                <TextField style={styles.textField} color="primary" label="HelloWorld" value={value} onChange={handleChange} />
                <TextField style={styles.textField} color="secondary" label="HelloWorld" value={value} onChange={handleChange} />
                <TextField style={styles.textField} label="HelloWorld" value={value} onChange={handleChange} />
                <Example source={require('../../assets/example-images/textfield.png')} width={2560} height={400} />

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
                    <TableCell><Typography>label</Typography></TableCell>
                    <TableCell><Typography>String</Typography></TableCell>
                    <TableCell><Typography>""</Typography></TableCell>
                    <TableCell><Typography>Etykieta pola tekstowego</Typography></TableCell>
                </TableRow> 
                <TableRow>
                    <TableCell><Typography>value</Typography></TableCell>
                    <TableCell><Typography>String</Typography></TableCell>
                    <TableCell><Typography>wymagane</Typography></TableCell>
                    <TableCell><Typography>Obecna wartość pola tekstowego.</Typography></TableCell>
                </TableRow>   
                <TableRow>
                    <TableCell><Typography>onChange</Typography></TableCell>
                    <TableCell><Typography>Function</Typography></TableCell>
                    <TableCell><Typography>wymagane</Typography></TableCell>
                    <TableCell><Typography>Funkcja zwrotna wywoływana przy próbie zmiany wartości pola tekstowego przez użytkownika.</Typography></TableCell>
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
    textField: {
        marginBottom: 16,
    },
    

});
