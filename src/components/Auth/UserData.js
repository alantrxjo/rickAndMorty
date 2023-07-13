import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDetail } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

import { ItemMenu } from '../../screen/Account';
import ButtonLogin from '../ButtonLogin';
import { getFavoriteApi } from '../../api/favorito';
import { useFocusEffect } from '@react-navigation/native';

export default function UserData(props) {
	const { auth, logout } = useAuth();
	const [favoriteCount, setFavoriteCount] = React.useState(0);

	useFocusEffect(
		useCallback(() => {
			const fetchFavoriteCount = async () => {
				try {
					const favorites = await getFavoriteApi();
					setFavoriteCount(favorites.length);
				} catch (error) {
					console.log(error);
				}
			};

			fetchFavoriteCount();
		}, [])
	);
	React.useEffect(() => {
		const fetchFavoriteCount = async () => {
			try {
				const favorites = await getFavoriteApi();
				setFavoriteCount(favorites.length);
			} catch (error) {
				console.log(error);
			}
		};

		fetchFavoriteCount();
	}, []);

	return (
		<SafeAreaView style={styles.contenedor}>
			<View style={styles.contenedorDos}>
				<Text style={styles.personajeNombre}>{auth.firstName}</Text>
				<View style={styles.personajeContainer}>
					<Icon
						name='user-o'
						size={150}
						color={'white'}
						style={styles.icon}
					/>
					<View style={styles.textoWrapper}>
						<ItemMenu
							title='Nombre: '
							text={`${auth.firstName} ${auth.lastName}`}
						/>
						<ItemMenu title='Usuario: ' text={auth.user} />
						<ItemMenu title='Email: ' text={auth.email} />
						<ItemMenu
							title='Total de favoritos: '
							text={favoriteCount.toString()}
						/>
					</View>
					<ButtonLogin
						title='Cerrar Sesión'
						onPress={logout}
						style={{ backgroundColor: 'black' }}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	contenedor: {
		flexGrow: 1,
		backgroundColor: '#2A2C2E',
	},
	contenedorDos: {
		flexGrow: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	personajeNombre: {
		marginTop: 20,
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#000',
		textAlign: 'center',
	},
	personajeContainer: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#2A2C2E',
		borderRadius: 15,
		padding: 10,
		flexGrow: 1,
		width: '100%',
		height: '80%',
	},
	icon: {
		position: 'relative',
		alignSelf: 'center',
	},
	textoWrapper: {
		marginTop: 10,
		backgroundColor: 'white',
		width: 300,
		alignItems: 'center',
		borderRadius: 20,
		alignItems: 'left',
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
});
