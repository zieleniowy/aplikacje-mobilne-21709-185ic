import React from 'react';
import { Typography, List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction, IconButton, Table, TableRow, TableCell, Avatar } from '../../core/index';
import { View, ScrollView, StyleSheet, Image} from 'react-native';
import Person from '../../icons/Person';
import Home from '../../icons/Home';
import Share from '../../icons/Share';
import Create from '../../icons/Create';
import MoreVert from '../../icons/MoreVert';

import Example from '../Example';

const propsWidths = [200, 200, 200, 300, 500];
export default function TransitionPage(props){
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState('zoom');
    const handleType = type => () => { setType(type); setOpen(!open); };

    // React.useEffect(()=>{
    //     dir&&handleOpen(true)();
    // }, [dir])
    return (
        <ScrollView contentContainerStyle={styles.root}>
            <Typography variant="h1" align="center">List</Typography>
            <Typography>Lista to ciągła grupa tekstów i obrazków. Lista zawieraja elementy składające się z głównej i dodatkowej etykiety, ikony oraz dodatkowej akcji. </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="Element listy" />
                </ListItem>
                <ListItem onPress={()=>{}}>
                    <ListItemText primary="Element jako przycisk" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Element listy" secondary="z dodatkową etykietą" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><Avatar src={require('../../assets/user.png')}>MR</Avatar></ListItemIcon>
                    <ListItemText primary="element list" secondary="z avatarem" />
                </ListItem>
                <ListItem>
                    <ListItemIcon><Person /></ListItemIcon>
                    <ListItemText primary="Element listy" secondary="z ikoną" />
                </ListItem>      
                <ListItem>
                    <ListItemIcon><Home /></ListItemIcon>
                    <ListItemText primary="Element listy" secondary="z dodatkową akcją" />
                    <ListItemSecondaryAction>
                        <IconButton onPress={()=>{}}><Share /></IconButton>
                    </ListItemSecondaryAction>
                </ListItem>          
                <ListItem onPress={()=>{}}>
                    <ListItemIcon><Create /></ListItemIcon>
                    <ListItemText primary="Element jako przycisk" secondary="z dodatkową akcją" />
                    <ListItemSecondaryAction>
                        <IconButton onPress={()=>{}}><MoreVert /></IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
            <Example source={require('../../assets/example-images/list.png')} width={2496} height={400} />
            <Typography variant="h2">Tagi</Typography>
            <Typography>List, ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction</Typography>
            <Typography variant="h2">Propsy</Typography>
            <Table widths={propsWidths}>
                <TableRow>
                    <TableCell><Typography>Tag</Typography></TableCell>
                    <TableCell><Typography>cecha</Typography></TableCell>
                    <TableCell><Typography>typ</Typography></TableCell>
                    <TableCell><Typography>domyślnie</Typography></TableCell>
                    <TableCell><Typography>opis</Typography></TableCell>
                </TableRow>      
                <TableRow>
                    <TableCell><Typography>ListItemText</Typography></TableCell>
                    <TableCell><Typography>primary</Typography></TableCell>
                    <TableCell><Typography>String</Typography></TableCell>
                    <TableCell><Typography>""</Typography></TableCell>
                    <TableCell><Typography>Główna etykieta elementu</Typography></TableCell>
                </TableRow>        
                <TableRow>
                    <TableCell><Typography>ListItemText</Typography></TableCell>
                    <TableCell><Typography>secondary</Typography></TableCell>
                    <TableCell><Typography>String</Typography></TableCell>
                    <TableCell><Typography>""</Typography></TableCell>
                    <TableCell><Typography>Dodatkowa etykieta elementu</Typography></TableCell>
                </TableRow>      
                <TableRow>
                    <TableCell><Typography>ListItem</Typography></TableCell>
                    <TableCell><Typography>onPress</Typography></TableCell>
                    <TableCell><Typography>function</Typography></TableCell>
                    <TableCell><Typography>undefined</Typography></TableCell>
                    <TableCell><Typography>Jeśli argument zostanie przekazany, element listy stanie się przyciskiem</Typography></TableCell>
                </TableRow>      
            </Table>

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
