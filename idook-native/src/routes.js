import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator();

import Feed from './pages/feed';
import Detail from './pages/detail';
import Inicial from './pages/inicial';
import Events from './pages/events';
import EventDetail from './pages/events/eventdetail';
import Ticket from './pages/events/ticket';
import Play from './pages/events/play';
import Poll from './pages/poll';
import Social from './pages/social';
import Settings from './pages/settings';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Inicial" component={Inicial} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="Feed" component={Feed} />
                <AppStack.Screen name="Events" component={Events} />
                <AppStack.Screen name="EventDetail" component={EventDetail} />
                <AppStack.Screen name="Ticket" component={Ticket} />
                <AppStack.Screen name="Play" component={Play} />      
                <AppStack.Screen name="Poll" component={Poll} />          
                <AppStack.Screen name="Social" component={Social} />
                <AppStack.Screen name="Settings" component={Settings} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}