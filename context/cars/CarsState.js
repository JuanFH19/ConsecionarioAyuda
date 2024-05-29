import React,{useReducer} from "react";

import firebase from "../../firebase";

import CarsContext from "./CarsContext";
import CarsReducer from "./CarsReducer";

import { CARGAR_CATALOGO, CONFIRMAR_VEHICULO, ELIMINAR_VEHICULO, MOSTRAR_RESUMEN, SELECCIONAR_VEHICULO } from "../../type";

const CarsState = props=>{
    const initialState={
        cars:[],
        vehicle: [],
    }
    const [state, dispatch]= useReducer(CarsReducer,initialState)
    const cargarCatalogo = async () =>{
        try{
            const vehicle = await firebase.db.collection('Catalogo').get()
            console.log(vehicle.id)
            dispatch({
                type:CARGAR_CATALOGO,
                payload: vehicle
            })
        } catch (error) {
            console.log(error)
        }
    }
    const seleccionarVehiculo = vehicle =>{
        dispatch({
            type:SELECCIONAR_VEHICULO,
            payload:vehicle
        })
    }
    const confirmarVehiculo = cars =>{
        dispatch({
            type:CONFIRMAR_VEHICULO,
            payload:cars
        })
    }
    const mostrarResumen = total =>{
        dispatch({
            type:MOSTRAR_RESUMEN,
            payload: total
        })
    }
    const eliminarVehiculo = id =>{
        dispatch({
            type:ELIMINAR_VEHICULO,
            payload: id
        })
    }

    return(
        <CarsContext.Provider
            value={{
                cars:state.cars,
                vehicle:state.vehicle,
                cargarCatalogo,
                seleccionarVehiculo,
                confirmarVehiculo,
                mostrarResumen,
                eliminarVehiculo
            }}>

            {props.children}
        </CarsContext.Provider>
    )
}

export default CarsState;