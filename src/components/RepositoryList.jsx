import React from "react"
import { View, Text, FlatList } from "react-native"
import repositories from "../data/repositories"

const RepositoryList = () => {
    return (
        //Con scroll de pantalla
        <FlatList
            data={repositories} //qué mostar
            renderItem={({ item: repo }) => ( //Similar a .map
                <View
                    key={repo.id}
                    style={
                        {
                            padding: 20,
                            paddingBottom: 5,
                            paddingTop: 5
                        }}>
                    <Text>{repo.id}</Text>
                    <Text>{repo.fullname}</Text>
                    <Text>{repo.description}</Text>
                    <Text>{repo.languaje}</Text>
                    <Text>{repo.forksCount}</Text>
                    <Text>{repo.url}</Text>
                </View>
            )}>
        </FlatList>

        /* //Sin scroll de pantalla
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