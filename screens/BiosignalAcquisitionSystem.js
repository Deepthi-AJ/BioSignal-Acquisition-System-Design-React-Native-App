import * as React from 'react';
import {  Text, 
          View, 
          StyleSheet, 
          TouchableOpacity,
          SafeAreaView,
          Image
       } from 'react-native';



class BAS extends React.Component{
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <View style= {styles.textContainer}>
            <Text style={styles.text1}>Biomedical Signal Acquisition System</Text>
            <Text style={styles.text2}> A biosignal is acquired using transducers which need to be digitized using an ADC circuit. </Text>
            <Text style={styles.text3}> System Design </Text>
        </View>
        <View style= {styles.container2}>
            <TouchableOpacity
              style = {styles.button1}
              onPress = {()=>{this.props.navigation.navigate('MOSmodel')}}
            >
              <Image style={styles.image} source={require('../assets/NMOSPMOS.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress = {()=>{this.props.navigation.navigate('ComparatorECG')}}
            >
              <Image style={styles.image} source={require('../assets/COMPARATORECG.png')} />
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'rgb(100,30,180)',
  },
  text1:{
    color: 'white',
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgb(100,20,180)',
  },
  text2:{
    color: 'white',
    padding: 20,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgb(140,100,180)',
  },
  text3:{
    color: 'white',
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  container2:{
    backgroundColor: 'rgb(100,0,180)',
  },
  button: {
    alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop:'125%'
  },
  button1:{
    alignItems: 'center',
    backgroundColor: 'rgb(140,100,180)',
    padding: 10,
    width: '100%',
    height: '300%',
    marginTop:'1%',
    justifyContent: 'center'
  },
  button2:{
    alignItems: 'center',
    backgroundColor: 'rgb(140,100,180)',
    padding: 10,
    width: '100%',
    height: '300%',
    marginTop:'1%',
    justifyContent: 'center'
  },
  image: {
    height:'70%',
    width: '70%',
    justifyContent: 'center',
  },
});

export default BAS;