import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from "native-base";

export function Header() {
    return (
            <View style={{ flexDirection: 'row', height: 50, marginTop: 20 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon
                        type="FontAwesome5"
                        name="bars"
                        style={{ color: "white", fontSize: 16 }}
                    />
                </View>
                <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                        To do list
                     </Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
