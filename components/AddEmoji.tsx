import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from './Header'
import EmojiSelector, { Categories } from 'react-native-emoji-selector'
import { Actions } from 'react-native-router-flux'


export default class AddEmoji extends React.Component {
    render() {
        return (
            <LinearGradient
                colors={['#6D79FF', '#46A8FF', '#23D2FF']}
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Header title="Add Emoji" isMenu={"false"} />
                <View style={{ flex: 1 }}>
                    <EmojiSelector
                        showTabs={false}
                        showSearchBar={false}
                        showHistory={false}
                        columns={4}
                        category={Categories.people}
                        onEmojiSelected={emoji => console.log(emoji)} />
                    <View style={{ elevation: 2, alignItems: 'center', justifyContent: 'center', flex: 0.1 }}>
                        <Button
                            onPress={() => Actions.addEvent()}
                            style={{ marginBottom: 10, width: 120, height: 50, backgroundColor: '#B1E6FB', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                            <Text style={{ color: "black" }}>Add Emoji</Text>
                        </Button>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
