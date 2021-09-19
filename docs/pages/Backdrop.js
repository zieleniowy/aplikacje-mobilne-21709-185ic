import React from 'react';
import { Typography, Backdrop, Button, Paper, Table, TableRow, TableCell} from '../../core/index';
import { ScrollView, View } from 'react-native';
import Example from '../Example';
const propsWidths = [100, 100, 100, 300];

export default function BackdropPage(props){
    const [open, setOpen] = React.useState(false);
    return (
        <ScrollView>
            <Typography variant="h1" align="center">Backdrop</Typography>
            <Typography align="justify">
                To częściowo przezroczyste tło, które nachodzi na aplikację, aby odseparować główną część aplikacji
                od fragmentów wyświetlanych tymczasowo. Ten komponent jest wewnętrznie używany chociażby przez Drawer, Dialog, Menu.
                </Typography>

            <Button onPress={()=>setOpen(true)} fullWidth color="primary" variant="contained">Otwórz backdrop</Button>
            <Backdrop in={open} onExit={()=>setOpen(false)}>
                <Paper style={{ padding: 8 }}>
                    <Typography>Backdrop</Typography>
                </Paper>
            </Backdrop>
            <View style={{ paddingTop: 8 }}>
                <Example source={require('../../assets/example-images/backdrop.png')} width={1596} height={1128} />
            </View>
            <Table widths={propsWidths}>
                <TableRow>
                    <TableCell><Typography>cecha</Typography></TableCell>
                    <TableCell><Typography>typ</Typography></TableCell>
                    <TableCell><Typography>domyślnie</Typography></TableCell>
                    <TableCell><Typography>opis</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>in</Typography></TableCell>
                    <TableCell><Typography>Boolean</Typography></TableCell>
                    <TableCell><Typography>wymagane</Typography></TableCell>
                    <TableCell><Typography>Czy backdrop ma być aktualnie widoczny.</Typography></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><Typography>onExit</Typography></TableCell>
                    <TableCell><Typography>Function</Typography></TableCell>
                    <TableCell><Typography>wymagane</Typography></TableCell>
                    <TableCell><Typography>Callback wywoływany przy kliknięciu w backdrop (ale nie jego zawartość).</Typography></TableCell>
                </TableRow>
            </Table>
            <View style={{ paddingBottom: 200 }}></View>
        </ScrollView>
    );
}
