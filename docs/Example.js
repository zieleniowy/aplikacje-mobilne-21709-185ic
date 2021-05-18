import React from 'react';
import { Button, Transition, useTheme } from '../core/index';
import { View, StyleSheet, ScrollView, Image } from 'react-native';

export default function Example(props){
    const theme = useTheme();
    const [expanded, setExpand] = React.useState(false);
    const toggleExpanded = () => setExpand(!expanded);
    return (
        <View>
            <Button style={{ paddingBottom: theme.spacing(1) }} onPress={toggleExpanded} variant="contained" color="secondary" fullWidth>{`${expanded?"ukryj":"Pokaż"} kod przykładu`}</Button>
            <Transition in={expanded} type="collapse" height={props.height}>
                    <ScrollView style={{ ...theme.shape }} contentContainerStyle={{ width: props.width }}>
                        <Image source={props.source} />
                    </ScrollView>
            </Transition>
        </View>
    )
}
