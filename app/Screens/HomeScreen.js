import { View, Text ,StyleSheet,Button,TouchableHighlight,onPress} from 'react-native'
import React from 'react'

 export const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{color:'#5E8A6C', fontSize:20}}> Menu Principal </Text>

      <View style={styles.areaBoton}>
      {/* <Button title='Ir a Screen' onPress={()=>{navigation.navigate('ContactosNav')}} style={styles.boton1}/>
      <Button title='Productos' onPress={()=>{navigation.navigate('ProductosNav')}}/> */}
      <TouchableHighlight onPress={()=>{navigation.navigate('ProductosNav')}}>
        <View style={styles.button}>
          <Text>Productos</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>{navigation.navigate('ContactosNav')}}>
        <View style={styles.button2}>
          <Text>Contactos</Text>
        </View>
      </TouchableHighlight>
      </View>
    
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
      alignItems: 'center',
      justifyContent: 'center',
    },
    areaBoton:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#E4D0CC",
        padding: 15,
        borderRadius:20,
        marginRight:20,
        marginVertical:20
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
