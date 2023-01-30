import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

class Comparator extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Biomedical Signal Acquisition Circuit Simulator App</Text>
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
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default Comparator;