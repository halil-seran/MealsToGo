import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

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
        component={RestaurantDetailScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
