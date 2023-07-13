import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ButtonLogin({ title, onPress, style }) {
	const buttonStyle = [styles.button, style];

	return (
		<TouchableOpacity style={buttonStyle} onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		width: 260,
		height: 60,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f56c08',
		color: '#090808',
		marginTop: 50,
	},
	buttonText: {
		color: '#fff',
		fontSize: 22,
		fontWeight: 'bold',
	},
});
