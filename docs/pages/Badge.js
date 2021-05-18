import React from 'react';
import { Typography, Table, TableRow, TableCell, Paper, Checkbox, IconButton, Badge, Button } from '../../core/index';
import MailIcon from '../../icons/Mail';
import AddIcon from '../../icons/Add';
import RemoveIcon from '../../icons/Remove';
import { ScrollView, View, StyleSheet, Switch } from 'react-native';
import Example from '../Example';

const propsWidths = [110, 300, 100, 500];

export default function BadgePage(props){
    const [value, setValue] = React.useState(5);
    const [hideZero, setHideZero] = React.useState(true);

    const handleChange = key => bool => setChecked({...checked, [key]: bool });
    const toggleHiding = ()=>setHideZero(!hideZero);
    return (
        <ScrollView contentContainerStyle={styles.root}>
            <Typography variant="h1" align="center">Badge</Typography>
            <Typography align="justify">
                odznaki (badges) są nakładane na swoje dzieci (children).
            </Typography>
            <Paper style={styles.paper}>
                <View style={styles.row}>
                    <View style={styles.grow}>
                        <Badge hideZero={hideZero} color="primary" value={value}><MailIcon/></Badge>
                    </View>
                    <IconButton onPress={()=>setValue(value+1)}><AddIcon/></IconButton>
                    <IconButton onPress={()=>setValue(value?value-1:0)}><RemoveIcon/></IconButton>
                </View>
                <View style={styles.row}>
                    <Switch
                        onValueChange={toggleHiding}
                        value={hideZero}
                    />
                    <Typography variant="button">hideZero</Typography>
                </View>
                <View style={styles.example}>
                    <Example source={require('../../assets/example-images/badge.png')} width={2512} height={400} />
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
                    <TableCell><Typography>primary/secondary/default - lub inny z palety w motywie</Typography></TableCell>
                    <TableCell><Typography>default</Typography></TableCell>
                    <TableCell><Typography>-</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>value</Typography></TableCell>
                    <TableCell><Typography>String/Number</Typography></TableCell>
                    <TableCell><Typography>Wymagane</Typography></TableCell>
                    <TableCell><Typography>zawartość odznaki</Typography></TableCell>
                </TableRow>     
                <TableRow>
                    <TableCell><Typography>hideZero</Typography></TableCell>
                    <TableCell><Typography>Boolean</Typography></TableCell>
                    <TableCell><Typography>false</Typography></TableCell>
                    <TableCell><Typography>Czy ukryć odznakę, gdy wartość == 0. Gdy wartość jest inna niż 0, lecz należy do zbioru wartości pustych, odznaka jest ukrywana zawsze.</Typography></TableCell>
                </TableRow>                    
            </Table>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    root: {
        height: 1000,
    },
    grow: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    paper: {
        padding: 12,
        margin: 8,
    },
    example: { paddingTop: 12 }
});
