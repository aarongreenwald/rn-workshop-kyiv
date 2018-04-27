import React from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import commonStyles from './styles';

export default class Home extends React.PureComponent {

  onButtonPress = () => {
    this.props.navigation.navigate('Channel', {
      ...this.state
    })
  };

  render() {
    return (
      <View style={commonStyles.container}>
        <TextInput style={styles.textInput}
                   placeholder={'Name'}
                   onChangeText={name => this.setState({name})}/>
        <TextInput style={styles.textInput}
                   placeholder={'Channel'}
                   onChangeText={channel => this.setState({channel})}/>
        <Button title={'Join Channel'} onPress={this.onButtonPress} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 30,
    borderColor: 'orangered',
    borderWidth: 1
  }
});

