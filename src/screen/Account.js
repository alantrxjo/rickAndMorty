import { View, SafeAreaView, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import UserData from '../components/Auth/UserData';
import Loginform from '../components/Auth/Loginform';
import useAuth from '../hooks/useAuth';

export default function Account(props) {
	const { navigation } = props;
	const { auth } = useAuth();
	return (
		<SafeAreaView>
			{auth ? <UserData /> : <Loginform navigation={navigation} />}
		</SafeAreaView>
	);
}
export function ItemMenu(props) {
	const { title, text } = props;
	return (
		<View style={styles.view}>
			<View style={styles.textoWrapperTitle}>
				<Text style={styles.textoTitle}>{title} </Text>
			</View>
			<View style={styles.textoWrapperContent}>
				<Text style={styles.textoContent}>{text} </Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		flexGrow: 1,
		flexDirection: 'row',
		marginTop: 10,
		alignItems: 'left',
		padding: 10,
		marginBottom: 10,
		paddingLeft: 20,
	},
	textoWrapperTitle: {
		backgroundColor: 'black',
		alignItems: 'center',
		borderRadius: 20,
		padding: 10,
	},
	textoTitle: {
		color: 'white',
		fontWeight: 'bold',
	},
	textoContent: {
		fontWeight: 'bold',
		color: 'white',
	},
	textoWrapperContent: {
		flexGrow: 1,
		alignItems: 'center',
		borderRadius: 20,
		padding: 10,
		backgroundColor: '#2A2C2E',
	},
});