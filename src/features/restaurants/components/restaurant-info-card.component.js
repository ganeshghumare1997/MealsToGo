import React from "react";
import { Card } from "react-native-paper";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

const Title = styled.Text`
  padding : 16px;
  color : red;
`;

export const RestaurantCardInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    Icon,
    photos = [
      "https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{ uri : photos[0]}} />
        <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
    card : { backgroundColor : "white"},
    cover : { padding : 20, backgroundColor: "white"},
    title : { padding : 16 }
})