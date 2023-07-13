import { View, Text } from 'react-native';
import React from 'react';
import axios from 'axios';
export default function RickandmortyApi2() {
	const API_URL = 'https://rickandmortyapi.com/api/character';
	const [characters, setCharacters] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(API_URL);
				setCharacters(response.data.results);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return (
		<View>
			<RickandmortyList characters={characters} />
		</View>
	);
}
