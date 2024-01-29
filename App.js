import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, Alert, SafeAreaView, Platform, TextInput } from 'react-native';

const logo = require('./assets/logo-og.png')
export default  function App() {
  return(
    <SafeAreaView style={[styles.androidSafeArea]}>
      <ScrollView>
        <View style={styles.container}>

          <Image source={logo} style={{width: 200, height: 200, borderRadius: 20, borderWidth: 2, borderColor: 'purple'}} />

          <View>
            <Text style={styles.labelinput}>Nome</Text>
            <TextInput placeholder='Digite seu nome' style={styles.input}></TextInput>

            <Text style={styles.labelinput}>Senha</Text>
            <TextInput secureTextEntry={true} placeholder='Digite sua senha' style={styles.input}></TextInput>
          </View>


          <Pressable
            style={({pressed})=>[
              {
                backgroundColor:pressed ? 'purple' : 'lightskyblue'
              },
              styles.button
            ]}
            onPress = {()=> Alert.alert('Boas Vindas!')}>
              <Text>Acessar</Text>
          </Pressable>

        
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  androidSafeArea:{
    paddingTop: Platform.OS === 'android' ? 35:0
  },
  container: {
    display: 'flex',
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: 430,
    height: 832
  },
  BorderMargin:{
    borderRadius: 100,
    margin: 10,
    padding: 10,
    borderWidth: 3,
  },
  button:{
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 300,
    marginTop: 20,
    fontFamily: 'monospace',
    fontWeight: 'bold'
  },
  input:{
    width: 300,
    height: 40,
    backgroundColor: 'lightskyblue',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    borderRadius:10,
    color: 'black',
    fontFamily: 'monospace',
    fontSize:  16,
    fontWeight: 'bold'
  },
  labelinput:{
    width: '100%',
    fontSize: 20,
    marginBottom: 1,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'monospace',
    color: 'white'
  }
});