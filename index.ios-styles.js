import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet } from 'react-native';




class HelloWorld extends Component {
  render(){
    return (
      <View>
        <Text style={styles.red}> just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}> bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  bigblue:  {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red:{
    color: 'red',
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
