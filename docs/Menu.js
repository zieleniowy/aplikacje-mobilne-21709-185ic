import React from 'react';
import {Container, AppBar, IconButton, Drawer, List, ListItem, ListItemText} from '../core/index.js';
import MenuIcon from '../icons/Menu'; 
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { useHistory } from 'react-router-native';

const subjects = [
    { label: 'Avatar', to: '/avatar' },
    { label: 'Backdrop', to: '/backdrop' },
    { label: 'Badge', to: '/badge' },
    { label: 'Drawer', to: '/drawer' }
]



export default function Menu(props){
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleRedirect = path => ()=>{
        history.push(path);
        handleClose();
    }
    return (
        <>
            <AppBar>
                <IconButton style={styles.icon} onPress={handleOpen}><MenuIcon /></IconButton>
            </AppBar>
            <Drawer onExit={handleClose} anchor="right" open={open}>
                <SafeAreaView>
                    <List>
                        {
                            subjects.map(subject=>(
                                <ListItem onPress={handleRedirect(subject.to)} key={subject.label}>
                                    <ListItemText primary={subject.label} />
                                </ListItem>
                            ))
                        }
                    </List>
                </SafeAreaView>
            </Drawer>
        </>
    );
}


const styles = StyleSheet.create({
    icon: {
        alignSelf: 'flex-end',
    }

});
