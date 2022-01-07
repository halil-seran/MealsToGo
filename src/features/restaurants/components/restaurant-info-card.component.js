import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet, View, Image } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border: 2px solid black;
  border-radius: ${(props) => props.theme.space[3]};
  overflow: hidden;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding:  ${(props) => props.theme.space[3]};
  background-color: ${props => props.theme.colors.ui.primary};
`;
// (Text) seklindede yazabilirdik ama default component old. icin yazmamiza gerek yok
// ama Card default degil oyuzden (Card) seklinde yazmamiz gerekiyor
const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${props => props.theme.colors.ui.primary};
`;
//props (props) seklinde de yazilabilir
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  //restaurant is a object
  //name i restaurant.name olarak kullanmamak icin yukarda res = {} yaptik empty object suan cunku
  const {
    name = "some restaurant",
    icon,
    photos = [
      "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg",
    ],
    address = "x sokak y cadde z mahalle",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant; //this is destructuring

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({});
