import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import {BatLogo} from './src/BatLogo'
import { useState } from 'react';

export default function App() {
  const [showLogo, setShowLogo] = useState(true);

  async function Hide(){
    await delay(500)
    setShowLogo(!showLogo)
}

  function delay(ms: number | undefined) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

  return (
    <View style={styles.container}>
      <View style={{...styles.containerLogo, display:showLogo?'flex':'none'}}>
        <BatLogo></BatLogo>
        <Pressable style={styles.button}
          onPress={Hide}>
          <Text style={styles.text}>Ativar Bat Sinal</Text>
        </Pressable>
      </View>  

      <View style={{...styles.form, display:showLogo?'none':'flex'}}>
        <BatLogo/>
        <TextInput style={styles.textInput}          
          placeholder='Nome'
          placeholderTextColor ='#f2f2f2'   
        ></TextInput>
        <TextInput style={styles.textInput}
          placeholder='Telefone'
          placeholderTextColor ='#f2f2f2'      
        ></TextInput>
        <TextInput style={styles.textInputArea}
          placeholder='Localização'
          placeholderTextColor ='#f2f2f2'      
        ></TextInput>
        <TextInput style={styles.textInputArea}
          placeholder='Observação'
          placeholderTextColor ='#f2f2f2'      
        ></TextInput>

        <Pressable style={styles.button} onPress={Hide}>
          <Text style={styles.text}>Enviar</Text>
        </Pressable>
      </View>
      
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  containerLogo: {
    display:'flex',
    marginTop:200,
    backgroundColor: '#333333',
    alignItems:'center',
    justifyContent:'center'
  },
  button: {
    width:'80%',
    backgroundColor:'#ffbf00',
    borderRadius:32,    
    padding:16,   
    margin:10
  },
  text: {
    color:'#333',
    textAlign:'center',
    fontSize:20
  },
  textInput: {
    width:'80%',
    padding:16,
    marginBottom:24,
    borderWidth:2,
    borderRadius:20,
    backgroundColor:'#131313',
    borderColor:'#ffbf00',
    justifyContent:'center',    
  },
  textInputArea: {
    width:'80%',
    height:'10%',
    padding: 16,
    marginBottom:24,
    borderWidth:2,
    borderRadius:20,
    backgroundColor:'#131313',
    borderColor:'#ffbf00',
    justifyContent:'center'
  },  
  form:{
    marginTop:100,
    width:'100%',
    alignItems:'center',
  }
});
