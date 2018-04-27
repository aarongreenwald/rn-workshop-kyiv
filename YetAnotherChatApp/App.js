import React from 'react';
import {StackNavigator} from 'react-navigation';
import Home from './src/home.component';
import Channel from './src/channel.component';

export default StackNavigator({
  Home: {screen: Home},
  Channel: {screen: Channel}
})
