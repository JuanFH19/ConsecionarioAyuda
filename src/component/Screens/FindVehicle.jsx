import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native'
import Catalog from './Catalog';

const FindVehicle = ({navigation}) => {
    const [catalg, setCalogo] = React.useState('');
    return (
      <Searchbar
        placeholder="Search"
        onChangeText={setCalogo}
        value={Catalog}
      />
      )
    }
    
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: 'black',
            justifyContent: 'center',
        },
        title:{
            color: 'rgb(199, 101, 101)',
            fontSize: 40,
            textAlign: 'center'
        },
    });
export default FindVehicle;
