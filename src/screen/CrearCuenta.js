import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

export default function CrearCuenta(props) {
	const { navigation } = props;
	const goToLogin = () => {
		navigation.navigate('Account');
	};
	return (
		<View style={styles.container}>
			<Text>Crear Cuenta</Text>
			<Button onPress={goToLogin} title='Enviar' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
