import React from 'react';
import {
    Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function ThirdScreen() {

  return (
    <View style={styles.body} >
      <Text style={styles.container}>
        PAGE 3
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize:40,
  },
  body : {
    alignItems:"center",
    flex:1,
    justifyContent:"center",
  }
  });

export default ThirdScreen;