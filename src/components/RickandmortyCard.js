import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function RickandmortyCard(props) {
	const { characters } = props;
	const navigation = useNavigation();
	const goToPersonaje = () => {
		navigation.navigate('Rickandmorty', { characters: characters });
	};
	return (
		<TouchableWithoutFeedback onPress={goToPersonaje}>
        <View style={styles.card}>
          <View style={styles.marginCard}>
            <View style={styles.colorCard}>
              <Text style={styles.number}>#{`${characters.id}`.padStart(3, 0)}</Text>
              <View style={styles.containerText}>
                <Text style={styles.name} numberOfLines={3} >{characters.name} </Text>
              </View>
              <Image source={{ uri: characters.image }} style={styles.image} />
            </View>
          </View>
        </View>  
    </TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	card: {
	  flexGrow: 1,
	  padding: 16,
	  height: 130,
	  padding: 5,
	},
	marginCard: {
	  flex: 1,
	  padding: 5,
	  backgroundColor: 'white',
	  borderRadius: 10,
	  shadowColor: '#000',
	  shadowOpacity: 0.3,
	  shadowRadius: 4,
	  elevation: 5,
	},
	colorCard: {
	  flex:1,
	  padding: 5,
	  borderRadius: 10,
	  backgroundColor: '#F2F2F2',
  
	},
	name: {
	  color: '#000',
	  fontWeight: 'bold',
	  fontSize: 14,
  
	},
	containerText:{
	  width:90,
	},
	image:{
	  position: 'absolute',
	  bottom: 2,
	  right: 2,
	  width: 75,
	  height: 75,
	  bottom: 10,
	  borderRadius: 10,
  
	},
	number: {
	  position:'absolute',
	  right: 10,
	  color: '#000',
	  fontSize:11
	}
  
  })