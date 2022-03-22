import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantCardInfo } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

export const RestarantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar style={styles.search} />
    </View>
    <View style={styles.list}>
      <RestaurantCardInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
    container : {
      flex: 1 , marginTop : isAndroid? StatusBar.currentHeight : 0
    },
    search : {
      padding : 16
    },
    list : {
      flex: 1, padding : 16
    }
  });