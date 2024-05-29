import React, { useContext, useState, useEffect, Fragment } from 'react';
import CarsContext from '../../../context/cars/CarsContext';
import { ScrollView, View } from 'react-native-gesture-handler';
import {Text} from 'react-native-paper'

const Catalog = () => {

    const {cars, cargarCatalogo} = useContext(CarsContext);
    useEffect (() =>{
        cargarCatalogo()
    }, [])
    return(
            <View>
                <ScrollView>
                    <View>
                    {cars.map((vehicle)=>{
                            const {id,imagen,marca,modelo,precio}=vehicle
                                return(
                                    <>
                                        <Text> {marca} </Text>
                                        <Text> {modelo} </Text>
                                        <Text> {imagen} </Text>
                                        <Text> {precio} </Text>
                                    </>
                                )
                        })}
                    </View>
                </ScrollView>
        </View>
    )

}

export default Catalog;