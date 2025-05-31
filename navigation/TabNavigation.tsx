import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PartidosScreen from '../screens/Partido/PartidosScreen';
import EquipoScreen from '../screens/Equipo/EquipoScreen';
import ClassificationScreen from '../screens/ClassificationScreen';
import { Ionicons } from '@expo/vector-icons'; // viene con Expo

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#1A4D2E',
        tabBarInactiveTintColor: 'gray',
       tabBarIcon: ({ color, size }) => {
        let iconName = 'home';

        if (route.name === 'Inicio') iconName = 'home';
        else if (route.name === 'Clasificación') iconName = 'bar-chart';
        else if (route.name === 'Partidos') iconName = 'calendar';
        else if (route.name === 'Equipos') iconName = 'people'

        return <Ionicons name={iconName as any} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Clasificación" component={ClassificationScreen} />
      <Tab.Screen name="Partidos" component={PartidosScreen} />
      <Tab.Screen name="Equipos" component={EquipoScreen}/>
    </Tab.Navigator>
  );
}