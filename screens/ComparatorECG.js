import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

class ComparatorECG extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <TouchableOpacity
              style = {styles.button1}
              onPress = {()=>{this.props.navigation.navigate('Comparator')}}
            >
              <Image style={styles.image} source={require('../assets/Comparator.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress = {()=>{this.props.navigation.navigate('ECG')}}
            >
              <Image style={styles.image} source={require('../assets/ECG.jpg')} />
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
    backgroundColor: 'blue',
  },
  button1:{
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 10,
    width: '100%',
    height: '300%',
    marginTop:'3%',
    justifyContent: 'center'
  },
  button2:{
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 10,
    width: '100%',
    height: '300%',
    marginTop:'3%',
    justifyContent: 'center'
  },
  image: {
    height:'100%',
    width: '100%',
    justifyContent: 'center',
  },
});

export default ComparatorECG;