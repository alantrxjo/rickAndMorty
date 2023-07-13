import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import useAuth from '../hooks/useAuth';
import Favorito from './Personajes/Favorito';
export default function BodyInfo({ characters, props }) {
	//const { params } = props;
	const { auth } = useAuth();
	const formatEpisode = (url) => {
		const episodeNumber = url.split('/').pop();
		return `Episodio ${episodeNumber}`;
	};
	const id = characters.id;
	return (
		<View style={styles.personajeText}>
			{auth && <Favorito id={id} />}
			<View style={styles.textoWrapper}>
				<Text style={styles.textoWrapped}>Species</Text>
			</View>
			<Text style={styles.personajeEspecie}>{characters.species}</Text>

			{characters.type !== '' && (
				<>
					<View style={styles.textoWrapper}>
						<Text style={styles.textoWrapped}>Type</Text>
					</View>
					<Text style={styles.personajeEspecie}>{characters.type}</Text>
				</>
			)}

			<View style={styles.textoWrapper}>
				<Text style={styles.textoWrapped}>Gender</Text>
			</View>
			<Text style={styles.personajeEspecie}>{characters.gender}</Text>
			<View style={styles.textoWrapper}>
				<Text style={styles.textoWrapped}>Location</Text>
			</View>
			<Text style={styles.personajeEspecie}>{characters.location.name}</Text>
			<View style={styles.textoWrapper}>
				<Text style={styles.textoWrapped}>Episodes</Text>
			</View>
			<FlatList
				style={styles.flatList}
				data={characters.episode}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Text style={[styles.textoScrollbar]}>
						{formatEpisode(item)}
					</Text>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	textoScrollbar: {
		height: 20,
		width: 350,
		marginTop: 10,
		fontSize: 18,
		marginBottom: 5,
		color: '#FFFFFF',
		textAlign: 'center',
		alignSelf: 'center',
	},
	personajeText: {
		flexGrow: 1,
		marginTop: 10,
		alignSelf: 'flex-start',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
	},
	textoWrapper: {
		marginTop: 10,
		backgroundColor: 'white',
		width: 300,
		alignItems: 'center',
	},
	textoWrapped: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	personajeEspecie: {
		marginTop: 2,
		fontSize: 18,
		marginBottom: 5,
		color: '#FFFFFF',
		textAlign: 'center',
	},
	flatList: {
		flex: 1,
		marginTop: 10,
		width: 300,
		height: 100,
	},
});
