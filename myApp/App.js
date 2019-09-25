import React , {Component} from 'react';
import { StyleSheet, Text, View ,Button ,TextInput} from 'react-native';

export default class App extends Component{
  
  constructor()
  {
    super();
    this.state = { celcius: 0 }
  }
  
  convert = (e) => {
    const a = parseInt(e)
    const converted = (a-32)/1.8
    this.setState({
      celcius: converted.toFixed(2)
    })
  }

  render()
  {
    return(
      <View style={styles.container}>
      <Text style={styles.textHeader}>Temperature Convert</Text>
      <Text style={styles.unitText}>Farenheit</Text>
      <TextInput
          style={styles.inputBox}
          keyboardType='numeric'
          placeholder="Temp in Farenheit"
          onChangeText={(e)=> this.convert(e)}    
        />
      <View>    
        <Text style={styles.tempText}>{this.state.celcius}</Text>
        <Text style={styles.unitText}>Celcius</Text>
      </View>   
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: "#5c6bc0"
    
  },
  textHeader:{
    display: 'flex',
    paddingHorizontal: 120,
    paddingVertical: 50,
    alignItems: 'center',
    fontSize: 30,
    textAlign: "center",
    textAlignVertical:"center",
    color:'white',
    backgroundColor: "#311b92",
    marginVertical: 20,
    
  },
  inputBox: {
    marginVertical: 20,
    borderWidth: 1,
    borderColor: 'grey',
    width:"70%",
    fontSize: 16,
    textAlign:"center",
    color:'black',
    backgroundColor:"white"
  },
  tempText:{
    marginVertical: 30,
    textAlign: "center",
    fontSize: 48,
    color:'white',
  },
  unitText:{
    fontSize: 24,
    textAlign:"center",
    paddingVertical: 10,
    color:'white',
  },

});
