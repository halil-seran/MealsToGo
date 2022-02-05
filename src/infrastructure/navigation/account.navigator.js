import React from "react";

import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false, //with this, header is not showing
  };
};

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={createScreenOptions}>
      <Stack.Screen
        name="Main"
        component={() => (
          <View>
            <Text>Account Screen</Text>
          </View>
        )}
      />
      <Stack.Screen
        name="Login"
        component={() => (
          <View>
            <Text>Login Screen</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
};
