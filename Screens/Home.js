import React, {useEffect, useState} from 'react'
import { Text, View, Button, ScrollView, FlatList } from 'react-native'

const Home = (props) => {
    const { navigation } = props
    const [users, setUsers] = useState([])
    function istekGonder () {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
           return response.json()
        }).then(res => {
            setUsers(res)
        })
    }

    useEffect(() => {
        // ekran ilk açıldığında çalışır
        istekGonder()
    }, [])

    return (
   <ScrollView>
   <View>
        <Text style={{marginLeft: 12, fontSize: 20, fontWeight: 'bold', marginTop: 12}}>Ansayfa</Text>
        <FlatList data={users} renderItem={({item, index}) => (
            <View key={index} style={{padding: 12}}>
                <Text>{item.name}</Text>
                <Text style={{color: '#606060'}}>{item.email}</Text>
            </View>
        )} />
   
        <Button title="Geri dön" onPress={() => navigation.goBack()} />

    </View>
    </ScrollView>
    )
}

export default Home