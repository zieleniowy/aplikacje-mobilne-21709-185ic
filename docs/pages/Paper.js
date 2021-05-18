import React from 'react';
import { Typography, Table, TableRow, TableCell, Paper } from '../../core/index';
import { View, StyleSheet } from 'react-native';

export default function PaperPage(props){

    // React.useEffect(()=>{
    //     dir&&handleOpen(true)();
    // }, [dir])
    return (
        <View>
            <Typography variant="h1" align="center">Paper</Typography>
            <Typography> Tło do elementów aplikacji o teksturze kartki papieru. Domyślnie w kolorze białym, kolor można zmienić w motywie jako theme.palette.background.paper. </Typography>

            <Paper style={styles.paper}>
                <Typography>PAPIER</Typography>
            </Paper>

            <Typography>KOD: </Typography>
            <Paper style={styles.paper}>
                <Typography>
{`<Paper style={styles.paper}>
    <Typography>PAPIER</Typography>
</Paper>`}
                </Typography>

            </Paper>
        </View>
    );

}

const styles = StyleSheet.create({

    paper: {
        padding: 8,
        margin: 8,
    }
});
