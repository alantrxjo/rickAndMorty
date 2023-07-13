import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull } from 'lodash';
import { FAVORITE_STORAGE } from '../utils/constants';

//Crear la función que trae los favoritos

export const getFavoriteApi = async () => {
	try {
		const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
		return JSON.parse(response || []);
	} catch (error) {
		console.log(error);
	}
};

//Crear la función que añade a Favoritos
export const addFavoriteApi = async (id) => {
	try {
		const favorites = await getFavoriteApi();

		// Verificar si el ID ya está en la lista de favoritos
		if (!favorites.includes(id)) {
			favorites.push(id);
			await AsyncStorage.setItem(
				FAVORITE_STORAGE,
				JSON.stringify(favorites)
			);
		} else {
			// El ID ya está en la lista de favoritos, eliminarlo
			const updatedFavorites = favorites.filter(
				(favoriteId) => favoriteId !== id
			);
			await AsyncStorage.setItem(
				FAVORITE_STORAGE,
				JSON.stringify(updatedFavorites)
			);
		}
	} catch (error) {
		console.log(error);
	}
};

// Crear la función que verifica si un personaje es favorito

export const isFavoriteApi = async (id) => {
	try {
		const favorites = await getFavoriteApi();
		return includes(favorites, id);
	} catch (error) {
		console.log(error);
	}
};
