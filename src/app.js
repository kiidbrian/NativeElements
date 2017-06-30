import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

class App extends Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu' }}
          centerComponent={{ text: 'MY TITLE' }}
          rightComponent={{ icon: 'home' }}
        />
      </View>
    );
  }
}

export default App;
