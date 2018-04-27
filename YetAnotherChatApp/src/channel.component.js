import React from 'react';
import {View, Text, TextInput, Button, SafeAreaView, ScrollView, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {subscribeToMessages, addMessage} from './message-service';
import commonStyles from './styles';

export default class Channel extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageDraft: ''
    }
  }

  static navigationOptions = ({navigation}) => {
    const {channel} = navigation.state.params;
    return {title: channel};
  };

  componentDidMount() {
    const {channel} = this.props.navigation.state.params;
    this.unsubscribe = subscribeToMessages({channel, callback: this.onReceiveMessages})
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onReceiveMessages = messages => this.setState({messages});

  onChangeText = messageDraft => {
    this.setState({messageDraft});
  };

  sendMessage = () => {
    const {name} = this.props.navigation.state.params;

    addMessage({text: this.state.messageDraft, sender: name});
    this.setState({messageDraft: ''});
  };

  render() {
    const {name, channel} = this.props.navigation.state.params;

    return (

        <KeyboardAvoidingView keyboardVerticalOffset={90} enabled behavior="padding" style={commonStyles.container}>
          <SafeAreaView>
            <ScrollView style={{flex: 1}}>
              {
                this
                  .state
                  .messages
                  .map(({text, id}) => <View key={id}><Text>{text}</Text></View>)
              }
            </ScrollView>
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                <TextInput style={styles.input}
                           onChangeText={this.onChangeText}
                           value={this.state.messageDraft}
                           placeholder={'Type a message'} />
                <Button disabled={!this.state.messageDraft} title={'Send'} onPress={this.sendMessage}/>
            </View>
          </SafeAreaView>

        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    // width: '100%',
    flex: 1,
    height: 30
  }
});
