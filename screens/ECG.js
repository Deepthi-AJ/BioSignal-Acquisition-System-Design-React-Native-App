import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
//IMPORT LOCAL DB FOR SENSOR DATA OR KAGGLE
//onPress = {()=>{this.props.navigation.navigate('MOSmodel')}}
class ECG extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>ECG ACQUISITION SYSTEM</Text>
        <TouchableOpacity
              style = {styles.button1}
        >   
          <Text>SENSOR DATA</Text>   
        </TouchableOpacity>
        <TouchableOpacity
              style={styles.button2}
        >    
            <Text>ANALOG TO DIGITAL CONVERSION</Text>   
        </TouchableOpacity>
        <TouchableOpacity
              style = {styles.button1}
              onPress={()=>{this.props.navigation.navigate('ECGplot')}}
        >   
            <Text>ELECTROCARDIOGRAPH</Text>      
        </TouchableOpacity>
        <TouchableOpacity
              style={styles.button2}
        >    
            <Text>DIAGNOSIS</Text>   
        </TouchableOpacity>
        <TouchableOpacity activeOpacity = { .5 } style={styles.button} onPress={()=>{this.props.navigation.navigate('BAS');}  }> 
                <Image source={require('../assets/switchButtonNavigation.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'rgb(100,30,180)',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button1:{
    alignItems: 'center',
    backgroundColor: '#9090AF',
    padding: 10,
    width: '100%',
    height: '40%',
    marginTop:'3%',
    justifyContent: 'center',
    borderRadius: 100
  },
  button2:{
    alignItems: 'center',
    backgroundColor: '#9090AF',
    padding: 10,
    width: '100%',
    height: '40%',
    marginTop:'3%',
    justifyContent: 'center',
    borderRadius: 100
  },
});

export default ECG;