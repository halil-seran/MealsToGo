import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantsStack = createStackNavigator();

const createScreenOptions = ({ route }) => {
  return {
    ...TransitionPresets.ModalPresentationIOS, // modal has will shown as ios
    headerShown: false, //with this, header is not showing
  };
};

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator screenOptions={createScreenOptions}>
      <RestaurantsStack.Screen
        name="Restaurants1" //same name error
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={() => <Text>Restaurant Detail</Text>}
      />
    </RestaurantsStack.Navigator>
  );
};
