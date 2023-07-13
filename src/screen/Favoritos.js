import React, { useCallback, useEffect, useState } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	Button,
	ScrollView,
	StyleSheet,
	StatusBar,
} from 'react-native';
import { getFavoriteApi } from '../api/favorito';
import RickandmortyList from '../components/RickandmortyList';
import useAuth from '../hooks/useAuth';
import { useFocusEffect } from '@react-navigation/native';
import ButtonLogin from '../components/ButtonLogin';

export default function Favoritos(props) {
	const { navigation } = props;
	const [characters, setCharacters] = useState([]);
	const { auth } = useAuth();
	useFocusEffect(
		useCallback(() => {
			if (auth) {
				(async () => {
					try {
						const response = await getFavoriteApi();
						console.log(response);

						// Realizar la solicitud de cada personaje por separado
						const charactersData = await Promise.all(
							response.map(async (characterId) => {
								const characterUrl = `https://rickandmortyapi.com/api/character/${characterId}`;
								const characterResponse = await fetch(characterUrl);
								return characterResponse.json();
							})
						);

						console.log(charactersData);

						// Actualizar el estado con los personajes obtenidos
						setCharacters(charactersData);
					} catch (error) {
						console.log('Error:', error);
					}
				})();
			}
		}, [auth])
	);
	const goToLoginForm = () => {
		navigation.navigate('Account');
	};

	return !auth ? (
		<View style={styles.mainContainer}>
			<View style={styles.containerSvg}></View>
			<View style={styles.containerForm}>
				<View style={styles.centeredContent}>
					<Text style={styles.subTitulo}>No has iniciado sesión</Text>
				</View>

				<ButtonLogin
					onPress={goToLoginForm}
					title='Ir al inicio de sesión  '
				/>
			</View>
		</View>
	) : (
		<SafeAreaView>
			<View>
				<RickandmortyList characters={characters} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#F8F4F4',
		height: '100%',
	},
	containerSvg: {
		marginTop: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	error: {
		color: 'red',
		fontSize: 14,
		marginTop: 10,
		textAlign: 'center',
	},
	fondoLogin: {
		top: 20,
	},
	containerForm: {
		flex: 1,
		marginTop: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	centeredContent: {
		marginTop: 100,
		alignItems: 'center',
	},
	titulo: {
		fontSize: 70,
		color: '#000000',
		fontWeight: 'bold',
	},
	subTitulo: {
		fontSize: 20,
		color: '#000000',
	},
	inputText: {
		height: 60,
		width: 350,
		backgroundColor: '#F8F8F8',
		borderRadius: 20,
		padding: 15,
		marginTop: 15,
		paddingStart: 20,
	},
	text2: {
		fontSize: 15,
		color: '#848484',
		marginTop: 15,
		marginRight: -140,
	},
	text3: {
		fontSize: 15,
		color: '#848484',
		marginTop: 100,
		marginBottom: -100,
		marginRight: -20,
	},
	boldText: {
		fontWeight: 'bold',
	},
});
