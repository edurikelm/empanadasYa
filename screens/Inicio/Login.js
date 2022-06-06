import { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Alert, Text, TouchableOpacity } from 'react-native'

const Login = ({ navigation }) => {

  const [usuario, setUsuario] = useState('edu@gmail.com')
  const [password, setPassword] = useState('123456')

  const data = {
    usuario: 'edu@gmail.com',
    password: '123456'
  }

  const btnIniciarSesion = () => {
    if(usuario === data.usuario && password === data.password){
      return navigation.navigate('Menu')
    }
    Alert.alert(
      'Error',
      'Usuario o password incorrectos',
      [
        {
          text: 'Aceptar'
        }
      ]
    )

  }

  return (
    <View style={styles.containerLogin}>
      <TextInput
        value={usuario}
        onChangeText={texto => setUsuario(texto)}
        style={styles.inputLogin}
        placeholder="Correo electrónico"
      />
      <TextInput 
        value={password}
        onChangeText={texto => setPassword(texto)}
        style={styles.inputLogin}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      <Button
        title='Iniciar Sesion'
        onPress={btnIniciarSesion}
      />
      <TouchableOpacity
        style={styles.registro}
        onPress={()=> navigation.navigate('Registro')}
      >
        <Text style={{color: 'blue'}}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    containerLogin:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#61dafb'
    },
    inputLogin:{
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10
    },
    btnLogin:{
      width: 200
    },
    registro:{
      margin: 10
    }
})