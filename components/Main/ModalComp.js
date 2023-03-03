import {View, Text, Modal, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setModalVisible} from '../../store/generalStore';

const ModalComp = () => {
	const dispatch = useDispatch();
	const {modalVisible} = useSelector((state) => state.generalSlice);

	return (
		<Modal
			style={styles.modalView}
			animationType='slide'
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				dispatch(setModalVisible(!modalVisible));
			}}
		>
			<View style={styles.modalView}>
				<Text style={styles.modalText}>Hello World!</Text>
				<Pressable
					style={[styles.button, styles.buttonClose]}
					onPress={() => dispatch(setModalVisible(!modalVisible))}
				>
					<Text style={styles.textStyle}>Hide Modal</Text>
				</Pressable>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	// modal
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
});
export default ModalComp;
