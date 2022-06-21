import { View, Text,StyleSheet,Button,TouchableHighlight,onPress } from 'react-native'
import React from 'react'

export const Producto = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Estas en productos</Text>
      {/* <Button title='Ir a Home' onPress={()=>{navigation.navigate('HomeNav')}}/> */}
      <TouchableHighlight onPress={()=>{navigation.navigate('HomeNav')}}>
        <View style={styles.button}>
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
    button: {
        alignItems: "center",
        backgroundColor: "#E4D0CC",
        padding: 15,
        borderRadius:20,
        marginRight:20,
        marginVertical:20
      },
  });
