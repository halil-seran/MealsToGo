import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantsStack = createStackNavigator();

const createScreenOptions = ({ route }) => {
  return {
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
    </RestaurantsStack.Navigator>
  );
};
