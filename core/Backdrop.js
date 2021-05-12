import React, { useContext } from 'react';
import {TouchableWithoutFeedback, View, Modal} from 'react-native';
import ThemeProvider from './ThemeProvider';

export default function Backdrop(props){
    const styles = useContext(ThemeProvider.StylesContext);
    return (
        <Modal transparent={true} presentationStyle="overFullScreen" animationType={props.disableAnimation?"none":"fade"} visible={props.in}>
            <TouchableWithoutFeedback onPress={props.onExit}>
                <View style={[styles.backdropRoot, props.style]}>
                    <TouchableWithoutFeedback>
                        <View>
                            {props.children}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}