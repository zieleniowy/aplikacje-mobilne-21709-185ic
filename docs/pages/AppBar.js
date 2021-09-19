import React from 'react';
import { Typography, Paper, AppBar, Portal} from '../../core/index';
import { ScrollView, StyleSheet, Text} from 'react-native';
export default function AppBarPage(props){
    return (
        <ScrollView>
            <Typography variant="h1" align="center">AppBar</Typography>
            <Paper style={styles.paper}>
                <Typography>
                    Poziomy pasek - miejsce na Logo aplikacji/Tytuł obecnego widoku, przycisk menu i/lub dodatkowe przyciski, np.: od ułatwień dostępu.
                </Typography>
            </Paper>
            <Portal id="afterMainPage" type="item">
                <AppBar style={styles.appbar} color="primary">
                    <Typography variant="h3">Strona Główna</Typography>
                </AppBar>
                <AppBar style={styles.appbar}  color="secondary">
                    <Typography variant="h3">Kontakt</Typography>
                </AppBar>
                <Paper style={[styles.paper, {margin: 8}]}>
                    <Typography>
                        Jedyny props AppBar'a to color, przyjmuje jako wartość primary lub secondary (lub inny kolor zdefiniowany w theme)
                    </Typography>
                </Paper>
            </Portal>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    root: {
        height: 1200,
    }, 
    appbar: {
        marginTop: 16,
        padding: 8,
    },  
    paper: {
        padding: 8,
        marginTop: 8,
        marginBottom: 8,
    }
});
