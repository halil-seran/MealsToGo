import styled from "styled-components/native";
import { FlatList } from "react-native";

export const RestaurantList = styled(FlatList).attrs({
    //bu sipesifik bir propu FlatList icin kullanmamiza olarak sagliyor
    //bu sekilde FlatListin ContentCont.. propunu Resta..List de kullanabildik
    contentContainerStyle: {
      padding: 16,
      backgroundColor: "#e2ece9",
    },
  })``;