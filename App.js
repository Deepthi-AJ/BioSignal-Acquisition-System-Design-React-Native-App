import React, { Component } from "react";
import {
  StyleSheet,
} from 'react-native';
import Home from './screens/HomeScreen';
import BAS from './screens/BiosignalAcquisitionSystem';
import MOSmodel from './screens/MOSmodel';
import NMOS from './screens/Nmos';
import PMOS from './screens/Pmos';
import ComparatorECG from './screens/ComparatorECG';
import Comparator from './screens/Comparator';
import ECG from './screens/ECG';
import ECGplot from './screens/ECGplot';
import {createSwitchNavigator} from 'react-navigation'; 

const MySwitchNavigator = createSwitchNavigator({
    Home: Home,
    BAS: BAS,
    MOSmodel: MOSmodel,
    NMOS: NMOS,
    PMOS: PMOS,
    ComparatorECG: ComparatorECG,
    Comparator: Comparator,
    ECG: ECG,
    ECGplot: ECGplot
  },
  {
  initialRouteName: 'Home'
  }
);

export default class App extends Component {
  render(){    
     return(
        <MySwitchNavigator />
      )
  }
}

const styles = StyleSheet.create({

});
