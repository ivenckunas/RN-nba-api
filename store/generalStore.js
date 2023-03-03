import {createSlice} from '@reduxjs/toolkit';

export const generalSlice = createSlice({
	name: 'generalSlice',
	initialState: {
		newsArr: [],
		search: '',
		modalVisible: false,
	},
	reducers: {
		setNewsArr: (state, action) => {
			state.newsArr = action.payload;
		},
		setSearch: (state, action) => {
			state.search = action.payload;
		},
		setModalVisible: (state, action) => {
			state.modalVisible = action.payload;
		},
	},
});

export const {setNewsArr, setSearch, setModalVisible} = generalSlice.actions;

export default generalSlice.reducer;
