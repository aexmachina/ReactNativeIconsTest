/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;
var { Icon, } = require('react-native-icons');

var ReactNativeIconsTest = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Icon
          name='ion|beer'
          size={150}
          color='#887700'
          style={styles.beer}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  beer: {
    borderWidth: 1,
    borderColor: 'red',
    height: 150,
    width: 150,
  },
});

AppRegistry.registerComponent('ReactNativeIconsTest', () => ReactNativeIconsTest);
