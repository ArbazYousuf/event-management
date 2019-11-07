import React from 'react';
import { Text, View, ScrollView } from 'react-native';
// import { Icon } from "native-base";
import { EventCard } from "./EventCard";
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from './Header'

export function TodoList() {
    return (
        <LinearGradient
            colors={['#6D79FF', '#46A8FF', '#23D2FF']}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Header title="To do list" />
            <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', width: '100%' }}>
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', margin: 20 }}>
                    <Text style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: 25, fontWeight: 'bold' }}>
                        Upcomming event
                     </Text>
                </View>
                <EventCard />
                <EventCard />
            </ScrollView>
        </LinearGradient>
    )
}