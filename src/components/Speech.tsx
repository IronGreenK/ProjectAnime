import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';

class SpeechNative extends React.Component<{ search: any }> {
    render() {
        let {search} = this.props;
        const speak = () => {
            Speech.speak(search);
        };

        return (
            <View style={styles.container}>
                <Button title="Press voice your anime search" onPress={speak}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
        margin: 10
    },
});

export default SpeechNative;
