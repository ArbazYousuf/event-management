import React from 'react';
import { Text, View } from 'react-native';
// import { Icon } from "native-base";
import { EventCard } from "./EventCard";

export function TodoList() {
    return (
        <View style={{ flex: 1, width: "100%" }}>
            <View style={{ justifyContent: 'center', alignItems: 'flex-start', margin: 20 }}>
                <Text style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: 25, fontWeight: 'bold' }}>
                    Upcomming event
                </Text>
            </View>
            <EventCard />
            <EventCard />
        </View>
    )
}