import React from 'react';
import { Typography, Paper,} from '../../core/index';
import { ScrollView, StyleSheet, useWindowDimensions} from 'react-native';
import Dialog from '../../core/Dialog';

export default function TransitionPage(props){
    const window = useWindowDimensions();
    return (
        <ScrollView directionalLockEnabled contentContainerStyle={[styles.root, { width: window.width-32 }]}>
            <Typography variant="h1" align="center">Jak zacząć</Typography>
            <Paper style={styles.paper}>
                <Typography variant="h3">Co to jest</Typography>
                <Typography align="justify">
                    Ta biblioteka jest zbiorem komponentów UI do biblioteki react-native - stworzonych na podobieństwo komponentów z biblioteki Material-UI. 
                    Zbiór zawiera również ikony z material design icons.
                </Typography>
            </Paper>
            <Paper style={styles.paper}>
                <Typography variant="h3">ThemeProvider</Typography>
                <Typography align="justify">
                    Komponent ten jest odpowiedzialny za dostarczanie motywu do innych komponentów.
                    Wszystkie komponenty muszą być zagnieżdżone (na dowolnym poziomie zagnieżdżenia) w ThemeProvider. 
                    Dobrą praktyką jest umieszczenie ThemeProvider'a na samej górze drzewa aplikacji. ThemeProvider'y można zagnieżdzać, wszystkie komponenty 
                    będą korzystać z motywu dostarczonego przez najbliższy w górę drzewa ThemeProvider.
                </Typography>
            </Paper>
            <Dialog in={false} onExit={console.log}>
                <Typography>TEST</Typography>
            </Dialog>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    root: {
        height: 1200,
    }, 
    paper: {
        padding: 8,
        marginTop: 8,
        marginBottom: 8,
    }
});
