import { CONFIRMAR_VEHICULO, ELIMINAR_VEHICULO, SELECCIONAR_VEHICULO } from "../../type";

export default (state, action) => {
    switch(action.type){
        case CARGAR_CATALOGO:
            return{
                ...state,
                Cars: action.payload
            }
        case SELECCIONAR_VEHICULO:
            return{
                ...state,
                vehicle: action.payload
            }
        case CONFIRMAR_VEHICULO:
            return{
                ...state,
                vehicle: [...state.vehicle, action.payload]
            }
        case ELIMINAR_VEHICULO:
            return{
                ...state,
                vehicle: state.vehicle.filter(articulo => articulo.id !== action.payload)
            }
        default:
            return state;
    }
}