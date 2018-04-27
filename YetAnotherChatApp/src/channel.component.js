import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonStyles from './styles';

export default class Channel extends React.PureComponent {

  static navigationOptions = ({navigation}) => {
    const {channel} = navigation.state.params;
    return {title: channel};
  };

  render() {
    const {name, channel} = this.props.navigation.state.params;

    return (
      <View style={commonStyles.container}>
        <Text>{name}</Text>
        <Text>{channel}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
