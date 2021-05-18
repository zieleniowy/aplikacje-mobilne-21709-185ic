import React from 'react';
import { Typography, Table, TableRow, TableCell, Paper, RadioButton, RadioGroup, Container } from '../../core/index';
import { ScrollView, View, StyleSheet } from 'react-native';
import Example from '../Example';


const propsWidths = [110, 100, 200, 110, 500];
export default function RadioPage(props){
    const [checked, setChecked] = React.useState('baz');

    return (
        <ScrollView contentContainerStyle={styles.root}>
            <Typography variant="h1" align="center">Radio Group</Typography>
            <Typography align="justify">Radio Group jest używane, gdy użytkownik powinien widzieć wszystkie dostępne opcje jednocześnie i wybrać jedynie jedną z nich. Z reguły jedna z opcji jest domyślnie zaznaczona</Typography>
            <Paper style={styles.paper}>
                <Typography variant="h2" align="center">Przykłady</Typography>
                    <Typography>color="primary"</Typography>
                    <RadioGroup value={checked} onChange={setChecked} color="primary">
                        <RadioButton value="foo" label="foo" />
                        <RadioButton value="bar" label="bar" />
                        <RadioButton value="baz" label="baz" />
                        <RadioButton value="obj" label="obj" />
                    </RadioGroup>
                    <Typography>color="secondary" horizontal</Typography>
                    <RadioGroup value={checked} onChange={setChecked} color="secondary" horizontal>
                        <RadioButton value="foo" label="foo" />
                        <RadioButton value="bar" label="bar" />
                        <RadioButton value="baz" label="baz" />
                        <RadioButton value="obj" label="obj" />
                    </RadioGroup>
            </Paper>
            <View style={styles.example}>
                <Example source={require('../../assets/example-images/radio.png')} width={1988} height={400} />
            </View>
            <Typography variant="h2">propsy</Typography>
            <Table widths={propsWidths}>
                <TableRow>
                    <TableCell><Typography>Tag</Typography></TableCell>
                    <TableCell><Typography>cecha</Typography></TableCell>
                    <TableCell><Typography>typ</Typography></TableCell>
                    <TableCell><Typography>domyślnie</Typography></TableCell>
                    <TableCell><Typography>opis</Typography></TableCell>
                </TableRow>    
                <TableRow>
                    <TableCell><Typography>RadioGroup</Typography></TableCell>
                    <TableCell><Typography>color</Typography></TableCell>
                    <TableCell><Typography>kolor z palety motywu, domyślnie primary/secondary</Typography></TableCell>
                    <TableCell><Typography>czarny kolor</Typography></TableCell>
                    <TableCell><Typography>-</Typography></TableCell>
                </TableRow> 
                <TableRow>
                    <TableCell><Typography>RadioGroup</Typography></TableCell>
                    <TableCell><Typography>value</Typography></TableCell>
                    <TableCell><Typography>any</Typography></TableCell>
                    <TableCell><Typography>undefined</Typography></TableCell>
                    <TableCell><Typography>Obecnie wybrana wartość z grupy przycisków</Typography></TableCell>
                </TableRow>       
                <TableRow>
                    <TableCell><Typography>RadioButton</Typography></TableCell>
                    <TableCell><Typography>value</Typography></TableCell>
                    <TableCell><Typography>any</Typography></TableCell>
                    <TableCell><Typography>undefined</Typography></TableCell>
                    <TableCell><Typography>Wartość reprezentowana przez konkretny przycisk z grupy</Typography></TableCell>
                </TableRow>       

                <TableRow>
                    <TableCell><Typography>RadioGroup</Typography></TableCell>
                    <TableCell><Typography>onChange</Typography></TableCell>
                    <TableCell><Typography>Function</Typography></TableCell>
                    <TableCell><Typography>wymagane</Typography></TableCell>
                    <TableCell><Typography>callback wywoływany przy próbie zmiany opcji</Typography></TableCell>
                </TableRow>   
                <TableRow>
                    <TableCell><Typography>RadioButton</Typography></TableCell>
                    <TableCell><Typography>label</Typography></TableCell>
                    <TableCell><Typography>String</Typography></TableCell>
                    <TableCell><Typography>null</Typography></TableCell>
                    <TableCell><Typography>Etykieta przycisku</Typography></TableCell>
                </TableRow>     
            </Table>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    root: {
        height: 1050,
    },
    paper: {
        padding: 8,
    }, 
    example: { paddingTop: 12, paddingBottom: 12 }
});
