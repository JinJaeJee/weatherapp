import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BasicWeather = () => {
    return (
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Feather name="sun" size={100} color="black"/>
          <Text style={styles.temp}>6</Text>
          <Text style={styles.feels}>Feels like 5</Text>
          <View style={styles.highlowWrapper}>
            <Text style={styles.highlow}>High: 8</Text>
            <Text style={styles.highlow}>Low: 6</Text>
          </View>
          </View>
          <View style={styles.bodyWrapper}>
            <Text style={styles.desc}>Its sunny</Text>
            <Text style={styles.messages}>Its perfect t-shirt weather</Text>
          </View>

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
    
  },
  temp: {
    backgroundColor: 'yellow',
    color: "gray",
    fontSize: 48,
  },
  feels: {
    backgroundColor: 'lightblue',
    color: "gray",
    fontSize: 30,
  },
  highlow: {
    backgroundColor: 'lightgreen',
    color: "gray",
    fontSize: 20,
  },
  highlowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  desc: {
    fontSize: 48,
  },
  bodyWrapper: {
    fontSize: 30,
  },


})

export default BasicWeather