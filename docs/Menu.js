import React from 'react';
import {Container, AppBar, IconButton, Drawer, List, ListItem, ListItemText, Typography, ListItemIcon} from '../core/index.js';
import MenuIcon from '../icons/Menu'; 
import { Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useHistory } from 'react-router-native';
import Home from '../icons/Home';
const subjects = [
    { label: 'Alert', to: '/alert' },
    { label: 'AppBar', to: '/appbar' },
    { label: 'Avatar', to: '/avatar' },
    { label: 'Backdrop', to: '/backdrop' },
    { label: 'Badge', to: '/badge' },
    { label: 'Button', to: '/button' },
    { label: 'Checkbox', to: '/checkbox' },
    { label: 'Dialog', to: '/dialog' },
    { label: 'Drawer', to: '/drawer' },
    { label: 'Ikony', to: '/icons' },
    { label: 'Link', to: '/link' },
    { label: 'List', to: '/list' },
    { label: 'Paper', to: '/paper' },
    { label: 'Portal', to: '/portal' },
    { label: 'Radio Group', to: '/radio' },
    { label: 'Table', to: '/table' },
    { label: 'TextField', to: '/textfield' },
    { label: 'Transition', to: '/transition' },
    { label: 'Typography', to: '/typography' },

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
            <AppBar style={styles.root}>
                <Typography style={styles.typo} variant="h4">Material-UI React-Native</Typography>
                <IconButton style={styles.icon} onPress={handleOpen}><MenuIcon /></IconButton>
            </AppBar>
            <Drawer onExit={handleClose} anchor="right" open={open}>
                <SafeAreaView>
                    <ScrollView>
                        <List>
                            <ListItem onPress={handleRedirect('/')}>
                                <ListItemIcon><Home /></ListItemIcon>
                                <ListItemText primary="jak zacząć" />
                            </ListItem>
                            {
                                subjects.map(subject=>(
                                    <ListItem onPress={handleRedirect(subject.to)} key={subject.label}>
                                        <ListItemText primary={subject.label} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </ScrollView>
                </SafeAreaView>
            </Drawer>
        </>
    );
}


const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    typo: {
        paddingLeft: 8,
        flex: 1,
    }, 
    icon: {
        alignSelf: 'flex-end',
    }

});
