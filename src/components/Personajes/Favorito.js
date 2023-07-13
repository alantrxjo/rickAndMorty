import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { addFavoriteApi, isFavoriteApi } from '../../api/favorito';

export default function Favorito(props) {
	const { id } = props;
	const [isFavorite, setIsFavorite] = useState(undefined);
	console.log(isFavorite);

	useEffect(() => {
		(async () => {
			const response = await isFavoriteApi(id);
			setIsFavorite(response);
		})();
	}, []);

	const addFavorite = async () => {
		await addFavoriteApi(id);
		setIsFavorite(!isFavorite);
	};
	return (
		<Icon
			name='heart'
			color='white'
			size={30}
			onPress={addFavorite}
			style={{ padding: 5 }}
			solid={isFavorite}
		/>
	);
}
