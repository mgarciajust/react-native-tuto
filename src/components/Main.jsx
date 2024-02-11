import React from "react"
import { Text, View } from "react-native" //Hay que importar los componentes básicos
import Constants from "expo-constants" //Para dar estilos predefinidos
import RepositoryList from "./RepositoryList.jsx"

//En Main inicializamos nuestra aplicación
const Main = () => {
    return (
        <View style={ //Para dar estilo usar prop style={{}}
            { 
                marginTop: Constants.statusBarHeight 
                //Altura predefinida para barra hora/bateria superior
            }}>
            <Text>Rate Repository Application</Text>
            <RepositoryList />
        </View>
    )
}

export default Main