import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  //bu sipesifik bir propu FlatList icin kullanmamiza olarak sagliyor
  //bu sekilde FlatListin ContentCont.. propunu Resta..List de kullanabildik
  contentContainerStyle: {
    padding: 16,
    backgroundColor: "lightyellow",
  },
  
})``; 

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
