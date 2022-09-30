import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../components/screens/HomeScreen';
import CitiesScreen from '../components/screens/CitiesScreen';
import CityDetail from '../components/screens/CityDetail';


const DrawerNavigation = createDrawerNavigator();

export default function Drawer() {
    return (
        <DrawerNavigation.Navigator>
            <DrawerNavigation.Screen name={'MyTinerary'} component={HomeScreen}/>
            <DrawerNavigation.Screen name={'Cities'} component={CitiesScreen}/>
            <DrawerNavigation.Screen name={'CityDetail'} component={CityDetail} options={{headerBackTitle: true, }} initialParams={{id: ""}}/>
        </DrawerNavigation.Navigator>
    )
}