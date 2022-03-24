import React from "react";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantCardInfo } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { useContext } from "react";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList)`
  contentcontainerstyle : {
    padding: 16;
  }
`;

const LoadingContainer = styled.View`
  position : absolute;
  top: 50%;
  left : 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left : -25px;
`;

export const RestarantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      { isLoading && (
        <LoadingContainer >
          <Loading 
            size={50}
            animating={true}
            color = {Colors.blue300}
          />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => <RestaurantCardInfo restaurant={item}/>}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
