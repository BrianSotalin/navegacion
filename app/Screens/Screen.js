import { View, Text,StyleSheet,Button,TouchableHighlight,onPress } from 'react-native'
import React from 'react'

export const Contactos = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Estas en Contactos</Text>
      {/* <Button title='Ir a Home' onPress={()=>{navigation.navigate('HomeNav')}}/> */}
      <TouchableHighlight onPress={()=>{navigation.navigate('HomeNav')}}>
        <View style={styles.button2}>
          <Text>Ir a Home</Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button2: {
        alignItems: "center",
        backgroundColor: "#E3D434",
        padding: 15,
        borderRadius:20,
        marginLeft:20,
        marginVertical:20
      },
  });

