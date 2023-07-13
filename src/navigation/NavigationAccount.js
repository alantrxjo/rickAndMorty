import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screen/Account';
import CrearCuenta from '../screen/CrearCuenta';
import OlvidasteContrasena from '../screen/OlvidasteContrasena';
export default function NavigationAccount() {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='Account' component={Account} />
			<Stack.Screen name='CrearCuenta' component={CrearCuenta} />
			<Stack.Screen
				name='OlvidasteContrasena'
				component={OlvidasteContrasena}
			/>
		</Stack.Navigator>
	);
}
