import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const Configuraciones = ({navigation}) => {
  return (
    <View style={styles.configContainer}>
      <Text>Configuraciones</Text>
    </View>
  )
}

export default Configuraciones

const styles = StyleSheet.create({
  configContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})