import React from 'react';
import { Typography, Table, TableRow, TableCell, Paper, Checkbox } from '../../core/index';
import { ScrollView, View, StyleSheet } from 'react-native';
import Example from '../Example';

const propsWidths = [110, 200, 100, 500];

export default function CheckboxPage(props){
    const [checked, setChecked] = React.useState({ foo: false, bar: true, baz: false });
    const checkboxProps = { foo: { }, bar: { color: 'primary', label: 'color="primary"' }, baz: { color: 'secondary', label: 'color="secondary"' }};
    const handleChange = key => bool => setChecked({...checked, [key]: bool });
    return (
        <ScrollView contentContainerStyle={styles.root}>
            <Typography variant="h1" align="center">Checkbox</Typography>
            <Typography align="justify">
                Checkboxy używane są, aby pozwolić użytkownikowi zaznaczyć jedną lub więcej opcji. 
                Jeśli do wyboru nie ma większej ilości opcji, a użytkownik ma jedynie coś włączyć/wyłączyć - należy użyć switcha
            </Typography>
            <Paper style={styles.paper}>
                {
                    Object.keys(checked).map(key=>(
                        <Checkbox key={key} checked={checked[key]} onChange={handleChange(key)} {...checkboxProps[key]}  />
                    ))
                }
                <View style={styles.example}>
                    <Example source={require('../../assets/example-images/checkbox.png')} width={2512} height={400} />
                </View>
            </Paper>

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
                    <TableCell><Typography>czarny kolor</Typography></TableCell>
                    <TableCell><Typography>-</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>checked</Typography></TableCell>
                    <TableCell><Typography>Boolean</Typography></TableCell>
                    <TableCell><Typography>false</Typography></TableCell>
                    <TableCell><Typography>czy przycisk ma być zaznaczony</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>onChange</Typography></TableCell>
                    <TableCell><Typography>Function</Typography></TableCell>
                    <TableCell><Typography>wymagane</Typography></TableCell>
                    <TableCell><Typography>callback wywoływany przy próbie zmiany zaznaczenia przycisku</Typography></TableCell>
                </TableRow>                          
            </Table>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    root: {
        height: 1000,
    },
    paper: {
        padding: 12,
        margin: 8,
    },
    example: { paddingTop: 12 }
});
