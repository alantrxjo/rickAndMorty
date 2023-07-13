import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import React from 'react';

import Favorito from './Personajes/Favorito';

export default function HeaderInfo({ characters }) {
	console.log('characters:' + characters);
	let estadoColor = '';

	

	switch (characters.status) {
		case 'Alive':
			estadoColor = '#04F32D';
			break;
		case 'Dead':
			estadoColor = '#FF0000';
			break;
		case 'unknown':
			estadoColor = '#FF8800';
			break;
		default:
			estadoColor = 'gray';
			break;
	}

	return (
		<View style={styles.header}>
			<Image
				source={{ uri: characters.image }}
				style={styles.personajeImagen}
			/>
			<View
				style={[
					styles.personajeEstadoWrapper,
					{ backgroundColor: estadoColor },
				]}
			>
				<Text style={styles.personajeEstado}>
					{characters.status}
					{console.log(characters)}
				</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	header: {
		flexGrow: 1,
		flexDirection: 'row',
		padding: 10,
		marginTop: 265,
		marginLeft: 47,
		alignItems: 'top',
	},
	personajeImagen: {
		width: 200,
		height: 200,
		borderRadius: 40,
	},
	personajeEstadoWrapper: {
		alignSelf: 'center',
		backgroundColor: 'white',
		padding: 5,
		borderRadius: 5,
		width: 150,
		height: 44,
		transform: [{ rotate: '90deg' }],
	},
	personajeEstado: {
		fontSize: 25,
		color: '#FFFFFF',
		alignSelf: 'center',
		fontWeight: 'bold',
		marginTop: 5,
	},
});
