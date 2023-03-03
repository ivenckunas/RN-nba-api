import {ScrollView, Text, Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, ThemeProvider, SearchBar} from '@rneui/themed';

const Main = () => {
	const [newsArr, setNewsArr] = useState();

	useEffect(() => {
		axios.get('http://api.mediastack.com/v1/news?access_key=34c780bda21009df9e73fe632f8d33a5&keywords=nba&countries=us,gb&sources=cnn,-bbc').then((res) => setNewsArr(res.data.data));
	}, [setSearch, setNewsArr, search]);

	const [search, setSearch] = useState('');

	const updateArrBySearch = (search) => {
		setSearch(search);
		if (search.trim() === '') {
			// If the search query is empty, update the news array from the API fetch
			axios.get('http://api.mediastack.com/v1/news?access_key=34c780bda21009df9e73fe632f8d33a5&keywords=nba&countries=us,gb&sources=cnn,-bbc').then((res) => setNewsArr(res.data.data));
		} else {
			// If the search query is not empty, filter the news array based on the search query
			const filtered = newsArr.filter((singleArticle) => singleArticle.title.toLowerCase().includes(search.toLowerCase()));
			setNewsArr(filtered);
		}
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<SearchBar
				placeholder='Search...'
				onChangeText={updateArrBySearch}
				value={search}
				containerStyle={styles.searchContainer}
				inputContainerStyle={styles.inputContainer}
				inputStyle={styles.input}
				clearIcon={styles.clearIcon}
			/>
			{newsArr &&
				newsArr.map((post, i) => (
					<View
						key={i}
						style={styles.singleCard}
					>
						<Image
							style={styles.image}
							source={{
								uri: `${post.image}`,
							}}
						/>
						<Text style={styles.title}>{post.description.slice(0, 100) + '...'}</Text>
						<Button
							title={'Read full article'}
							containerStyle={styles.button}
						/>
					</View>
				))}
		</ScrollView>
	);
};

export default Main;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		marginTop: 0,
	},
	singleCard: {
		flex: 1,
		margin: 15,
	},
	title: {
		fontWeight: 800,
		fontSize: 15,
	},
	image: {
		flex: 1,
		width: '100%',
		height: 150,
	},
	button: {
		width: 150,
		marginVertical: 10,
	},
	// search bar styles
	searchContainer: {
		backgroundColor: 'white',
		padding: 0,
		borderTopColor: 'lightgrey',
		borderBottomColor: 'transparent',
	},
	inputContainer: {
		backgroundColor: 'white',
	},
	input: {
		fontSize: 14,
		backgroundColor: 'white',
		color: 'black',
	},
	clearIcon: {
		color: 'grey',
	},
});
