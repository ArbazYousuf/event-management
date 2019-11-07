import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from "native-base";

export function EventCard() {
    return (
        <View style={{ flexDirection: 'row', height:55}}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Icon
                    type="FontAwesome5"
                    name="circle"
                    style={{ color: "white", fontSize: 8 }}
                />
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', flex: 3 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Market</Text>
                <Text style={{ fontSize: 10, color: 'white', }}>Dec 10, 2019</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <View style={{ width: 60, height: 35, borderBottomColor: "white", borderWidth: 1, backgroundColor: '#B0E4F6', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                    <Text style={{ color: "black", fontWeight: 'bold' }}>04:00</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Icon
                    type="FontAwesome5"
                    name="times"
                    style={{ color: "white", fontSize: 15 }}
                />
            </View>
        </View>
    )
}