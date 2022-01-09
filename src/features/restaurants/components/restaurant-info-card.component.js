import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg"; //asset lerdeki stari goruntulemek icin

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Section,
  Rating,
  SectionEnd,
} from "./restaurant-info-card-styles";



export const RestaurantInfoCard = ({ restaurant = {} }) => {
  //restaurant is a object
  //name i restaurant.name olarak kullanmamak icin yukarda res = {} yaptik empty object suan cunku
  const {
    name = "some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_960_720.jpg",
    ],
    address = "x sokak y cadde z mahalle",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant; //this is destructuring

  const ratingArray = Array.from(new Array(Math.floor(rating))); //array olusturduk //math floor 2.3 gibi de olabilmesi icin

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">Closed Temporarily</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({});
