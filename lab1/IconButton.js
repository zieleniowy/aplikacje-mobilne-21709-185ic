import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
    root: {
        backgroundColor: '#cacaca',
        width: 64,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32,
    },
    rootHightlight: {
        borderColor: 'red',
        borderWidth: 1
    },  
    text: {
        fontSize: 48
    }
  });
  

export default function IconButton(props){
    return (
        <TouchableOpacity 
            onLongPress={props.onLongPress} 
            onPress={props.onPress} 
            style={[styles.root, props.highlight?styles.rootHightlight:null, props.style]}
        >
            <View>
                <Text style={[styles.text, props.textStyle]}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}