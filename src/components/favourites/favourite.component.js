import React, { useContext } from "react";

import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled.TouchableOpacity`
  position: absolute;
  top: 24px;
  right: 26px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find(
    (r) => r.placeId === restaurant.placeId
  );

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={27}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};

/*
background-color: transparent;
border-radius: 50px;
width: 64px;
border-color: #20232a;*/
