import * as React from 'react'
import { Drawer } from 'react-native-paper'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper'

const Home = ({ navigation }) => {
    const [active, setActive] = React.useState('');
  return (
  /**<Drawer.Section style={styles.title} title="BIENVENIDOS A CONSECIONARIO JYJ">
        <Drawer.Item 
        style={{backgroundColor: '#black'}}
        label="Catalogo"
        active={active === 'first'}
        onPress={()=> navigation.navigate('Catalog')} />
        <Drawer.Item 
        style={{backgroundColor: '#black'}}
        label="Catalogo"
        active={active === 'first'}
        onPress={()=> navigation.navigate('FindVehicle')} />
    </Drawer.Section>*/

        <View style={styles.contains}>
            <Text style={styles.title}> BIENVENIDOS A CONSECIONARIOS JyJ.</Text>
            <Text style={styles.space}></Text>
            <Button mode='contained-tonal' onPress={()=>navigation.navigate("Catalog")}>Catalogo</Button>
            <Text style={styles.space}></Text>
            <Button mode='contained-tonal' onPress={()=>navigation.navigate('FindVehicle')}>Busqueda Vehiculo</Button>
            <Text style={styles.space}></Text>
            <Button mode='contained-tonal' onPress={()=>navigation.navigate('DriveTesting')}>Prueba de Manejo</Button>
            <Text style={styles.space}></Text>
            <Button mode='contained-tonal' onPress={()=>navigation.navigate('AppointmentForm')}>Cotizar vehiculo</Button>
            <Text style={styles.space}></Text>
            <Button mode='contained-tonal' onPress={()=>navigation.navigate('Mechanic')}>Taller</Button>
            <Text style={styles.space}></Text>
            <Button mode='contained-tonal' onPress={()=>navigation.navigate('History')}>Historial Servicios</Button>
            <Text style={styles.space}></Text>
            <Button mode='contained-tonal' onPress={()=>navigation.navigate("Promotions")}>Promociones</Button>
            <Text style={styles.space}></Text>
            <Button mode='contained-tonal' onPress={()=>navigation.navigate("Contact")}>Contactanos</Button>
            <Text style={styles.space}></Text>
            <Button mode='contained-tonal' onPress={()=>navigation.navigate("ResumenPedido")}>ResumenPedido</Button>
        </View>
  )
}

const styles = StyleSheet.create({
    contains:{
        flex:1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    space:{
        fontSize:10,
    },
    title:{
        color: 'rgb(199, 101, 101)',
        fontSize: 40,
        textAlign: 'center'
    },
    Button:{
        color: 'rgb(236, 87, 87)',
        marginVertical: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: 'white',
    },
});

export default Home
