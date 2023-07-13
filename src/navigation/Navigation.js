import { View, Text, Image } from 'react-native';
import React from 'react';
import NavigationAccount from './NavigationAccount';
import NavigationFavoritos from './NavigationFavoritos';
import Rickandmorty from '../screen/Rickandmorty';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RickandmortyApi from '../api/RickandmortyApi';
import NavigationRickandMorty from './NavigationRickandMorty';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Navigation() {
	const Tab = createBottomTabNavigator();
	return (
		<Tab.Navigator initialRouteName='Rickandmorty'>
			<Tab.Screen
				name='Account'
				component={NavigationAccount}
				options={{
					tabBarLabel: 'Mi cuenta',
					tabBarIcon: () => <Icon name='user' size={25} color={"#f56c08"}/>,
				}}
			/>
			<Tab.Screen
				name='Rickandmorty'
				component={NavigationRickandMorty}
				options={{
					tabBarLabel: '',
					tabBarIcon: () => renderIconRM(),
				}}
			/>
			<Tab.Screen
				name='Favoritos'
				component={NavigationFavoritos}
				options={{
					tabBarLabel: 'Favoritos',
					tabBarIcon: () => <Icon name='heart' size={25} color={"#f56c08"}/>,
				}}
			/>
		</Tab.Navigator>
	);
}

const renderIconRM = () => {
	return (
		<Image
			source={require('../assets/iconoram.png')}
			style={{ width: 75, height: 75, top: -20 }}
		/>
	);
};
