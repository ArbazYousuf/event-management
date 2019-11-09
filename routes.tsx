import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux';
import AddEvent from './components/AddEvent';
import AddEmoji from './components/AddEmoji';
import { TodoList } from './components/todoList';
import Calender from './components/calender';
export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="addEmoji" component={AddEmoji} title="AddEmoji" hideNavBar={true} />
                    <Scene key="addEvent" component={AddEvent} title="Register" hideNavBar={true} />
                    <Scene key="todoList" component={TodoList} title="TodoList" hideNavBar={true} />
                    <Scene key="calendar" component={Calender} title="Calender" hideNavBar={true} initial />
                </Stack>
            </Router>
        );
    }
}