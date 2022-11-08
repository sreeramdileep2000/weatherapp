import React from 'react';
import {
    Button,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';


function HomeScreen({navigation}) {

  return (
    <View style={styles.body} >
        <Text style={styles.text1}>
            Welcome to 
        </Text>
        <Text style={styles.text2}>
            TCSWeather
        </Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Second")}>
            <Image 
                style={styles.image}
                source={require('../images/cloud.png')}/>
        </TouchableOpacity>
        <Text style={styles.text3}>
            Click the cloud, to check your forecast
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
text1: {
    fontSize:30,
    fontFamily:"sans-serif-thin",
    color: "#fff",
    },
text2: {
    fontSize:36,
    fontFamily:"sans-serif-light",
    color: "#FF5CE1",
  },
text3: {
    fontSize:15,
    fontFamily:"sans-serif-light",
    color: "#fff",
    fontStyle:"italic"
    },
body : {
    backgroundColor:"#171717",
    alignItems:"center",
    flex:1,
    justifyContent:"center",
  },
image:{
    width:300,
    height:300,
    },
  }
);

export default HomeScreen;
