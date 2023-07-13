import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, StatusBar, TouchableOpacity
} from 'react-native';
import React, { useState, useRef } from 'react';
import { SvgXml } from 'react-native-svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ButtonLogin from '../ButtonLogin';
import { user, useDetail } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

export default function LoginForm(props) {
	const logoRef = useRef('../../assets/imglogpng.png');
	const { navigation } = props;
	const [error, setError] = useState('');
	const { login } = useAuth();
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: Yup.object(validationSchema()),
		validateOnChange: false,
		onSubmit: (formData) => {
			setError('');
			const { username, password } = formData;
			if (username !== user.username || password !== user.password) {
				console.log('Usuario o contraseña incorrectos');
				setError('Usuario o contraseña incorrectos');
			} else {
				//setAuth(username);
				console.log('Login correcto');
				//console.log('auth:' + useAuth());
				navigation.navigate('Account');
				login(useDetail);
			}
		},
	});

	function validationSchema() {
		return {
			username: Yup.string().required('El nombre de usuario es obligatorio'),
			password: Yup.string().required('La contrasena es obligatoria'),
		};
	}

	function initialValues() {
		return {
			username: '',
			password: '',
		};
	}

	// const goToCrearCuenta = () => {
	// 	navigation.navigate('CrearCuenta');
	// };

	// const goToOlvidaste = () => {
	// 	navigation.navigate('OlvidasteContrasena');
	// };

	return (
		<View style={styles.mainContainer}>
			<View style={styles.containerSvg}>
            <SvgXml 
                width="415"
                height="310.5"
                xml={fondoSvg}
                style={styles.fondoLogin}
            />
			</View>
			<View style={styles.containerForm}>
				<Text style={styles.titulo}>Bienvenido</Text>
            	<Text style={styles.subtitulo}>Ingresa a tu cuenta</Text>
					<TextInput
						placeholder='Nombre de usuario: alantrxjo'
						style={styles.inputText}
						autoCapitalize='none'
						value={formik.values.username}
						onChangeText={(text) =>
							formik.setFieldValue('username', text)}
					/>
					<Text style={styles.error}>{formik.errors.username}</Text>
					<TextInput
						placeholder='Contraseña: 12345678'
						style={styles.inputText}
						autoCapitalize='none'
						secureTextEntry={true}
						value={formik.values.password}
						onChangeText={(text) =>
							formik.setFieldValue('password', text)
						}
					/>

					<Text style={styles.error}>{formik.errors.password}</Text>

					
				

				<TouchableOpacity title='Iniciar sesión' style={styles.button} onPress={formik.handleSubmit}>
				<Text style={styles.buttonText}>Enviar</Text>
				</TouchableOpacity>
				<Text style={styles.error}>{error}</Text>

				
				</View>
			</View>
	);
}

const fondoSvg = `<svg width="390" height="222" viewBox="0 0 390 222" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 -60C0 -71.0457 8.95431 -80 20 -80H370C381.046 -80 390 -71.0457 390 -60V171.329C390 189.202 368.345 198.1 355.779 185.392L345.75 175.25L315.301 144.457C307.637 136.707 295.179 136.52 287.287 144.037L230.293 198.316C217.56 210.443 196.5 201.417 196.5 183.833V172.217C196.5 155.429 177.065 146.111 163.976 156.624L88.4367 217.298C79.5024 224.474 66.3773 222.691 59.6816 213.391L3.76931 135.735C1.3186 132.331 0 128.243 0 124.049V-60Z" fill="url(#paint0_linear_2_4)"/>
<defs>
<linearGradient id="paint0_linear_2_4" x1="195" y1="-80" x2="22.5" y2="-80" gradientUnits="userSpaceOnUse">
<stop stop-color="#EF7E16"/>
<stop offset="1" stop-color="#DAD4CF" stop-opacity="0.0520833"/>
<stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`;

const styles = StyleSheet.create({
	centeredContent: {
		marginTop: 100,
		alignItems: 'center',
	},
	subTitulo: {
		fontSize: 20,
		color: '#000000',
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
	title: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 50,
		marginBottom: 20
	  },
	  input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 10
	  },
	  error: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 15
	  },
	  mainContainer: {
		backgroundColor: '#f2f2f2',
		height:'100%'
	  },
	  containerSvg:{
		  alignItems:'center',
		  justifyContent: 'flex-start'
	  },
	  fondoLogin: {
		  top: -70
	  },
	  containerForm: {
		top: -50,
		alignItems: 'center',
		justifyContent: 'center'
	  },
	  titulo: {
		  fontSize:50,
		  color:'#848484',
		  fontWeight:'bold'
	  },
	  subtitulo: {
		  fontSize:20,
		  color:'#848484'
	  },
	  inputText: {
		  width: '80%',
		  height: 60,
		  borderRadius: 20,
		  backgroundColor: '#FFFFFF',
		  padding: 15,
		  marginTop: 15,
		  paddingStart: 20
	  },
	  textos: {
		  fontSize:15,
		  color:'#848484',
		  marginTop:15,
		  marginRight:-140
	  },
	  textos2: {
		  fontSize:15,
		  color:'#848484',
		  marginTop:15,
	  },
	  button: {
			width: 260,
			height: 60,
			borderRadius: 20,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#f56c08',
			color: '#090808',
			marginTop: 50,
		},
		buttonText: {
			color: '#fff',
			fontSize: 22,
			fontWeight: 'bold',
		},
});