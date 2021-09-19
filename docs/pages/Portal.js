import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Portal from '../../core/Portal';
import { Typography, Paper, List, ListItem, ListItemText, Table, TableRow, TableCell, Alert, Link} from '../../core/index';
import Warning from '../../icons/Warning';
import Example from '../Example';
const propsWidths = [110, 200, 200, 500];

export default function PortalPage(){

    return (
        <ScrollView>
            <Typography align="center" variant="h1">Portal</Typography>
            <Paper style={styles.paper}>
                <Typography align="justify">
                    Pozwala na złamanie kompozycji z góry do dołu, w której rodzice dostają dzieci w argumentach i je renderują. 
                    Dzięki portalowi można z poziomu dowolnego komponentu w aplikacji wyrenderować dzieci wewnątrz dowolnego innego komponentu.
                </Typography>
            </Paper>
            <Typography variant="h2" align="center">Zasada działania</Typography>
            <Paper style={styles.paper}>
                <Typography align="justify">
                    Portale dzielimy na wejściowe (type="item") i wyjściowe (type="container"). Portal musi mieć koniecznie przypisane id - takie samo dla wejścia i wyjścia, 
                    aby mogły zostać ze sobą połączone. Można swobodnie przekazywać takie samo id wielu portalom, w takim przypadku dzieci ze wszystkich wejść bedą renderowane przez każde wyjście. 
                </Typography>
            </Paper>
            <Typography variant="h2" align="center">Przykład</Typography>

            <Paper style={styles.paper}>
                <List>
                    <ListItem><ListItemText primary="Strona główna" /></ListItem>
                    <ListItem><ListItemText primary="O nas" /></ListItem>
                    <ListItem><ListItemText primary="Kontakt" /></ListItem>
                    <Portal id="menu" type="container" />
                </List>
            </Paper>
            <Portal id="menu" type="item">
                <ListItem><ListItemText primary="Galeria" /></ListItem>
            </Portal>
            <Portal id="menu" type="item">
                <ListItem><ListItemText primary="Cennik" /></ListItem>
            </Portal>
            <Example source={require('../../assets/example-images/portal.png')} width={1404} height={912} />
            <Paper style={[styles.paper, { marginTop: 8, }]}>
                <Typography align="justify">
                    W powyższym przykładzie menu jest renderowane z trzema pozycjami. Dwie pozostałe są renderowane przez portale, 
                    które mogą być umieszczone w dowolnym miejscu w strukturze aplikacji. 
                </Typography>
                <Typography style={{ marginTop: 8 }} align="justify">
                    Dzięki temu możemy np.: dodawać kontekstowo przyciski do menu - zamiast w komponencie menu sprawdzać obecnie renderowany widok i na jego podstawie renderować dodatkowe przyciski,
                    można dodać do menu portal wyjściowy, a na poszczególnych widokach renderować przyciski kontekstowe - jeśli są potrzebne - w portalu wejściowym. 
                    Zwiększy to czytelność w średnich i dużych aplikacjach.
                </Typography>
                <Typography variant="h3" style={{ marginTop: 8 }} align="center">Inne zastosowania</Typography>

                <Typography style={{ marginTop: 8 }} align="justify">
                    Portale mogą sprawdzić się bardzo dobrze w przypadku tworzenia systemów cms lub aplikacji ze wsparciem dla pluginów. 
                    Aplikacja może zostać podzielona na n sekcji, a poszczególne pluginy mogą dodawać treści do każdej z nich bez edytowania kodu źródłowego danej sekcji.
                </Typography>
            </Paper>

            <Paper style={[styles.paper, styles.alert]}>
                <Warning fill="rgb(239, 83, 80)" style={styles.alertIcon} />
                <Typography style={{ marginRight: 56 }} align="justify">
                    Kompozycja z góry do dołu pomaga zachować przejrzystość i przewidywalność kodu. Chociaż korzystanie z portali wydaje się być
                    kuszące, to nadużywanie tego komponentu prowadzi do znaczego zwiększenia złożoności struktury aplikacji. Rozważ każdorazowo, czy 
                    użycie portalu w danym miejscu jest niezbędne.
                </Typography>
            </Paper>
            <Typography variant="h2" align="center">Propsy</Typography>
            <Table widths={propsWidths}>
                <TableRow>
                    <TableCell><Typography>cecha</Typography></TableCell>
                    <TableCell><Typography>typ</Typography></TableCell>
                    <TableCell><Typography>domyślnie</Typography></TableCell>
                    <TableCell><Typography>opis</Typography></TableCell>
                </TableRow>   
                <TableRow>
                    <TableCell><Typography>id</Typography></TableCell>
                    <TableCell><Typography>dowolny</Typography></TableCell>
                    <TableCell><Typography>Pole Obowiązkowe</Typography></TableCell>
                    <TableCell><Typography>Portale z takim samym id zostaną połączone</Typography></TableCell>
                </TableRow>   
                <TableRow>
                    <TableCell><Typography>type</Typography></TableCell>
                    <TableCell><Typography>enum("item", "container")</Typography></TableCell>
                    <TableCell><Typography>Pole Obowiązkowe</Typography></TableCell>
                    <TableCell>
                        <Typography>
                            item - portal wejściowy - umieszczamy w nim komponenty, container - portal wyjściowy - dzieci z portali wejściowych zostaną wyrenderowane
                            w miejscu portalu wyjściowego
                        </Typography>
                    </TableCell>
                </TableRow>   
            </Table>
            <Paper style={[styles.paper, styles.alert, { marginTop: 8 }]}>
                <Warning fill="rgb(239, 83, 80)" style={styles.alertIcon} />
                <Typography style={{ marginRight: 56 }} align="justify">
                    Dodatkowo, wszystkie propsy przekazane do portalu wyjściowego zostaną także przekazane do wszystkich jego dzieci
                    (Nie nadpiszą propsów przekazanych bezpośrednio do dzieci w portalu wejściowym)
                </Typography>
            </Paper>
            <Alert severity="warning">
                Komponent Portal udostępniłem jako osobny moduł w npm, można z niego korzystać także w zwykłych Reaktowych aplikacjach (nie react-native).
                <Link url="https://github.com/zieleniowy/rportal">Przejdź do repozytorium</Link>
            </Alert>
            <View style={{ paddingBottom: 200 }}></View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    paper: {
        padding: 8,
        marginBottom: 16,
    },
    example: {
        marginBottom: 16,
    },  
    alertIcon: {
        marginRight: 16,
        color: 'red',
    },
    alert: {
        backgroundColor: 'rgb(253, 237, 237)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});
