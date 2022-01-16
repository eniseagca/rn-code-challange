import React, { useState } from 'react'
import { View, Button, TextInput, Text, StyleSheet, Image } from 'react-native'


const Login = (props) => {
  const { navigation } = props
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  function postData() {
    fetch('https://reqbin.com/sample/post/json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type':
          'application/json',
        'auth-token':
          'my-auth-token'
      },
      body: JSON.stringify({
        userName: userName,
        password: password
      })
    }).then((res) => {
      return res.json()
    }).then((res) => {
        console.log(res)
        if (res.success === "true") {
            navigation.navigate('Home')
        } else {
            // kullanıcı adı veya şifre yanlış
        }
    })
  }

  return (
    <View style={{ backgroundColor: '#313131', flex: 1 }}>
      <Image source={require('../img/kt.png')} style={{ width: 150, height: 150, marginLeft: 140, marginTop: 30 }}></Image>
      <Text style={{ fontSize: 38, color: 'gray', marginLeft: 80, marginTop: 50 }}>
        Merhaba,
        Hoş Geldin {userName} !
      </Text>

      <View style={styles.view}>
        <Text style={styles.text} >Kullanıcı Adı</Text>
        <TextInput style={styles.textInput} onChangeText={text => setUserName(text)}></TextInput>
        <Text style={styles.text}>Şifre</Text>
        <TextInput onChangeText={text => setPassword(text)} style={styles.textInput} secureTextEntry={true} ></TextInput>

      </View>
      <Button title="Giriş" color={"#84573E"} onPress={() => postData()} />

    </View>
  )
}
const styles = StyleSheet.create({

  view: {
    flex: 1,
    margin: 30
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray'
  },
  textInput: {
    color: '#84573E',
    fontWeight: 'bold',
    fontSize: 18,
    borderWidth: 1,
    borderTopColor: '#313131',
    borderRightColor: '#313131',
    borderLeftColor: '#313131',
    borderBottomColor: 'white'

  }
})

export default Login