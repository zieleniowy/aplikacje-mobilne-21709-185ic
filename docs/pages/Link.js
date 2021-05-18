import React from 'react';
import { Typography, Link, Table, TableRow, TableCell, Paper } from '../../core/index';
import { View, ScrollView, StyleSheet, Image} from 'react-native';
import Person from '../../icons/Person';
import Home from '../../icons/Home';
import Share from '../../icons/Share';
import Create from '../../icons/Create';
import MoreVert from '../../icons/MoreVert';

import Example from '../Example';

const propsWidths = [200, 200, 300, 500];
export default function LinkPage(props){
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState('zoom');
    const handleType = type => () => { setType(type); setOpen(!open); };

    // React.useEffect(()=>{
    //     dir&&handleOpen(true)();
    // }, [dir])
    return (
        <ScrollView contentContainerStyle={styles.root}>
            <Typography variant="h1" align="center">Link</Typography>
            <Typography>
                To klikalny fragment tekstu, można go umieszczać wewnątrz {"<Typography></Typography"}, link może wywoływać dowolną funkcję zwrotną w aplikacji lub 
                otworzyć stronę internetową w przeglądarce.
            </Typography>
            <Link style={styles.link} color="primary" onPress={()=>alert('wciśnięto link')}>LINK onPress</Link>
            <Link style={styles.link} color="secondary" url="https://google.com">LINK do strony internetowej</Link>
            <Typography variant="h3">KOD</Typography>
            <Paper>
            <Typography>
{`<Link 
    color="primary" 
    onPress={()=>alert('wciśnięto link')}>
        LINK onPress
</Link>

<Link 
    color="secondary" 
    url="https://google.com">
        LINK do strony internetowej
</Link>`}
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
                    <TableCell><Typography>onPress</Typography></TableCell>
                    <TableCell><Typography>Function</Typography></TableCell>
                    <TableCell><Typography>undefined</Typography></TableCell>
                    <TableCell><Typography>callback po kliknięciu linku. onPress lub url - jedno jest wymagane</Typography></TableCell>
                </TableRow>
                <TableRow>    
                    <TableCell><Typography>url</Typography></TableCell>
                    <TableCell><Typography>String</Typography></TableCell>
                    <TableCell><Typography>undefined</Typography></TableCell>
                    <TableCell><Typography>Adres strony internetowej, która ma zostać uruchomiona w przeglądarce. onPress lub url - jedno jest wymagane</Typography></TableCell>
                </TableRow>  
                <TableRow>
                    <TableCell><Typography>color</Typography></TableCell>
                    <TableCell><Typography>primary/secondary - lub inny z palety w motywie</Typography></TableCell>
                    <TableCell><Typography>"default" color z palety</Typography></TableCell>
                    <TableCell><Typography>-</Typography></TableCell>
                </TableRow>        
            </Table>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    link: {
        paddingTop: 8,
        paddingBottom: 8,
        
    },

});
