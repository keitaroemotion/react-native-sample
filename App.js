/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component }                           from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    bigBlue: {
        color:      'blue',
        fontWeight: 'bold',
        fontSize:   30,
    },
  
    red: {
        color:      'red',
    },
});

export default class LotsOfStyles extends Component {
    render() {
        return ( 
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>boo</Text>
            </View>
        );
    }
}

// export default class Bananas extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}}/>
//     );
//   }
// }

// AppRegistry.registerComponent('AwesomeProject', () => Bananas);
// 
// import React, { Component } from 'react';
// import { Text, View } from 'react-native';
// 
// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Hello, world!</Text>
//       </View>
//     );
//   }
// }
// 
