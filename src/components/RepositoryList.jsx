import React from "react"
import { View, Text, FlatList } from "react-native"
import repositories from "../data/repositories"
import RepositoryItem from "./RepositoryItem"

const RepositoryList = () => {
    return (
        /*
        -- Con scroll de pantalla --
        -- Llamo a un componente específico para renderizar items 
        -- Le paso cada item como un prop (argumento) --
        */
        <FlatList
            data={repositories} //qué mostar
            renderItem={({ item: repo }) => ( //Similar a .map
                //Creo un componente al que le voy pasando los items
                <RepositoryItem {...repo}/>
            )}>
        </FlatList>

        /*
        -- Con scroll de pantalla --
        -- Renderizando cada item aquí directamente --
        <FlatList
            data={repositories} //qué mostar
            renderItem={({ item: repo }) => ( //Similar a .map
                <View
                    key={repo.id}
                    style={
                        {
                            padding: 20,
                            paddingBottom: 10,
                            paddingTop: 5
                }}>
                    <Text
                        style={
                            {
                                fontWeight: "bold",
                                marginBottom: 5
                    }}>
                        {repo.id}
                    </Text>
                    <Text>{repo.fullname}</Text>
                    <Text>{repo.description}</Text>
                    <Text>{repo.languaje}</Text>
                    <Text>{repo.forksCount}</Text>
                    <Text>{repo.url}</Text>
                </View>
            )}>
        </FlatList>


        -- Sin scroll de pantalla --
        <View>
            { repositories.map (
                repo => (
                    <View key={repo.id}>
                        <Text>{repo.id}</Text>
                        <Text>{repo.fullname}</Text>
                        <Text>{repo.description}</Text>
                        <Text>{repo.languaje}</Text>
                        <Text>{repo.forksCount}</Text>
                        <Text>{repo.url}</Text>
                    </View>
            ))}        
        </View>*/
    )
}

export default RepositoryList