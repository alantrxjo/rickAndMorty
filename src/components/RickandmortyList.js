import { View, Text, SafeAreaView, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useRef, useState } from 'react';
import RickandmortyCard from './RickandmortyCard';

export default function RickandmortyList(props) {
	const { characters, nextUrl, loadMoreData } = props;
	const loadMore = () => {
		if (nextUrl) {
			loadMoreData();
		}
	};
	return (
		<SafeAreaView>
        <FlatList 
            data={characters}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(characters) => { String(characters.id) }}
            renderItem={({item}) => <RickandmortyCard characters ={item} />}
            contentContainerStyle={styles.container}
            onEndReached={nextUrl && loadMore}
            EndReachedThreshold={0.1}
            ListFooterComponent={
                nextUrl && (
                <ActivityIndicator 
                    size="large"
                    color="#A4A4A4"
                    style={styles.spinner}
                    />
                )
            }
        />
    </SafeAreaView>
	);
}
const styles = StyleSheet.create ({
    container: {
        paddingHorizontal: 15,
    },
    spinner: {
        marginTop:20,
        marginBottom:50
    }
})
