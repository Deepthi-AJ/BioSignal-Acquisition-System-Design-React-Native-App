import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

class MOSmodel extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text1}> MOS model </Text>
        <TouchableOpacity
              style = {styles.button1}
              onPress = {()=>{this.props.navigation.navigate('NMOS')}}
            >
              <Text style={styles.text2}> NMOS model </Text>
              <Image style={styles.image} source={require('../assets/nmos.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress = {()=>{this.props.navigation.navigate('PMOS')}}
            >
              <Text style={styles.text2}> PMOS model </Text>
              <Image style={styles.image} source={require('../assets/pmos.PNG')} />
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
     backgroundColor: 'rgb(140,100,180)',
  },
  button: {
    alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop:'125%'
  },
  button1:{
    alignItems: 'center',
    backgroundColor: 'rgb(140,90,180)',
    padding: 10,
    width: '100%',
    height: '70%',
    marginTop:'1%',
    justifyContent: 'center'
  },
  button2:{
    alignItems: 'center',
    backgroundColor: 'rgb(140,90,180)',
    padding: 10,
    width: '100%',
    height: '70%',
    marginTop:'1%',
    justifyContent: 'center'
  },
  image: {
    height:'70%',
    width: '70%',
    justifyContent: 'center',
  },
  text1:{
    color: 'white',
    padding: '5%',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgb(100,20,180)',
  },
  text2:{
    color: 'white',
    padding: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgb(140,100,180)',
  },
});

export default MOSmodel;