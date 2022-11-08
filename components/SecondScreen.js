import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';


function SecondScreen({navigation}) {

  return (
    <View style={styles.body} >
      <Text style={styles.container}>
        PAGE 2
      </Text>
     <Button title='Click 2'
        onPress={()=>navigation.navigate("Third")}
     />
   </View>
  );
}

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

export default SecondScreen;
