import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground, 
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

class Home extends React.Component{
  constructor(){
    super();
    this.state = {
            dimensions: {
              window: windowDimensions,
              screen: screenDimensions,
            }
    }
  }
  
  onChange = ({window, screen}) => {
    this.setState({dimensions: {window, screen}});
  };

  componentDidMount() {
    this.dimensionsSubscription = Dimensions.addEventListener(
      'change',
      this.onChange,
    );
  }

  callFun = () =>
  {
    this.props.navigation.navigate('BAS');
                // <AppContainer/>

    // alert("Image Clicked!!!");
  }
  
  render(){
    return(
        <SafeAreaView style={styles.container}>
          <ImageBackground source={require('../assets/bgScreen1.png')}  resizeMode="stretch"  style={[styles.image,{height: this.state.dimensions.window.height},{width: this.state.dimensions.window.width}]}>
            <Text> Development Mode! {this.state.dimensions.screen.height} {this.state.dimensions.screen.width}</Text>
            <TouchableOpacity activeOpacity = { .5 } style={styles.button} onPress={()=>{this.callFun();}  }> 
                <Image source={require('../assets/switchButtonNavigation.png')} />
            </TouchableOpacity>
           
          </ImageBackground>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#000000',
    padding: 18,
  },
  image: {
    flex: 1,
    height:'5%',
    width: '5%',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    // backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop:'125%'
  },
});

export default Home;