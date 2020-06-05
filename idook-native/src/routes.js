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
import LoadingScreen from './screens'
import RegisterScreen from './auth/register'
import LoginScreen from './auth/login'
import Token from './auth/token'
import EditID from './pages/id/editid'
import NewID from './pages/id/newid'
import Photo from './pages/id/uploadphoto'



export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Loading" component={LoadingScreen} />
                <AppStack.Screen name="Login" component={LoginScreen} />
                <AppStack.Screen name="Register" component={RegisterScreen} />
                <AppStack.Screen name="Token" component={Token} />
                <AppStack.Screen name="EditID" component={EditID} />
                <AppStack.Screen name="Photo" component={Photo} />

                <AppStack.Screen name="NewID" component={NewID} />
                
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