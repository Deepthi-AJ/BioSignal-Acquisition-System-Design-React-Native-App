import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, SafeAreaView } from 'react-native';
//cutoff: Vgs<=Vth Ids = 0
//saturation:Vgs > Vth, Vds > Vgs-Vth , Ids = UnCox/2 * W/L * (Vgs-Vth)^2 * (1+ (lambda * Vds))

//SPICE level 1 default model values
//w/l = 2/1 vgs = 1V and vds = 1.8V by 180 nm CMOS technology node specifications in design initially
class NMOS extends React.Component{
  constructor(){
    super();
    this.state={
      // vgs: 1,
      vg:1,
      vs:0,
      vth:0.5,
      // vds: 1.8,
      vd:1.8,
      // vs:0,
      unCox: 200,
      w:2,
      l:1,
      lambda:0.05
    }
  }

  updateTerminalVoltages=()=>{
    // this.setState({
    //   vgs: 
    // })
  }

  componentDidMount =()=>{
    updateTerminalVoltages();
  }

  nmosBehavioralModel=()=>{
    var ids = 0;
    //cutoff
    if((this.state.vg - this.state.vs) <= this.state.vth){
      ids = 0;
    //saturation  
    } else if (((this.state.vg - this.state.vs) > this.state.vth) && ((this.state.vd - this.state.vs) > ((this.state.vg - this.state.vs) - this.state.vth))){
      var k = (this.state.unCox / 2) * (this.state.w/this.state.l); 
      ids = k * (1 + (this.state.lambda * (this.state.vd - this.state.vs)));
    }
  }

  render(){
    return(
      <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
         nMOS Design Values
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Power Supply (Vdd)"
          onChangeText={(vDD) => this.setState({vDD})}
         // value={this.state.vDD}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={(vTH) => this.setState({vTH})}
          //value={this.state.vTH}
          placeholder="Threshold voltage (Vth)"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={(vG) => this.setState({vG})}
          //value={this.state.vG}
          placeholder="Gate voltage (Vg)"
          keyboardType="numeric"
        />      
        <TextInput
          style={styles.input}
          onChangeText={(vS) => this.setState({vS})}
          //value={this.state.vS}
          placeholder="Source voltage (Vs)"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={(vD) => this.setState({vD})}
          //value={this.state.vD}
          placeholder="Drain voltage (Vd)"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={(vSUB) => this.setState({vSUB})}
          //value={this.state.vSUB}
          placeholder="Substrate voltage (Vsub)"
          keyboardType="numeric"
        />            
      
        <TouchableOpacity style={styles.button} onPress={this.nmosSwitchBehavioralModel()}>
  NMOS
        </TouchableOpacity>
        <TouchableOpacity activeOpacity = { .5 } style={styles.button} onPress={()=>{this.props.navigation.navigate('BAS');}  }> 
                <Image source={require('../assets/switchButtonNavigation.png')} />
        </TouchableOpacity>
      </View>
     </SafeAreaView>    
    );
    }
  }
  
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#808011',
    padding: 8,
  },
  input: {
    height: 33,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    borderRadius:77
  },
  button: {
    height: 33,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    borderRadius:77,
    backgroundColor: "#FFFFFF",
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  paragraph: {
    margin: 12,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default NMOS;